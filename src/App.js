import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound.component";
import Home from "./Routes/Home/home.component";
import Navigation from "./Routes/Nav/nav.component";
import SignIn from "./Routes/Authentication/Authentication.component";
import Checkout from "./Routes/Checkout/checkout.route.jsx";
import Shop from "./Routes/shop/shop.route";
import Tutorial from "./Components/tutorial.component";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<SignIn />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
