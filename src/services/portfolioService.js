export default {
    query,
    getJobs,
    getContactInfo,
    getFooterInfo
}

function query() {
    return portfolio;
}

function getJobs() {
    return portfolio.jobs;
}

function getContactInfo() {
    const { whatsapp, phone, email, linkedin } = portfolio.contact;
    return { whatsapp, phone, email, linkedin };
}

function getFooterInfo() {
    return portfolio.contact;
}

const portfolio = {
    jobs: [],
    projects: [
        {
            _id: 'JHDJeVJddsdbk',
            title: 'Portfolio',
            description: 'This is My Portfolio, You Will Be Able to Get to Know Me a Little Bit More Before Hiring. This App Created Using React Hooks, Redux and SCSS.',
            imgUrl: 'portfolio',
            tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS'],
            codeUrl: 'https://github.com/VladaKalnytska/vlada-kalnytska-portfolio.git',
            webUrl: 'https://vladakalnytska.github.io/vlada-kalnytska-portfolio/'
        },
        {
            _id: '0jeueeIVJKN',
            title: 'To-Do List',
            description: 'This app allows you to manage your tasks efficiently with features for adding, deleting, and updating tasks. It also includes functionality for sorting tasks by priority and filtering tasks based on their completion status. The app is built using React Hooks for the frontend, Redux for state management, and SCSS for styling. The backend is powered by Node.js.',
            imgUrl: 'to-do-list',
            tags: ['JavaScript', 'React', 'SCSS', 'NodeJS'],
            codeUrl: 'https://github.com/VladaKalnytska/to-do-list',
            webUrl: 'https://vladakalnytska.github.io/to-do-list'
        }, 
        // {
        //     _id: 'fdjkJK5JKDnkfj',
        //     title: 'Tickets',
        //     description: 'This App Will Allow You to Add, Remove, Edit and Read Tickets from Ticket List. This App Created Using React Hooks, Redux and SCSS.',
        //     imgUrl: 'tickets',
        //     tags: ['JavaScript', 'React', 'Hooks', 'Redux', 'SCSS'],
        //     codeUrl: 'https://github.com/NofarPeled/Tickets',
        //     webUrl: 'https://nofarpeled.github.io/Tickets'
        // },
        // {
        //     _id: 'fdjmmokl88787KDnkfj',
        //     title: 'Ask Em Surveys',
        //     description: 'This App Will Help You to Create Your Own Surveys, Share Them With the Environment by Link, and See Real Time Results. This App Created Using JavaScript, Vue, VueX,SCSS in the Frontend, and NodeJS, ExpressJS, MongoDB, Socket.IO in the Backend.',
        //     imgUrl: 'askem',
        //     tags: ['JavaScript', 'Vue', 'VueX', 'SCSS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.io'],
        //     codeUrl: 'https://github.com/tomdor123/projAskEm',
        //     webUrl: 'https://proj-askem.herokuapp.com'
        // },
        // {
        //     _id: 'f909jJDHKFD8KJPAj',
        //     title: 'Weather',
        //     description: 'This App Will Allow You to Get the Weather in Your Own Country / in Your Destination Country. This App Created Using React, Redux and SCSS. ',
        //     imgUrl: 'weather',
        //     tags: ['JavaScript', 'Vue', 'VueX', 'SCSS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.io'],
        //     codeUrl: 'https://github.com/NofarPeled/Weather-App',
        //     webUrl: 'https://nofarpeled.github.io/Weather-App'
        // },
        // {
        //     _id: 'f909jdioj8JDKJ9kk',
        //     title: 'Meme Generator',
        //     description: 'This App Will Allow You Create Meme Download Them, and Send Them to Your Family & Friends. This App Created Using React, Redux and SCSS. ',
        //     imgUrl: 'meme-generator',
        //     tags: ['HTML5', 'CSS3', 'JavaScript'],
        //     codeUrl: 'https://github.com/StavDorkam119/Sprint-2-Meme-Generator',
        //     webUrl: 'https://stavdorkam119.github.io/Sprint-2-Meme-Generator'
        // },
    ],
    technologies: [
        {
            _id: '0jeueULz6HEAAFd',
            title: 'JavaScript',
            imgUrl: 'javascript',
        },
        {
            _id: 'jjkK8wjJ9eIVJKN',
            title: 'HTML',
            imgUrl: 'html',
        }, 
        {
            _id: 'YDDy9ucbbaOUpHc', 
            title: 'CSS',
            imgUrl: 'css',
        },
        {
            _id: 'mcv1pQAC0R89YZa',
            title: 'SASS',
            imgUrl: 'sass',
        },
        // {
        //     _id: '71XqPpg0U60pihm',
        //     title: 'Vue',
        //     imgUrl: 'vue',
        // }, 
        // {
        //     _id: 'USQvUmlfAp7Pora', 
        //     title: 'VueX',
        //     imgUrl: 'vuex',
        // }, 
        {
            _id: 'aDRLCxs3JTW1q0R',
            title: 'React',
            imgUrl: 'react',
        }, 
        // {
        //     _id: '0DwtrKG01LsIIA5',
        //     title: 'Redux',
        //     imgUrl: 'redux', 
        // },
        {
            _id: 'N0se2lzyRqvAqem',
            title: 'NodeJs',
            imgUrl: 'node',
        }, 
        // {
        //     _id: 'AyLXqhwV5PQsgRY', 
        //     title: 'MongoDB',
        //     imgUrl: 'mongo',
        // }, 
        {
            _id: 'We0iePEGAUhCXax', 
            title: 'Python',
            imgUrl: 'python',
        },     
        {
            _id: 'slflofPEGAUh230f', 
            title: 'Photoshop',
            imgUrl: 'photoshop',
        },
        {
            _id: 'f8jlmw7JDJKif8x', 
            title: 'Mac OS X',
            imgUrl: 'macosx',
        },
        {
            _id: '8JDKJ8mlkfhq5', 
            title: 'Windows',
            imgUrl: 'windows',
        }
    ],
    skills: [
        {
        _id: 'We0iePEGgj94uu',
        title: 'Frontend',
        imgUrl: 'frontend.png',
        description: 'Creating the Frontend Using SCSS, JavaScript, React & Redux'
    },
    {
        _id: 'We0iePEGgj94dld',
        title: 'Backend',
        imgUrl: 'backend.png',
        description: 'Creating the Backend Using NodeJs and ExpressJs'
    },
    {
        _id: 'WwdlklEGgj94uu',
        title: 'Responsive',
        imgUrl: 'responsive.png',
        description: 'Designing Your Website to Look Great in Mobile & Desktops'
    },
    {
        _id: 'We0iedlfj95du',
        title: 'Design',
        imgUrl: 'design.png',
        description: 'Designing Your Website Using SCSS with Flex, Grid, Design Libraries and etc'
    },
    // {
    //     _id: 'W9dmv6aK94uu',
    //     title: 'Database',
    //     imgUrl: 'database.png',
    //     description: 'Storing Your Data Using MongoDB Database using Dynamic Queries'
    // },
    // {
    //     _id: 'g8jdKFMF9kkf',
    //     title: 'Security',
    //     imgUrl: 'security.png',
    //     description: 'Secure Your User Information Using Middleware Authentication and JWT & Sessions'
    // }
    ],
    about: {
        title: "About Vlada",
        description: "As a budding programmer with a degree in Software Engineering, I am passionate about web development and eager to advance my skills in this field. I have a strong foundation in various web technologies and am motivated to build and enhance web applications. I am a quick learner and a dedicated team player, always striving to adopt the best coding practices and learn from more experienced developers. My goal is to continually improve my expertise and contribute effectively to development projects.",
        imgUrl: 'vlada'
    },
    contact: {
        whatsapp: {
            imgUrl: 'whatsapp-black.png',
            footerIcon: 'fab fa-whatsapp',
            link: 'https://wa.me/+491746821363'
        },
        phone: { 
            imgUrl: 'smartphone-black.png',
            footerIcon: 'fas fa-mobile',
            link: 'tel:491746821363'
        },
        email: {
            imgUrl: 'email-black.png',
            footerIcon: 'fas fa-envelope',
            link: 'mailto:vladyslava.kalnytska@gmail.com'
        },
        linkedin: {
            imgUrl: 'linkedin-black.png',
            footerIcon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/vlada-kalnytska-1614591a4/'
        },
        github: {
            footerIcon: 'fab fa-github',
            link: 'https://github.com/VladaKalnytska'
        },
        facebook: {
            footerIcon: 'fab fa-facebook-f',
            link: 'https://www.facebook.com/profile.php?id=100018160800591'
        }
    }
}