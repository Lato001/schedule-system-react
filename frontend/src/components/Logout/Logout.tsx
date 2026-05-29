import { useNavigate } from "react-router-dom";
import { resetUser, UserKey } from "../../redux/states/user";
import { clearLocalStorage } from "../../utilities/LocalStorageUtility";
import { PublicRoutes } from "../../routes";
import { useDispatch } from "react-redux";
import { logoutService } from "../../services";

export function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    logoutService();
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };
  return (
    <button
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all focus:ring-2 cursor-pointer inline-flex items-center gap-1.5 bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500/30"
      onClick={logOut}
    >
      Log Out
    </button>
  );
}
