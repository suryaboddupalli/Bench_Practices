export interface todo {
  Name: string;
  Age: number;
}

export interface props {
  dataList: todo;
  deleteTodo(deleteList: string): void;
}

export interface data {
  _id: string;
  Name: string;
  Age: number;
}
