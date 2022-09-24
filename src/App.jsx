import React from "react";
import { Route, Routes } from "react-router-dom";

import BlogProvider from "./components/BlogProvider";
import Blog from "./modules/Blog/Blog";
import Detail1 from "./modules/Blog/ItemsDetails.jsx/Detail1";
import Detail2 from "./modules/Blog/ItemsDetails.jsx/Detail2";
import Detail3 from "./modules/Blog/ItemsDetails.jsx/Detail3";
import Detail4 from "./modules/Blog/ItemsDetails.jsx/Detail4";
import MoreItems from "./modules/Blog/MoreItems/MoreItems";
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
        <Route path={ROUTES.BLOG} element={<Blog />} exact />
        <Route path={ROUTES.BLOG_MORE_ITEMS} element={<MoreItems />} exact />
        <Route
          path={ROUTES.BLOG_DETAILS.ITEM_DETAILS1}
          element={<Detail1 />}
          exact
        />
        <Route
          path={ROUTES.BLOG_DETAILS.ITEM_DETAILS2}
          element={<Detail2 />}
          exact
        />
        <Route
          path={ROUTES.BLOG_DETAILS.ITEM_DETAILS3}
          element={<Detail3 />}
          exact
        />
        <Route
          path={ROUTES.BLOG_DETAILS.ITEM_DETAILS4}
          element={<Detail4 />}
          exact
        />
      </Routes>
    </BlogProvider>
  );
}

export default App;
