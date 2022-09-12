import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound/PageNotFound.component";
import Home from "./Routes/Home/home.component";
import Navigation from "./Routes/Nav/nav.component";
import SignIn from "./Routes/Authentication/Authentication.component";
import Checkout from "./Routes/Checkout/checkout.route.jsx";
import Shop from "./Routes/shop/shop.route";
import Tutorial from "./Components/tutorial.component";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";


const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
      });

      return unsubscribe;
    }
    ,
    [dispatch]
  )

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
