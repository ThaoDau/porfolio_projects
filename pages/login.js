import getLogin from "../api/login";
import { useEffect, useState } from "../libs";

const login = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLogin().then(({ data }) => setData(data));
  }, []);

  useEffect(() => {
    const form = document.getElementById("login");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      for (const item of data) {
  if (username === item.username && password === item.password) {
    alert("Chào mừng đến với trang quản trị!");
    window.location.href = "/admin/projects";
    return;
  }
}

      alert("Đăng nhập không thành công!");
    });
  }, [data]);

  return `
    <div class="login-main container-login ">
      <div class="screen rounded-3">
        <div class="screen__content">
          <form class="login" id="login">
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="text" class="login__input" id="username" placeholder="User name / Email">
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" id="password" placeholder="Password">
            </div>
            <button class="button login__submit">
              <span class="button__text" style="color: #0f240472">Đăng nhập</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div class="social-login">
                    <a href="/"><h6>Trang Chủ</h6></a>
                    <div class="social-icons">
                        <a href="#" class="social-login__icon fab fa-instagram"></a>
                        <a href="#" class="social-login__icon fab fa-facebook"></a>
                        <a href="#" class="social-login__icon fab fa-twitter"></a>
                    </div>
                </div>
            </div>
            <div class="screen__background">
                <span class="screen__background__shape screen__background__shape4"></span>
                <span class="screen__background__shape screen__background__shape3"></span>		
                <span class="screen__background__shape screen__background__shape2"></span>
                <span class="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    `;
};
export default login;
