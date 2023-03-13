import { menuList } from "../data"

const Navbar = () => {
    return `
        ${menuList.map((menu)=>{
            return `<li><a href="${menu.path}">${menu.name}</a></li>`
        }).join("")}
  `
}

export default Navbar