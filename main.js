import contact from "./components/contact";
import { render, router } from "./libs";

import AboutPage from "./pages/about";
import AdminProjectAddPage from "./pages/admin/project-add";
import AdminProjectUpdatePage from "./pages/admin/project-update";
import AdminProjectPage from "./pages/admin/projects";

import HomePage from "./pages/home";
import loginPage from "./pages/login";
import ProjectsPage from "./pages/projects";

const app = document.querySelector("#app");

router.on("/", () => {
    render(HomePage, app)
});
router.on("/#about", () => {
    render(AboutPage, app)
});
router.on("/#contact", () => {
    render(contact, app)
});
router.on("/login", () => {
    render(loginPage, app)
});

router.on("/projects", () => {
    render(ProjectsPage, app)
});
router.on("/projects/:id",(params)=>{
    // console.log(params);
    render(function(){
        return ProjectDetailPage(params)
    },app)
})
router.on("/admin/projects",()=>{
    render(AdminProjectPage,app)
})
router.on("/admin/projects/add",()=>{
    render(AdminProjectAddPage,app)
})
router.on("/admin/projects/:id/update",(params)=>{
    render(function(){
        return AdminProjectUpdatePage(params)
    },app)
})


router.notFound(()=>{
    render(NotFoundPage,app)
})

router.resolve();

