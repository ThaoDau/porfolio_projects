import ProjectList from "./ProjectList"

{/* <button>HTML,CSS</button>
      <button>JAVASCRIPT</button>
      <button>PHP</button> */}
const projects = () => {
  return `<div class="projects" id='resume'>
  <div class=" select-categories text-center my-5  col">
      <div class="hr-width my-3 mb-5 w-100  "></div>
      
  </div>
  <div class="page container my-5">
                <div class="box-project row">
                    ${ProjectList()}
                    
                </div>
                
            </div>
</div>

  `
}

export default projects
