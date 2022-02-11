export enum actionTypes {
  DEPOSIT = "DEPOSIT",
  WITHDRAWAL = "WITHDRAWAL",
}

interface deposit {
  type: actionTypes.DEPOSIT;
  payload: number;
}

interface withdrawal {
  type: actionTypes.WITHDRAWAL;
  payload: number;
}

export type Action = deposit | withdrawal;
