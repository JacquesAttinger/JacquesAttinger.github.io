'use client'

import {
  GithubLogo,
  Envelope,
  LinkedinLogo,
  GraduationCap,
  XLogo
} from '@phosphor-icons/react'
import Image from 'next/image'

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
      return (
        <Image
          src="/images/icon/uchicago.png"
          alt="University of Chicago"
          width={size}
          height={size}
          priority={false}
        />
      );
    case 'argonne':
      return (
        <Image
          src="/images/icon/argonne.jpeg"
          alt="Argonne National Laboratory"
          width={30}
          height={30}
          priority={false}
        />
      );
    case 'pritzermolecularengineering':
      return (
        <Image
          src="/images/icon/pritzkermolecularengineering.jpg"
          alt="Pritzker Molecular Engineering"
          width={30}
          height={30}
          priority={false}
        />
      );
    case 'princeton':
      return (
        <Image
          src="/images/icon/princeton.png"
          alt="Princeton University"
          width={size}
          height={size}
          priority={false}
        />
      );
    case 'iowastate':
      return (
        <Image
          src="/images/icon/iowastate.png"
          alt="Iowa State University"
          width={30}
          height={30}
          priority={false}
        />
      );
    default:
      return null
  }
}