import React from "react";
import { Route, Routes } from "react-router-dom";

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
    <Routes>
      {/* <Route path={ROUTES.MAIN} element={<ProtectedRoute hasUser={true}> <Main /></ProtectedRoute>} exact /> */}
      <Route path={ROUTES.MAIN} element={<Main />} exact />
    </Routes>
  );
}

export default App;
