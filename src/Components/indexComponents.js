// import MinCV from "./Sections/MinCV";
// import Index from "./Sections/Index";

// import ContentCard from "./Generic/ContentCard";
// import MainRightSection from "./Generic/MainRightSection";
// import AsidePersonalData from "./Generic/AsidePersonalData";
// import Footer from "./Generic/Footer";
// import Header from "./Generic/Header";

// import Toast from "./Utilities/Toast";


import asyncComponent from './asyncComponent'

 const setComponents = () => {
    console.log("setComponents");
    asyncComponent('./Utilities/Toast', 'Toast');
}

export default setComponents;



// const newImport = () =>{
//     import Toast from "./Utilities/Toast";
// }

// import Spinner from "./Utilities/Spinner";


// export {
//     // MinCV,
//     // Index,
//     // ContentCard,
//     Toast,
//     // Spinner,
//     // MainRightSection,
//     // AsidePersonalData,
//     // Footer,
//     // Header
// }

// const components =  {    
//     MinCV,
//     Index,
//     ContentCard,
//     Toast,
//     Spinner,
//     MainRightSection,
//     AsidePersonalData,
//     Footer,
//     Header
// }




// export default components;