
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
    company: 'Argonne National Laboratory',
    title: 'Software Engineering Intern',
    logo: 'argonne',
    start: 'Jun',
    end: 'Aug 2025'
  },
  {
    company: 'UChicago Department of Molecular Engineering',
    title: 'Lab Systems Engineer',
    logo: 'pritzermolecularengineering',
    start: 'Feb',
    end: 'Nov 2025'
  },
  {
    company: 'Princeton University Department of Mechanical and Aerospace Engineering',
    title: 'Computational Modeling Intern',
    logo: 'princeton',
    start: 'Jun',
    end: 'Aug 2023'
  },
  {
    company: 'Iowa State University Department of Chemical and Biological Engineering',
    title: 'Student Researcher',
    logo: 'iowastate',
    start: 'Jan',
    end: 'May 2023'
  },
]