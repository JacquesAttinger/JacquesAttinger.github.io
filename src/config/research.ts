// Research page

export type ResearchItemType = {
    institution: string
    role: string
    logo: string
    start: string
    end: string
    description: string
    images?: string[]
    publications?: Array<{
        title: string
        authors: string
        link: string
        venue?: string
        year?: string
    }>
    tags?: string[]
}