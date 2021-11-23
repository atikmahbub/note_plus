import { useMemo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { getNoteDetails } from "../features/actions/noteActions";

const useNoteDetails = (id: string | null) => {
  const dispatch = useAppDispatch();
  const noteDetails = useAppSelector((state) => state.note.noteDetails);

  useEffect(() => {
    if (id) dispatch(getNoteDetails(id));
  }, [dispatch, id]);

  return useMemo(
    () => ({
      noteDetails,
    }),
    [noteDetails]
  );
};

export default useNoteDetails;
