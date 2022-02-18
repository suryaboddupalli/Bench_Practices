export enum logintypes {
  LOGGEDIN_SUCCESS = "LOGGEDIN_SUCCESS",
  LOGGEDIN_FAIL = "LOGGEDIN_FAIL",
}

interface success {
  type: logintypes.LOGGEDIN_SUCCESS;
  payload: string;
}

interface fail {
  type: logintypes.LOGGEDIN_FAIL;
  payload: string;
}

export type Action = success | fail;

export enum fetchAccount {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USER = "FETCH_USER",
}

export type user = {
  Name: string;
  Account_Number: number;
  Phone: number;
  Address: string;
  Address_Proof: number;
  Pan_Card: number;
  Balance: number;
  _id: string;
};

export type fetchusers = {
  type: fetchAccount.FETCH_USERS;
  payload: user[];
};

export type fetchuser = {
  type: fetchAccount.FETCH_USER;
  payload: user;
};

export enum bankingConstant {
  UPDATE_BALANCE = "UPDATE_BALANCE",
}

export type newAmount = {
  Balance: number;
};

export type balance = {
  type: bankingConstant.UPDATE_BALANCE;
  payload: newAmount;
};
