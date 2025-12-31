import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('SEO Component', () => {
    it('renders title and meta tags', async () => {
        const title = 'Test Title';
        const description = 'Test Description';

        render(
            <HelmetProvider>
                <SEO title={title} description={description} />
            </HelmetProvider>
        );

        await waitFor(() => {
            expect(document.title).toBe('Test Title | Aldhair Vera');
            const metaDescription = document.querySelector('meta[name="description"]');
            expect(metaDescription).toHaveAttribute('content', description);
        });
    });
});
