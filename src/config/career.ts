// Last edited: 2026-10-03 12:49 CDT

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}



export const careerList: Array<CareerItemType> = [
  {
    company: 'Hemut (YC X25)',
    title: 'Software Engineering Intern',
    logo: 'hemut',
    start: 'Jun 2026',
    end: 'Present'
  },
  {
    company: 'Argonne National Laboratory',
    title: 'Software Engineering Intern',
    logo: 'argonne',
    start: 'Jun 2025',
    end: 'Aug 2025'
  },
  {
    company: 'University of Chicago Department of Physics',
    title: 'Undergraduate Researcher',
    logo: 'uchicago',
    start: 'Feb 2025',
    end: 'May 2026'
  },
  {
    company: 'Princeton University Department of Mechanical & Aerospace Engineering',
    title: 'Computational Research Intern',
    logo: 'princeton',
    start: 'Jun 2023',
    end: 'Aug 2023'
  },
]
