"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type WheelEvent } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function ZoomableProjectImage({ src, alt, width, height, className = "", priority = false }: Props) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open && dialog && !dialog.open) dialog.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);

  const close = () => {
    setOpen(false);
    setZoom(1);
  };

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    setZoom((value) => Math.min(4, Math.max(1, value + (event.deltaY < 0 ? 0.25 : -0.25))));
  };

  return <>
    <button className={`zoomable-image-button ${className}`} type="button" onClick={() => setOpen(true)} aria-label={`Ampliar imagen: ${alt}`} title="Abrir imagen y hacer zoom">
      <Image className="zoomable-image-preview" src={src} alt={alt} width={width} height={height} priority={priority} unoptimized />
    </button>
    <dialog ref={dialogRef} className="image-lightbox" aria-label={`Imagen ampliada: ${alt}`} onClose={close} onClick={(event) => { if (event.target === dialogRef.current) close(); }} onKeyDown={(event) => {
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(4, value + 0.25));
      if (event.key === "-") setZoom((value) => Math.max(1, value - 0.25));
      if (event.key === "0") setZoom(1);
    }}>
      <div className="image-lightbox-toolbar">
        <p title={alt}>{alt}</p>
        <div className="image-lightbox-controls" aria-label="Controles de zoom">
          <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.25))} aria-label="Alejar" disabled={zoom <= 1}>−</button>
          <output aria-live="polite">{Math.round(zoom * 100)}%</output>
          <button type="button" onClick={() => setZoom((value) => Math.min(4, value + 0.25))} aria-label="Acercar" disabled={zoom >= 4}>+</button>
          <button type="button" onClick={() => setZoom(1)} aria-label="Restablecer zoom">↺</button>
          <button type="button" onClick={close} aria-label="Cerrar imagen">×</button>
        </div>
      </div>
      <div className="image-lightbox-viewport" onWheel={onWheel}>
        <div className="image-lightbox-canvas" style={{ transform: `scale(${zoom})` }}>
          <Image className="image-lightbox-full" src={src} alt={alt} width={width} height={height} unoptimized />
        </div>
      </div>
      <p className="image-lightbox-hint">Ctrl/⌘ + rueda para zoom · + / − para ampliar · 0 para restablecer</p>
    </dialog>
  </>;
}
