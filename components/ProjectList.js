
import {getProjects } from "../api/project";
import { useEffect, useState } from "../libs";


const ProjectList = () => {
    const [data, setdata] = useState([]);
    useEffect(function(){
        fetch('http://localhost:3000/projects')
        .then((response)=>response.json())
        .then((data)=>(setdata(data)))
    },[])
    

    return `
    ${data.map((item)=>{
        console.log(item);
        return`
    <div class="box-item col">
    <div class="page-item ">
        <div class="img ">
            <img src="${item.image}" alt="" >
        </div>
        <div class="text my-5 ">
            <h5><a href="/projects/${item.id}">${item.name}</a></h5>
            <span>${item.category}</span>
            <p>${item.noidungtomtat}</p> 
            <h6>Detail...</h6>
        </div>
    </div>
</div>  `
}).join("")
}`
                
}

export default ProjectList;