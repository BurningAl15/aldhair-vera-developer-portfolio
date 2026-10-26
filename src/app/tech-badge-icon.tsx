"use client";

import Image from "next/image";
import { useState } from "react";

export function TechBadgeIcon({ src, fallback }: { src?: string; fallback: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className="tech-glyph" aria-hidden="true">{fallback}</span>;
  }

  return <Image
    src={src}
    alt=""
    width={24}
    height={24}
    unoptimized
    onError={() => setFailed(true)}
  />;
}
