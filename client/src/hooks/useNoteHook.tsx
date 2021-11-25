import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { getAllNotesApiCall } from "../features/actions/noteActions";

const useNoteHook = (search: string) => {
  const dispatch = useAppDispatch();
  const { allNotes } = useAppSelector((state) => ({
    allNotes: state.note.allNotes,
  }));

  useEffect(() => {
    dispatch(getAllNotesApiCall(search));
  }, [dispatch, search]);

  return useMemo(
    () => ({
      allNotes: allNotes,
    }),
    [allNotes]
  );
};

export default useNoteHook;
