// Last edited: 2026-10-03 12:49 CDT
export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Jacques Attinger'
export const headline = 'ML Engineer and researcher'
export const introduction = "I’m Jacques, a machine learning engineer and researcher studying math and computer science at the University of Chicago. I build LLM and computer-vision systems, from RAG pipelines at Hemut to autonomous electron-microscope workflows at Argonne National Laboratory."
export const email = 'jacquesa@uchicago.edu'
export const githubUsername = 'JacquesAttinger'

// about page
export const aboutMeHeadline = "I'm Jacques Attinger, a mathematics student based in Chicago, IL."
export const aboutParagraphs = [
  "My hobbies include playing basketball, reading, and coding. I started college as a Math and Physics double major intending to pursue a career in academia, but my experience working in a lab has made me realize that I am interested in coding up solutions to real world problems."
]


// blog
// export const blogHeadLine = "What I've thinking about."
// export const blogIntro = "I've written something about AI, programming and life."


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

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];



