import React from "react";

import itemData from "../blog-item.json";

const ItemContext = React.createContext(null);
export function useItem() {
  return React.useContext(ItemContext);
}
function BlogProvider({ children }) {
  return (
    <ItemContext.Provider value={itemData}>{children}</ItemContext.Provider>
  );
}

export default BlogProvider;
