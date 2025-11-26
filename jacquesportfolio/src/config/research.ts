// Research page

export type PublicationItemType = {
    title: string
    authors: string
    link: string
    venue: string
    date: string
}


export const publications: Array<PublicationItemType> = [
    {
        title: 'Fully Atom-Efficient Solvent-Mediated Biopolymer Manufacturing: A Base Case Illustrated with Macromolecular Surfactants Tailored to Stable Polymer–Water Interfaces',
        authors: 'Baker Kuehl, Sharan Raman, Andrew Becker, Vivek Garg, Jefferson Roberts-Dobie, Anna McCaslin, Joran Brensdal, Jacques Attinger, Lauren Burton, Michael Forrester, Austin Hohmann, Eric W. Cochran',
        link: 'https://pubs.acs.org/doi/full/10.1021/acsami.4c12730',
        venue: 'ACS Applied Materials & Interfaces',
        date: 'Oct 2024'

    },
    {
        title: 'Dimethoxymethane low- and intermediate-temperature oxidation up to 100 atm',
        authors: 'Bowen Mei, Ziyu Wang, Andy Thawko, Ning Liu, Laura Thompson, Jacques Attinger, Yiguang Ju',
        link: 'https://www.sciencedirect.com/science/article/pii/S1540748924004589',
        venue: 'Proceedings of the Combustion Institute',
        date: 'Jan 2024'

    },
]