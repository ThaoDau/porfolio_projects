// import { projectList } from "../../data";
import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({data: {id}}) => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    // const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    // const currentProject = projectList.find((project)=> project.id == id)
    /*
        B1: call api -> lấy data
        B2: set lại data để đổ dữ liệu ra form
        B3: submit form -> call api (truyền theo id cần update)
        B4: sau khi submit form thành công thì điều hướng về admin/projects
    */ 
   const [data,setData] = useState([])
    useEffect(()=>{
        // fetch(`http://localhost:3000/projects/${id}`)
        //     .then((response)=> response.json())
        //     .then((data) => setData(data))

        getProject(id).then(({data}) => setData(data))
    },[])
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const source = document.getElementById("source");
        const image =document.getElementById('image');
        const category = document.getElementById('categorie');
        const noidungtomtat = document.getElementById('project-noidungtomtat');
        const noidung = document.getElementById('project-noidung');
        const tgianbatdau = document.getElementById('project-tgianbatdau');
        const tgianketthuc = document.getElementById('project-tgianketthuc');

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const errorName = document.querySelector('#error_name');
            const errorCategorie = document.querySelector('#error_categorie');
            const errorNoidungTomtat = document.querySelector('#error_noidungtomtat');
            const errorNoidung = document.querySelector('#error_noidung');
            let flag = true;
            if (projectName.value.trim() === '') {
                errorName.style.display = 'block';
                let flag = false;
                return;
              } else {
                errorName.style.display = 'none';
              }
              if (category.value.trim() === '') {
                errorCategorie.style.display = 'block';
                let flag = false;

                return;
              } else {
                errorCategorie.style.display = 'none';
              }
            
              if (noidungtomtat.value.trim() === '') {
                errorNoidungTomtat.style.display = 'block';
                let flag = false;

                return;
              } else {
                errorNoidungTomtat.style.display = 'none';
              }
            
              if (noidung.value.trim() === '') {
                errorNoidung.style.display = 'block';
                let flag = false;

                return;
              } else {
                errorNoidung.style.display = 'none';
              }
            
              if(flag){
                const newProject = {
                    id: id,
                    name: projectName.value,
                    image: image.value,
                    source: source.value,
                    category: category.value,
                    noidungtomtat: noidungtomtat.value,
                    noidung : noidung.value,
                    tgianbatdau: tgianbatdau.value,
                    tgianketthuc: tgianketthuc.value,
                };
                updateProject(newProject).then(()=> router.navigate("/admin/projects"))

              }
            // tạo ra 1 object mới lấy dữ liệu từ form
            
            // fetch(`http://localhost:3000/projects/${id}`,{
            //     method:"PUT",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(()=> router.navigate("/admin/projects"))



            // cập nhật vào mảng projectList
            // const newProjectList = projectList.map((project)=>{
            //     return project.id == newProject.id? newProject:project
            // })

            // lưu vào localStorage dưới dạng chuỗi
            // localStorage.setItem("projects",JSON.stringify(newProjectList));

            // điều hướng về trang projects
            // router.navigate("/admin/projects");
        });
    });
    return `<div class="container">
        <h1>Sửa dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${data.name}"/>
                <span id="error_name" style="display: none; color: red;">Dự án k được bỏ trống</span>

                <label for="" class="form-label">Loại</label>
                <input type="text" class="form-control" id="categorie"value="${data.category}"  />
                <span id="error_categorie" style="display: none; color: red;">Loại k được bỏ trống</span>

                <label for="" class="form-label">Nội dung tóm tắt</label>
                <input type="text" class="form-control" id="project-noidungtomtat"value="${data.noidungtomtat}" />
                <span id="error_noidungtomtat" style="display: none; color: red;"> k được bỏ trống</span>

                <label for="" class="form-label">Nội dung dự án</label>
                <input type="text" class="form-control" id="project-noidung"value="${data.noidung}" />
                <span id="error_noidung" style="display: none; color: red;">Dự án k được bỏ trống</span>

                <label for="" class="form-label">Thời gian bắt đầu</label>
                <input type="date" class="form-control" id="project-tgianbatdau"value="${data.tgianbatdau}" />
                <span id="error_tgianbatdau" style="display: none; color: red;">Dự án k được bỏ trống</span>

                <label for="" class="form-label">Thời gian kết thúc</label>
                <input type="date" class="form-control" id="project-tgianketthuc"value="${data.tgianketthuc}" />
                <span id="error_tgianketthuc" style="display: none; color: red;">Dự án k được bỏ trống</span>

                <label for="" class="form-label">Hinnh anh</label>
                <input type="text" class="form-control" id="image" value="${data.image}"/>
                <span id="error_image" style="display: none; color: red;">Dự án k được bỏ trống</span>

                <label for="" class="form-label">Link</label>
                <input type="text" class="form-control" id="source" value="${data.source}"/>
                <span id="error_link" style="display: none; color: red;">Dự án k được bỏ trống</span>

                </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminProjectUpdatePage;