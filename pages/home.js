import banner from "../components/banner";
import contact from "../components/contact";
import Header from "../components/Header";
import main from "../components/main";
import projects from "../components/projects";

const HomePage = () => {
    return `
        ${Header()}
        ${banner()}
        ${main()} 
         ${projects()}
         ${contact()}
         
        
    `;
};
export default HomePage;
