import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import NotesList from "../../components/NotesList/NotesList";
import { fetchArchiveNotes } from "../../service/NoteService";
import { selectNotes } from "../../store/slices/notesSlice";
import { useAppDispatch } from "../../store/store";
import st from "../notes/NotesPage.module.scss";

const ArchivePage = () => {
    const { archiveNotes } = useSelector(selectNotes);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (archiveNotes.length < 2) {
            dispatch(fetchArchiveNotes());
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // <section>
        //     {archiveNotes && <NotesList notes={archiveNotes} type="archive" />}
        // </section>
        <main className={st.root}>
            <NotesList notes={archiveNotes} type="archive" />
        </main>
    );
};

export default ArchivePage;
