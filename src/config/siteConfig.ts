// Last edited: 2026-10-03 13:20 CDT
// site config
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jacquesattinger.github.io'

// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: 'About',
    href: '/'
  },
  // {
  //   name: 'About',
  //   href: '/about'
  // },
  {
    name: 'Projects',
    href: '/projects'
  },
  // {
  //   name: 'Blogs',
  //   href: '/blogs'
  // },
  {
    name: 'Research',
    href: '/research'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: 'About',
    href: '/'
  },
  // {
  //   name: 'About',
  //   href: '/about'
  // },
  {
    name: 'Projects',
    href: '/projects'
  },
  // {
  //   name: 'Blogs',
  //   href: '/blogs'
  // },
  {
    name: 'Research',
    href: '/research'
  }
]
