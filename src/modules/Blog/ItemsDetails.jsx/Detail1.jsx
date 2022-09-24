import React from "react";

import { useItem } from "../../../components/BlogProvider";
import ItemDetails from "./ItemDetails";

function Detail1() {
  const itemData = useItem();
  return (
    <>
      <ItemDetails item={itemData[0]} />
    </>
  );
}

export default Detail1;
