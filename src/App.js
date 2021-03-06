import React, { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { auth } from "./firebase";
// import { useDispatch } from "react-redux";
// import { currentUser } from "./api/auth";
// import { LoadingOutlined } from "@ant-design/icons";

const { Home, Page1 } = lazily(() => import("./views"));
const { Header } = lazily(() => import("./components"));

const App = () => {
  // const dispatch = useDispatch();

  // // to check firebase auth state

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const idTokenResult = await user.getIdTokenResult();
  //       currentUser(idTokenResult.token)
  //         .then((res) => {
  //           dispatch({
  //             type: "LOGGED_IN_USER",
  //             payload: {
  //               name: res.data.name,
  //               email: res.data.email,
  //               role: res.data.role,
  //               token: idTokenResult.token,
  //               _id: res.data._id,
  //             },
  //           });
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   });

  //   // cleanup
  //   return () => unsubscribe();
  // }, [dispatch]);

  return (
    <Suspense fallback={<div className="col text-center p-5 h1">Zloading</div>}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p1" element={<Page1 />} />
      </Routes>
    </Suspense>
  );
};

export default App;
