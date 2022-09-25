/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Route, Routes } from "react-router-dom";

import BlogProvider from "./components/BlogProvider";
import BlogDetails from "./modules/Blog/BlogDetails";
import BlogList from "./modules/Blog/BlogList";
import { About } from "./modules/Main/Information/About";
import { Apii } from "./modules/Main/Information/Apii";
import { Contact } from "./modules/Main/Information/Contact";
import { Customers } from "./modules/Main/Information/Customers";
import { News } from "./modules/Main/Information/News";
import { Service } from "./modules/Main/Information/Service";
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
        <Route path={ROUTES.MAIN} element={<Main />} exact />
        <Route path={ROUTES.ABOUT} element={<About />} exact />
        <Route path={ROUTES.APII} element={<Apii />} exact />
        <Route path={ROUTES.CONTACT} element={<Contact />} exact />
        <Route path={ROUTES.CUSTOMERS} element={<Customers />} exact />
        <Route path={ROUTES.NEWS} element={<News />} exact />
        <Route path={ROUTES.SERVICES} element={<Service />} exact />
        <Route path={ROUTES.BLOG.LIST} element={<BlogList />} exact />
        <Route path={ROUTES.BLOG.DETAILS} element={<BlogDetails />} exact />
      </Routes>
    </BlogProvider>
  );
}

export default App;
