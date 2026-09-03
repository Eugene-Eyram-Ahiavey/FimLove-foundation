export interface Post {
    id: string
    title: string
    excerpt: string
    content: string
    image: string
    date: string
    category: string
}

export interface GalleryItem {
    id: string
    src: string
    alt: string
    category: 'education' | 'healthcare' | 'community' | 'widows' | 'team'
}

export interface Program {
    id: string
    title: string
    description: string
    impact: string
    status: 'ongoing' | 'completed' | 'upcoming'
    image: string
}

export const defaultPosts: Post[] = [
    {
        id: '1',
        title: 'Sprinkles of Love: Honoring Our Widows',
        excerpt: 'Our festive outreach provided financial support and essentials to widows and their children during the Christmas season.',
        content: 'Through the generous support of our donors, FirmLove was able to provide financial assistance and essential supplies to widows during the festive season. This initiative ensures that these families feel loved and supported during the holidays.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
        date: '2025-12-28',
        category: 'Widows'
    },
    {
        id: '2',
        title: 'Korle Bu Child Health Department Visit',
        excerpt: 'FirmLove settled medical bills and donated hospital supplies to the pediatric ward.',
        content: 'Our team visited the Korle Bu Child Health Department to settle medical bills and lab fees for vulnerable patients. We also donated essential hospital supplies including detergents, linens, and sanitizers to support the facility.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        date: '2025-11-15',
        category: 'Healthcare'
    },
    {
        id: '3',
        title: 'Christmas Outreach at Pute Village, Ada East',
        excerpt: 'A major outreach providing food and clothing for children in Pute Village.',
        content: 'The FirmLove team traveled to Pute Village in Ada East for our major Christmas outreach. We provided food, clothing, and festive cheer to hundreds of village children, bringing smiles and hope for the new year.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        date: '2025-12-20',
        category: 'Community'
    },
    {
        id: '4',
        title: 'Supporting All Saints Anglican Basic School',
        excerpt: 'Providing career guidance, educational materials, and financial support.',
        content: 'Our ongoing partnership with All Saints Anglican Basic School involves providing career guidance sessions, educational materials, and targeted financial support to students in need, including pregnant teenagers seeking to continue their education.',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800&q=80',
        date: '2025-10-05',
        category: 'Education'
    }
]

export const defaultGallery: GalleryItem[] = [
    { id: '1', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Community outreach event', category: 'community' },
    { id: '2', src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', alt: 'Donation distribution', category: 'education' },
    { id: '3', src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80', alt: 'Charity gala evening', category: 'widows' },
    { id: '4', src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', alt: 'Volunteers working together', category: 'team' },
    { id: '5', src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80', alt: 'Food donation drive', category: 'community' },
    { id: '6', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Annual fundraising event', category: 'team' },
    { id: '7', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80', alt: 'Community health screening', category: 'healthcare' },
    { id: '8', src: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600&q=80', alt: 'School supplies donation', category: 'education' },
    { id: '9', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80', alt: 'Community gathering event', category: 'community' },
]

export const defaultPrograms: Program[] = [
    {
        id: '1',
        title: 'Education & Youth Empowerment',
        description: 'Supporting students at All Saints Anglican Basic School with career guidance, educational materials, and financial support. We also run The Girl-Child Initiative providing sanitary pads for adolescent girls.',
        impact: 'Supporting hundreds of students and empowering young girls to stay in school.',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'
    },
    {
        id: '2',
        title: 'Healthcare & Medical Relief',
        description: 'Working with facilities like the Korle Bu Child Health Department to settle medical bills and lab fees for vulnerable patients, and donating essential hospital supplies.',
        impact: 'Providing critical support to pediatric patients and hospital infrastructure.',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80'
    },
    {
        id: '3',
        title: 'Community & Orphanage Outreach',
        description: 'Conducting major outreach programs to places like Royal Seed Orphanage (Papaase) and Pute Village (Ada East), providing food, clothing, and essential items.',
        impact: 'Reaching remote communities and orphanages with much-needed supplies and festive joy.',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80'
    },
    {
        id: '4',
        title: 'Honoring Widows',
        description: 'Through our "Sprinkles of Love" initiative, we provide financial support and daily essentials to widows and their children, especially during the Christmas season.',
        impact: 'Bringing hope and tangible assistance to vulnerable widows.',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    }
]
