import axios from "axios";
import {
  tranferConstants,
  details,
  receiverDetails,
} from "../Actions/ActionTypes";
import { Dispatch } from "react";
import { initialData } from "../Actions/ActionTypes";

const initialState: initialData = {} as initialData;

export const addSender: any = (data: details) => {
  return (
    console.log(initialState),
    console.log(data),
    {
      type: tranferConstants.ADD_SENDER,
      data: data,
    }
  );
};

export const addReceiver: any = (data: details) => {
  return (
    console.log(data),
    {
      type: tranferConstants.ADD_RECEIVER,
      data: data,
    }
  );
};

const updateReceiver: any = (receiverData: details) => {
  return (dispatch: Dispatch<details>) => {
    axios
      .put(
        `http://localhost:8000/customer/update/${receiverData.id}`,
        receiverData
      )
      .then((res) => {
        console.log("Transfer Succesful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateBalances = (senderData: details, reciverData: details) => {
  return (dispatch: Dispatch<details>) => {
    axios
      .put(`http://localhost:8000/customer/update/${senderData.id}`, senderData)
      .then((res) => {
        console.log(res);
        dispatch(updateReceiver(reciverData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
