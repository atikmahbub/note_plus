import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { getAllNotesApiCall } from "../features/actions/noteActions";

const useNoteHook = () => {
  const dispatch = useAppDispatch();
  const { allNotes } = useAppSelector((state) => ({
    allNotes: state.note.allNotes,
  }));

  useEffect(() => {
    dispatch(getAllNotesApiCall());
  }, [dispatch]);

  return useMemo(
    () => ({
      allNotes: allNotes,
    }),
    [allNotes]
  );
};

export default useNoteHook;
