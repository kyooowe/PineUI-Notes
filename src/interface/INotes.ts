export interface NoteProps {
    id: string;
    title: string;
    note: string;
    date: string;
    isFavorite: boolean;
    labels: string[];
}

export interface NoteListProps {
    notes: NoteProps[];
}