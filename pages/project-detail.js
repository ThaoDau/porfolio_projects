
import { getProject } from "../api/project";
import { router, useEffect, useState } from "../libs";
const ProjectDetailPage = ({data: {id}}) => {
    // console.log('data: ',data);
    // const id = data.id;
    console.log(id);
    const [data,setData]= useState([]);
    useEffect(()=>{
        getProject(id).then(({data})=> setData(data));
    },[])
    useEffect(()=>{
        const project = data.find(function(project){
            return project.id == id
        })
        setData(project)
        
        // check trước khi hiển thị ra
        if(!project){
            return router.navigate("/projects")
        }

    },[])
    
    // nếu project id có tồn tại thì tiến hành hiển thị
    return `
    <section class="section about-section gray-bg" id="about" style = 'padding: 200px 0px'>
    <div class="container border rounded " >
    <div class="row align-items-center flex-row-reverse">
    <div class="col">
    <div class="about-text go-to">
    <h3 class="dark-color">${data.name}</h3>
    <h6 class="theme-color lead">Loại:${data.category}</h6>
    <p>Nội dung: ${data.noidung}</p>
    <div class="row about-list">
    <div class="col-md-6">
    <div class="media">
    <label>Thời gian hoàn thành</label>
    <p><b>${data.tgianbatdau}->${data.tgianbatdau}</b></p>
    </div>
    <div class="media">
    <label>Link</label>
    <p><a href="${data.source}">${data.source}</a></p>
    </div>
    
    </div>
    
    </div>
    </div>
    </div>
    <div class="col-lg-6">
    <div class="about-avatar">
    <img src="${data.image}" title="" alt="" style = 'width: 300px'>
    </div>
    </div>
    </div>
    
    </div>
    </section>
            <h1></h1>
        
     `
    
}

export default ProjectDetailPage