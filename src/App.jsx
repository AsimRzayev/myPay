import React from "react";
import { Route, Routes } from "react-router-dom";

import BlogProvider from "./components/BlogProvider";
import BlogDetails from "./modules/Blog/BlogDetails";
import BlogList from "./modules/Blog/BlogList";
import Main from "./modules/Main/Main";
import { ROUTES } from "./routes";

// function ProtectedRoute({hasUser,children}){
// if(!hasUser){
//  return <Navigate to={ROUTES.AUTH.SIGN_IN} replace />
// }
// else{
//   return children
// }
// }

function App() {
  return (
    <BlogProvider>
      <Routes>
        {/* <Route path={ROUTES.MAIN} element={<ProtectedRoute hasUser={true}> <Main /></ProtectedRoute>} exact /> */}
        <Route path={ROUTES.MAIN} element={<Main />} exact />
        <Route path={ROUTES.BLOG.LIST} element={<BlogList />} exact />
        <Route path={ROUTES.BLOG.DETAILS} element={<BlogDetails />} exact />
      </Routes>
    </BlogProvider>
  );
}

export default App;
