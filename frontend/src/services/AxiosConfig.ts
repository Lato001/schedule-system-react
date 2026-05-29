import axios from "axios";
import store from "../redux/store";
import { resetUser } from "../redux/states/user";
import { PublicRoutes } from "../routes";
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(resetUser());
      window.location.href = `/${PublicRoutes.LOGIN}`;
    }
    return Promise.reject(error);
  }
);
export default axios;