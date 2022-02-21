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

// ---------------------------

export enum tranferConstants {
  ADD_RECEIVER = "ADD_RECEIVER",
  ADD_SENDER = "ADD_SENDER",
  TRANSFER = "TRANSFER",
}

export type details = {
  id: string;
  Name: string;
  Account_Number: number;
  Balance: number;
};

export type receiverDetails = {
  type: tranferConstants.ADD_RECEIVER;
  payload: details;
};

export type senderDetails = {
  type: tranferConstants.ADD_SENDER;
  payload: details;
};

export type TransferDetails = {
  type: tranferConstants.TRANSFER;
  payload: initialData[];
};

export type initialData = {
  sender: details;
  receiver: details;
};

// ==------------------

export enum TransactionConstant {
  GET_TRANSACTION = "GET_TRANSACTION",
}

export type transactionData = {
  _id: string;
  Name: string;
  TransactionType: string;
  Sender: string;
  Receiver: string;
  Amount: number;
  Status: string;
  createdAt: string;
};

export type TransactionDetails = {
  type: TransactionConstant.GET_TRANSACTION;
  payload: transactionData;
};
