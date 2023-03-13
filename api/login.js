import instance from "./config"

const getLogin = () => {
    return instance.get(`/login`)
}
export default getLogin;