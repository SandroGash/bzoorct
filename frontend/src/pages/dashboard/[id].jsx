import React from "react";
import { useParams } from "react-router-dom";

const Id = () => {
  const { id } = useParams();
  return <div>ID dynamics Dashboard - ID : {id};</div>;
};

export default Id;
