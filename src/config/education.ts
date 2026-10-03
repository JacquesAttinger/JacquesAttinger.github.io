// Last edited: 2026-10-03 12:49 CDT

// education
export type EducationItemType = {
  school: string
  major: string
  gpa?: string
  image?: string
  logo: string
  start: string
  end: string
}



export const educationList: Array<EducationItemType> = [
  {
    school: 'University of Chicago',
    major: 'B.S. in Mathematics and Computer Science',
    gpa: '3.82/4.0',
    logo: 'uchicago',
    start: 'Sep 2024',
    end: 'May 2028'
  },
]
