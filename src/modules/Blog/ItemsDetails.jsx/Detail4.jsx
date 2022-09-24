import React from "react";

import { useItem } from "../../../components/BlogProvider";
import ItemDetails from "./ItemDetails";

function Detail4() {
  const itemData = useItem();
  return (
    <>
      <ItemDetails item={itemData[3]} />
    </>
  );
}

export default Detail4;
