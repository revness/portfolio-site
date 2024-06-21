const colorPalette = [
    '#ffd319', '#ff901f', '#ff2975', '#c700b5', '#b000ff'
]
const cardInfo = [
    {
        type: 'Experience',
        data: {
            title: '_nology',
            subtitle: '12 week intensive developer training',
            year: 'June 2024',
            emoji: '📚',
        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'chappo.io',
            subtitle: 'this one counts right? portfolio website, built with scss and vanillaJs',
            year: 'July 2024',
            emoji: '🖥️',
        },
        bgColorVal: null
    },
    {
        type: 'Experience',
        data: {
            title: 'Pharmacist',
            subtitle: '10+ years experience in community pharmacies around Sydney',
            year: '2010-2023',
            emoji: '👨🏻‍🔬'
        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'Project 1',
            subtitle: 'developed a project that does xyz',
            year: 2024,
            emoji: '🖥️',
        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'Project 2',
            subtitle: 'project that does zxy',
            year: 2023,
            emoji: '🖥️',

        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'Project 3',
            subtitle: 'project that does yxz',
            year: 2022,
            emoji: '🖥️',
        },
        bgColorVal: null
    },
    {
        type: 'Contact',
        data: {
            links: [{
                name: 'Github',
                url: 'https://github.com/revness'
            }, {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com'
            }, {
                name: 'Chat',
                url: '/chat'
            }],
            emoji: '🔗',
        },
        bgColorVal: null
    },
    {
        type: 'Navigation',
        data: {
            links: ['Portfolio', 'Experience', 'Contact'],
            emoji: '🗺️',
            icon: '<ion-icon name="map"></ion-icon>'
        },
        bgColorVal: null,

    }

]

export { cardInfo, colorPalette }