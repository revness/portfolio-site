const colorPalette = [
    '#ffd319', '#ff901f', '#ff2975', '#c700b5', '#b000ff'
]
const cardInfo = [
    {
        type: 'Experience',
        data: {
            title: '_nology',
            subtitle: '12 week intensive developer training',
            year: 'Commenced June 2024',
            emoji: '📚',
        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'chappo.io',
            subtitle: 'this one counts right? portfolio website, built with scss and vanillaJs',
            year: 'June 2024',
            emoji: '🖥️',
            link: 'http://www.chappo.io'
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
            title: 'TODO API',
            subtitle: 'Developed a backend REST Api in Java Spring for a todoAPP',
            year: 'Aug 2024',
            emoji: '🖥️',
            link: 'https://github.com/revness/todo_ui'
        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'TODO UI',
            subtitle: 'A todo frontend written in react using Typescript and styled using tailwindCSS',
            year: 'Aug 2024',
            emoji: '🖥️',
            link: 'https://github.com/revness/todo_ui'

        },
        bgColorVal: null
    },
    {
        type: 'Portfolio',
        data: {
            title: 'ECom website',
            subtitle: 'An ecom website written in React JS, with backend using Google Firebase',
            year: 'Aug 2024',
            emoji: '🖥️',
            link: 'https://github.com/revness/eshop'
        },
        bgColorVal: null
    },
    {
        type: 'About',
        data: {
            title: 'About me',
            subtitle: 'Based in beautiful Sydney, Australia. Currently a Pharmacist but looking to transition into a career in tech.',
            year: 'Now',
            emoji: '🙋🏻‍♂️',
            image: ''
        },
        bgColorVal: null
    },
    {
        type: 'Skills',
        data: {
            title: 'Tech stacks I code in:',
            subtitle: 'CSS3 HTML5 Javascript Vue.js TailwindCSS Sass',
            year: '',
            emoji: '📚',
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
                url: 'https://www.linkedin.com/in/chapman-tang-733289295/'
            }, {
                name: 'Chat',
                url: 'mailto:hello@chappo.io?subject=👋%20Hi%20Chapman,%20I%27d%20like%20to%20hire%20you!'
            }],
            emoji: '🔗',
        },
        bgColorVal: null
    },
    {
        type: 'Navigation',
        data: {
            links: ['About', 'Portfolio', 'Skills', 'Experience', 'Contact'],
            emoji: '🗺️',
            icon: '<ion-icon name="map"></ion-icon>'
        },
        bgColorVal: null,

    }

]

export { cardInfo, colorPalette }