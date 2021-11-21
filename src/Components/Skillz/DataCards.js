import IconFE from '../../Images/Frontend.svg'
import IconDA from '../../Images/data.svg'
import IconDE from '../../Images/design.svg'
import IconSS from '../../Images/soft.svg'
import FrontEndAll from '../../Images/Frontend-2.svg'
import DataAll from '../../Images/DA-2.svg'
import DesignAll from '../../Images/DE-2.svg'
import SKGallery from '../../Images/SKGallery.png'
// import SKGame from '../../Images/SKGallery.png'
// import HyperTyper from '../../Images/SKGallery.png'
// import MYNotes from '../../Images/SKGallery.png'
// import ListXmas from '../../Images/SKGallery.png'
import Portfolio from '../../Images/Portfol.png'

export const cardObjSkills = {
    id: 'skills',
    lightBg: false,
    lightText: true,
    lightCard: true,
    lightTextDesc: false,
    imgStart: true,
    linkedCard: false,
    toggleFW: true,
    headline: 'Skills',
    description: 'Behold the field in which I grow my skills. Lay thine eyes upon it and see that it is (not so) barren.',
    buttonLabel: '',
    cards: [
        { id: 'SK1', cTitle: 'Front End', cDesc: 'I have spend past few months in an intense study of various front-end development tools, focusing primarily on JS & React', cImg: IconFE, alt: 'FrontEndIcon', fullImg: FrontEndAll },
        { id: 'SK2', cTitle: 'Data Analysis', cDesc: 'After completing several courses in SQL, Python & Tableau I have put these skills to use in my previous job as a data analyst', cImg: IconDA, alt: 'DataAnalysisIcon', fullImg: DataAll },
        { id: 'SK3', cTitle: 'Design', cDesc: "I have been an amateur artist since my childhood and I often find myself creating or editing things in Adobe's Illustrator, Photoshop or After Effects", cImg: IconDE, alt: 'DesignIcon', fullImg: DesignAll },
        ]
    ,
    darkText: true,
}


export const cardObjProjects = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightCard: false,
    lightTextDesc: true,
    imgStart: false,
    toggleFW: false,
    linkedCard: true,
    headline: 'Skills',
    cards: [
        { id: 'PR1', cTitle: 'Match 3 Game', cDesc: 'Classic Game recreated with vanilla JS & strong Skyrim vibes.', cImg: IconFE, alt: 'SkyrimMatch3Game', btn: 'Play Now', fullImg:'', url: 'https://www.codecademy.com/learn/learn-node-js/modules/intro-to-node-js/cheatsheet' },
        { id: 'PR2', cTitle: 'Typing App', cDesc: 'React App for practicing typing speed and accuracy with changeable styles.', cImg: IconDA, alt: 'TypingPracticeApp', btn: 'Practice Now', url:'https://www.w3schools.com/jsref/met_win_open.asp' },
        { id: 'PR3', cTitle: 'Gift List App', cDesc: 'Classic React list app with upgraded functionality and seasonal twist.', cImg: IconDE, alt: 'GiftListApp', btn: "Let's Buy Some Gifts",  },
        {
            id: 'PR4', cTitle: 'Note Taking App', cDesc: 'React App to take and retain notes', cImg: IconSS, alt: 'MyNotesApp', btn: "Note Sth Down Now",
        },
        {
            id: 'PR5', cTitle: 'Image Gallery', cDesc: 'Skyrim wallpaper gallery with possiblity for live connection with Cloudinary API', cImg: SKGallery, alt: 'SkyrimGallery', btn: 'Go to Site',
        },
        {
            id: 'PR6', cTitle: '\u261d This Site \u261f', cDesc: 'Scalable styled-components design, routing & live email form', cImg: Portfolio, alt: 'PortfolioSite', btn: 'You Are Already Here', 
        }
    ],
    darkText: false,
}
