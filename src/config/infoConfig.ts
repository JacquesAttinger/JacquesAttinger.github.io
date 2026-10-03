// Last edited: 2026-10-03 13:35 CDT
export * from './projects'
export * from './education'
export * from './career'


// personal info
export const name = 'Jacques Attinger'
export const headline = 'ML Engineer and researcher'
export const introduction = "I’m Jacques, a machine learning engineer and researcher studying math and computer science at the University of Chicago. I build LLM and computer-vision systems, from RAG pipelines at Hemut to autonomous electron-microscope workflows at Argonne National Laboratory."
export const email = 'jacquesa@uchicago.edu'
export const githubUsername = 'JacquesAttinger'

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/jacquesattinger/',
    external: true
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/JacquesAttinger',
    external: true
  },
  {
    name: 'Email',
    ariaLabel: 'Email Jacques',
    icon: 'email',
    href: `mailto:${email}`
  },
  {
    name: 'Google Scholar',
    icon: 'googlescholar',
    href: 'https://scholar.google.com/citations?user=_p4De1QAAAAJ&hl=en',
    external: true
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/Jukwezbob4',
    external: true
  }
]
