// projects
export const projectHeadLine = "Selected Projects"
export const projectIntro = ""

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: '轻息',
    description:
      '一款呼吸训练、缓解压力、提升专注力的“小而美”app',
    link: { href: 'apps.apple.com/us/app/%E8%BD%BB%E6%81%AF/id6742171445', label: '轻息' },
    category: ['App'],
    techStack: ['SwiftUI'],
    tags: ['App', 'iOS'],
    logo: '/images/icon/breathe-app-icon.png',
  },
  {
    name: 'SEO Explore',
    description:
      'Explore all the best SEO tools in one place.',
    link: { href: 'seoexplore.com', label: 'SEO Explore' },
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['SEO']
  },
  {
    name: 'GitHub Cards',
    description:
      'Showcase your GitHub contributions into stunning visual cards.',
    link: { href: 'github.cards', label: 'GitHub Cards' },
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Visual Cards', 'GitHub Contribution Cards']
  },
  {
    name: 'AI Best Tools',
    description:
      'Find the best AI tools in AIBest.tools',
    link: { href: 'aibest.tools', label: 'AI Best Tools' },
    logo: 'images/icon/aibesttools.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['AI', 'Tools Directory']
  },
  {
    name: 'Best Directories',
    description:
      'Your ultimate directory of directories.',
    link: { href: 'bestdirectories.org', label: 'Best Directories' },
    logo: '/images/icon/bestdirectories.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Directory of Directories']
  },
  {
    name: 'User Growth',
    description:
      'Boost Your business growth with UserGrowth.link',
    link: { href: 'usergrowth.link', label: 'User Growth' },
    logo: '/images/icon/usergrowth.ico',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['User Growth', 'Marketing', 'SEO']
  },
  {
    name: 'Dev Toolset',
    description:
      'Open-source database-free tools directory.',
    link: { href: 'devtoolset.net', label: 'Dev Toolset' },
    logo: '/images/icon/devtoolset.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Open Source', 'Database-Free', 'Tools Directory']
  },
  {
    name: 'Domain Score',
    description:
      'Ultimate AI-Powered tool for domain scoring and evaluation',
    link: { href: 'domainscore.ai', label: 'Domain Score' },
    logo: '/images/icon/domainscore.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['Domain', 'AI', 'SEO']
  },
  {
    name: 'MagicBox Tools',
    description:
      'Find the best AI tools in MagicBox.tools',
    link: { href: 'magicbox.tools', label: 'MagicBox Tools' },
    logo: '/images/icon/magicbox.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['AI', 'Tools Directory']
  },
]

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'RHEED Camera Viewer',
    description: 'RHEED (Reflection high-energy electron diffraction) live viewing software with graphical user interface',
    link: { href: 'github.com/JacquesAttinger/rheed-viewer', label: 'RHEED Camera Viewer' },

  },
  {
    name: 'Mini-MBE Graphical User Interface',
    description:
      'Graphical User Interface for Miniaturized Molecular Beam Epitaxy (MBE) setup',
    link: { href: 'github.com/JacquesAttinger/Mini-MBE-Graphical-User-Interface', label: 'Mini-MBE' },
  },
  {
    name: 'Storely',
    description:
      'AI-powered e-commerce platform',
    link: { href: 'github.com/JacquesAttinger/ClaudeVibeSDK.git', label: 'Storely' },
  },
  {
    name: 'SLADS-Net',
    description:
      'Neural network trained dynamic sampling algorithm for scanning microscopy',
    link: { href: 'github.com/JacquesAttinger/SLADS-Net', label: 'SLADS-Net' },
  },
]
