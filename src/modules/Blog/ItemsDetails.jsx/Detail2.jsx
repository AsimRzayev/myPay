import React from "react";

import { useItem } from "../../../components/BlogProvider";
import ItemDetails from "./ItemDetails";

function Detail2() {
  const itemData = useItem();
  return (
    <>
      <ItemDetails item={itemData[1]} />
    </>
  );
}

export default Detail2;
