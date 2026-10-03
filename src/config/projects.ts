// Last edited: 2026-10-03 13:35 CDT
// projects
export const projectHeadLine = "Selected Projects"
export const projectIntro = ""

export type ProjectItemType = {
  name: string
  description: string
  link?: { href: string, label: string }
  isPrivate?: boolean
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'ChessBuddy',
    description:
      'Upload a chess game and get plain-English coaching for every move: Stockfish evaluates each position, Claude explains it, and an LLM-as-judge pipeline checks the explanations against human-labeled data.',
    isPrivate: true,
    techStack: ['Python', 'TypeScript', 'React', 'LangChain', 'LangSmith', 'Claude', 'Stockfish'],
  },
  {
    name: 'Project Marshall',
    description:
      'Autonomous coding pipeline that watches a Linear board and runs Claude Code agents to plan, build, and open a pull request for each issue.',
    link: { href: 'github.com/JacquesAttinger/Project_Marshall', label: 'Project Marshall' },
    techStack: ['TypeScript', 'Bun', 'SQLite', 'Zod', 'Claude Code', 'Linear API'],
  },
  {
    name: 'job-watcher',
    description:
      'Hourly Claude routine that scans six internship boards, uses an LLM to pick the postings that fit, and sends a phone alert for each new match.',
    link: { href: 'github.com/JacquesAttinger/job-watcher', label: 'job-watcher' },
    techStack: ['Python', 'Claude', 'pytest', 'ntfy'],
  },
  {
    name: 'SLADS-Net',
    description:
      'Neural network trained dynamic sampling algorithm for scanning microscopy',
    link: { href: 'github.com/JacquesAttinger/SLADS-Net', label: 'SLADS-Net' },
    techStack: ['Python', 'PyTorch', 'scikit-learn', 'NumPy', 'SciPy'],
  },
  {
    name: 'RHEED Camera Viewer',
    description: 'RHEED (Reflection high-energy electron diffraction) live viewing software with graphical user interface',
    link: { href: 'github.com/JacquesAttinger/RHEED-Viewer', label: 'RHEED Camera Viewer' },
    techStack: ['Python', 'PySide6', 'vmbpy', 'Matplotlib'],
  },
  {
    name: 'Mini-MBE Graphical User Interface',
    description:
      'Graphical User Interface for Miniaturized Molecular Beam Epitaxy (MBE) setup',
    link: { href: 'github.com/JacquesAttinger/Mini-MBE-Graphical-User-Interface', label: 'Mini-MBE' },
    techStack: ['Python', 'PySide6', 'Modbus', 'vmbpy'],
  },
  {
    name: 'TickTick',
    description:
      'macOS menu bar timer and to-do app: the countdown shows the current task, the screen flashes when time is up, and a Notes window holds quick notes.',
    link: { href: 'github.com/JacquesAttinger/TickTick', label: 'TickTick' },
    techStack: ['Swift', 'SwiftUI', 'macOS'],
  },
]
