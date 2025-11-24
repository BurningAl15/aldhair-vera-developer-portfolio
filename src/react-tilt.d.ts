declare module 'react-tilt' {
    import { Component } from 'react';

    export interface TiltOptions {
        reverse?: boolean;
        max?: number;
        perspective?: number;
        scale?: number;
        speed?: number;
        transition?: boolean;
        axis?: string | null;
        reset?: boolean;
        easing?: string;
    }

    export interface TiltProps {
        options?: TiltOptions;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
        tiltMaxAngleX?: number;
        tiltMaxAngleY?: number;
        transitionSpeed?: number;
    }

    export class Tilt extends Component<TiltProps> { }
}
