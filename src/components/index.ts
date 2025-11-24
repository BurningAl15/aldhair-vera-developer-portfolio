// Central exports for UI components only. Avoid importing heavy canvas
// components here so a general `import { ... } from 'components'` does not
// pull `three` / `@react-three/*` into unrelated bundles.
import Hero from '../features/landing/Hero';
import Navbar from '../layout/Navbar';
import About from '../features/about/About';
import Tech from '../features/experience/Tech';
import Experience from '../features/experience/Experience';
import Works from '../features/projects/Works';
import Feedbacks from './Feedbacks';
import Contact from '../features/contact/Contact';
import SocialMedia from '../layout/SocialMedia';
import Footer from '../layout/Footer';

export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  SocialMedia,
  Footer,
}