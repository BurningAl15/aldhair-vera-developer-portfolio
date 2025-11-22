// Central exports for UI components only. Avoid importing heavy canvas
// components here so a general `import { ... } from 'components'` does not
// pull `three` / `@react-three/*` into unrelated bundles.
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
import Feedbacks from './Feedbacks';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

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