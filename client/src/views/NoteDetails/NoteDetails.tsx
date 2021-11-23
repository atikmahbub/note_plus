import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const NoteDetails = () => {
  let [searchParams] = useSearchParams();
  let id = searchParams.get("id");

  return <div>Hello</div>;
};

export default NoteDetails;
