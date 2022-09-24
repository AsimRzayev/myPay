import React from "react";

import { useItem } from "../../../components/BlogProvider";
import ItemDetails from "./ItemDetails";

function Detail3() {
  const itemData = useItem();
  return (
    <>
      <ItemDetails item={itemData[2]} />
    </>
  );
}

export default Detail3;
