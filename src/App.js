import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound.component";
import Home from "./Routes/Home/home.component";
import Navigation from "./Routes/Nav/nav.component";
import SignIn from "./Routes/Authentication/Authentication.component";
import Shop from "./Components/shop/shop.component";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="auth" element={<SignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
