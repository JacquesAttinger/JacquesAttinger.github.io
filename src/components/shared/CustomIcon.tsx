// Last edited: 2026-10-03 13:20 CDT
'use client'

import {
  GithubLogo,
  Envelope,
  LinkedinLogo,
  GraduationCap,
  XLogo
} from '@phosphor-icons/react'
import Image from 'next/image'

const LOGO_SIZE = 28

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className="h-7 w-7 object-contain"
      priority={false}
    />
  );
}

export function CustomIcon({ name, size = 20 }: { name: string; size?: number }) {
  switch (name) {
    case 'github':
      return <GithubLogo size={size} weight="duotone" />;
    case 'email':
      return <Envelope size={size} weight="duotone" />;
    case 'linkedin':
      return <LinkedinLogo size={size} weight="duotone" />;
    case 'googlescholar':
      return <GraduationCap size={size} weight="duotone" />;
    case 'x':
      return <XLogo size={size} weight="duotone" />;
    case 'uchicago':
      return <Logo src="/images/icon/uchicago.png" alt="University of Chicago" />;
    case 'hemut':
      return <Logo src="/images/icon/hemut.png" alt="Hemut" />;
    case 'argonne':
      return <Logo src="/images/icon/argonnetransparent.png" alt="Argonne National Laboratory" />;
    case 'princeton':
      return <Logo src="/images/icon/princeton.png" alt="Princeton University" />;
    default:
      return null
  }
}