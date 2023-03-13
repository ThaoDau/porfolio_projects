import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../libs"
const AdminProjectPage = () => {
    //   const[data,setData] = useState(projectList);
    // gọi hàm để bắt đầu xử lý
    const [data, setData] = useState([]);

    // Hàm được gọi lại sau khi return ( render ) ra ngoài màn hình
    useEffect(()=>{
        // Lấy dữ liệu từ localStorage ra, nếu nó không có thì gán bằng []
        // const projects = JSON.parse(localStorage.getItem("projects"))||[];
        // setData(projects)
        // fetch("http://localhost:3000/projects")
        //   .then((response)=> response.json())
        //   .then((data)=> setData(data))

        getProjects().then(({data})=> setData(data))
    },[])
    // chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                console.log(id)
                const newData = data.filter((project) => {
                    return project.id != id;
                })
                // Xóa ở local
                setData(newData); //set lại data ở client
                // localStorage.setItem("projects",JSON.stringify(newData)); //set lại data ở localStorage

                // Xóa ở server
                // fetch(`http://localhost:3000/projects/${id}`,{
                //   method:"DELETE"
                // })

                deleteProject(id)
            })
        }
        const btn_out = document.querySelectorAll(".btn-out");
        btn_out.addEventListener('click',(e)=>{
          e.preventDefault();
          window.location.href = '../../main.js'
        })
        
    })
    
      
    return /*html*/`
    <a href="/project"></a>
    <h1 class='text-center my-4'>LIST DỰ ÁN</h1>
    <table class='table'>
      <thead class='thead-dark'>
        <tr>
          <th>#</th>
          <th>id</th>
          <th>Tên dự án</th>
          <th>Loại</th>
          <th>Nội dung tóm tắt </th>
          <th>Nội dung chính </th>
          <th>Thời gian làm</th>
          <th>Thời gian hoàn thành</th>
          <th>Anh</th>
          <th>Link</th>
          
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((project, index) => {
          const date_start =project.tgianbatdau;
          const date_end = project.tgianketthuc;

          const date_start_st = new Date(date_start);
          const date_end_st = new Date(date_end);
          const start_stamp = date_start_st.getTime();
          const end_stamp = date_end_st.getTime();
         const tgianlam = end_stamp - start_stamp

          const date = new Date(tgianlam);
          const month = date.getMonth() +1;
          
         

        return /*html*/`
            <tr>
              <td></td>
              <td>${index + 1}</td>
              <td>${project.name}</td>
              <td>${project.category} </td>
              <td>${project.noidungtomtat} </td>
              <td>${project.noidung} </td>
              <td><b>${project.tgianbatdau}</b>-><b>${project.tgianketthuc}</b></td></th>
              <td>${month}</td>
              <td>${project.image}</td>
              <td>${project.source}</td>

              <td>
              <button data-id="${project.id}" class="btn-remove btn btn-danger">Xóa</button>
              <button class="btn-edit btn btn-warning"><a href='/admin/projects/${project.id}/update' style ='text-decoration:none' class = 'text-white'>Sửa</a></button>
              </td>
            </tr>
          `
    }).join("")}
      </tbody>
    </table>
    <button class="btn-out btn btn-danger float-end me-4">Đăng xuất</button>
    <a href="/admin/projects/add"><button class="btn btn-success float-end me-5">Add Project</button></a>

  `
}

export default AdminProjectPage