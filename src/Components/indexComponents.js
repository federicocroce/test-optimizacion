import asyncComponent from './asyncComponent'

const setComponents = () => {
    asyncComponent('./Sections/Index', 'Index');
    asyncComponent('./Sections/MinCV', 'MinCV');

    asyncComponent('./Generic/ContentCard', 'ContentCard');
    asyncComponent('./Generic/MainRightSection', 'MainRightSection');
    asyncComponent('./Generic/AsidePersonalData', 'AsidePersonalData');
    asyncComponent('./Generic/Footer', 'Footer');
    asyncComponent('./Generic/Header', 'Header');

    asyncComponent('./Utilities/Spinner', 'Spinner');
    asyncComponent('./Utilities/Toast', 'Toast');
}

export default setComponents;










// // import MinCV from "./Sections/MinCV";
// // import Index from "./Sections/Index";

// // import ContentCard from "./Generic/ContentCard";
// // import MainRightSection from "./Generic/MainRightSection";
// // import AsidePersonalData from "./Generic/AsidePersonalData";
// // import Footer from "./Generic/Footer";
// // import Header from "./Generic/Header";

// import Toast from "./Utilities/Toast";

// // const newImport = () =>{
// //     import Toast from "./Utilities/Toast";
// // }

// // import Spinner from "./Utilities/Spinner";


// const components = {    
//     // MinCV,
//     // Index,
//     // ContentCard,
//     Toast
//     // Spinner,
//     // MainRightSection,
//     // AsidePersonalData,
//     // Footer,
//     // Header
// }

// export default components;