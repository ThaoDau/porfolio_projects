import instance from "./config"

const getProjects = () => {
    return instance.get(`/projects`)
}
const deleteProject = (id) =>{
    return instance.delete(`/projects/${id}`)
}
const getProject = (id) => {
    return instance.get(`/projects/${id}`)
}
const updateProject = (project) => {
    return instance.put(`/projects/${project.id}`,project)
}
const addProject = (project) => {
    return instance.post(`/projects`,project)
}


export {getProjects,deleteProject,getProject,updateProject,addProject}