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
    category: 'events' | 'donations' | 'outreach'
}

export interface Program {
    id: string
    title: string
    description: string
    impact: string
    status: 'ongoing' | 'completed'
    image: string
}

export const defaultPosts: Post[] = [
    {
        id: '1',
        title: 'FirmLove Donates School Supplies to 500 Children',
        excerpt: 'Our latest initiative reached 500 children in underserved communities with essential school supplies.',
        content: 'Through the generous support of our donors, FirmLove was able to distribute backpacks filled with school supplies to 500 children across three communities. This initiative ensures that every child has the tools they need to succeed in their education.',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
        date: '2026-02-28',
        category: 'Donations'
    },
    {
        id: '2',
        title: 'Community Health Outreach Program Launches',
        excerpt: 'FirmLove partners with local health workers to bring free medical screenings to rural areas.',
        content: 'In partnership with healthcare professionals, FirmLove organized free medical screenings and health education workshops in rural communities. Over 300 individuals received check-ups and health guidance.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        date: '2026-02-15',
        category: 'Outreach'
    },
    {
        id: '3',
        title: 'Annual Charity Gala Raises Record Funds',
        excerpt: 'This year\'s gala brought together donors and partners, raising over $50,000 for community programs.',
        content: 'The FirmLove Annual Charity Gala was a tremendous success, with over 200 attendees coming together to support our mission. The evening featured inspiring stories from beneficiaries and raised a record-breaking amount for our upcoming programs.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        date: '2026-01-20',
        category: 'Events'
    },
    {
        id: '4',
        title: 'Clean Water Project Completed in Three Villages',
        excerpt: 'FirmLove successfully installs clean water systems, providing safe drinking water to over 1,200 people.',
        content: 'After months of planning and construction, FirmLove has completed the installation of clean water systems in three underserved villages. This project provides safe, reliable drinking water to over 1,200 residents.',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800&q=80',
        date: '2026-01-05',
        category: 'Outreach'
    }
]

export const defaultGallery: GalleryItem[] = [
    { id: '1', src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80', alt: 'Community outreach event', category: 'outreach' },
    { id: '2', src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80', alt: 'Donation distribution', category: 'donations' },
    { id: '3', src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80', alt: 'Charity gala evening', category: 'events' },
    { id: '4', src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80', alt: 'Volunteers working together', category: 'outreach' },
    { id: '5', src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80', alt: 'Food donation drive', category: 'donations' },
    { id: '6', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Annual fundraising event', category: 'events' },
    { id: '7', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80', alt: 'Community health screening', category: 'outreach' },
    { id: '8', src: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600&q=80', alt: 'School supplies donation', category: 'donations' },
    { id: '9', src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80', alt: 'Community gathering event', category: 'events' },
]

export const defaultPrograms: Program[] = [
    {
        id: '1',
        title: 'Education for All',
        description: 'Providing school supplies, scholarships, and educational resources to underprivileged children to ensure every child has access to quality education.',
        impact: '2,500+ children supported across 15 schools',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80'
    },
    {
        id: '2',
        title: 'Clean Water Initiative',
        description: 'Installing sustainable clean water systems in rural communities to ensure access to safe drinking water for all residents.',
        impact: '3,600+ people with access to clean water',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=600&q=80'
    },
    {
        id: '3',
        title: 'Community Health Outreach',
        description: 'Partnering with healthcare professionals to provide free medical screenings, health education, and essential medicines to underserved areas.',
        impact: '1,800+ individuals screened and treated',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80'
    },
    {
        id: '4',
        title: 'Women Empowerment Program',
        description: 'Providing skills training, micro-loans, and mentorship to women in disadvantaged communities to help them build sustainable livelihoods.',
        impact: '400+ women trained and empowered',
        status: 'ongoing',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80'
    },
    {
        id: '5',
        title: 'Emergency Food Relief',
        description: 'Rapid response food distribution program that provides meals and essential supplies to communities affected by natural disasters or economic hardship.',
        impact: '10,000+ meals distributed',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80'
    },
    {
        id: '6',
        title: 'Youth Sports Development',
        description: 'Building sports facilities and organizing youth leagues to promote healthy lifestyles, teamwork, and discipline among young people.',
        impact: '600+ youth participants',
        status: 'completed',
        image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&q=80'
    }
]
