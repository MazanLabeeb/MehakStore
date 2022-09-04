import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/home.component";

const Navigation = () => (
  <div>
    <div>
      <h1>MehakStore</h1>
    </div>
    <Outlet />
  </div>
)

const PageNotFound = () => (<div>Error 404! Page Not Found</div>);

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
