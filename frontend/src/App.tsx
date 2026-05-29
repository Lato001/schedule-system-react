import "./App.css";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { AuthGuard } from "./guards";
import RoutesNotFound from "./utilities/RoutesNotFound";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const Login = lazy(() => import("./pages/Public/Login/Login"));
const Private = lazy(() => import("./pages/Private/Private"));

function App() {
  return (
    <Suspense fallback={<>Loading... </>}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesNotFound>
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
            <Route
              path="*"
              element={<Navigate to={`/${PublicRoutes.LOGIN}`} replace />}
            />
          </RoutesNotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
