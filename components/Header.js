import Navbar from "./Navbar";

const Header = () => {
    return `
    
        <div class="header container-fluid d-flex justify-content-between align-items-center  " >
            <div class="logo">
                <h1 style="font-family: lato, sans-serif;">T.D</h1>
            </div>
            <div class="list-menu">
                <nav>
                    <ul class="d-flex list-unstyled  ">
                        ${Navbar()}
                        <li><button class="btn "onclick="location.href='/login';"><i class='bx bx-user'></i></button></li>
                    </ul>
                </nav>
            </div>
        </div>
    `
};
export default Header;
