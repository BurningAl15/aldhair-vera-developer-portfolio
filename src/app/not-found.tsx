import { Footer, Header } from "./components";

export default function NotFound() {
  return <div className="wrap"><Header locale="es" /><main className="not-found"><p className="eyebrow">404</p><h1>Esta página no está aquí.</h1><a className="button button-primary" href="/">Volver al inicio ↗</a></main><Footer locale="es" /></div>;
}
