
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'University of Chicago',
      major: 'Mathematics',
      logo: 'uchicago',
      start: 'Sep 2024',
      end: 'Jun 2028'
    },
  ]