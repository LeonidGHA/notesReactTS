export interface IUserNote {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archive: boolean;
}

export interface IDataNoteForm {
  name: string;
  category: string;
  content: string;
}

export interface ISummaryNote {
  category: string;
  active: number;
  archive: number;
}
