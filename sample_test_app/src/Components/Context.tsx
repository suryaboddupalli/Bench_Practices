import { createContext } from "react";

export const QuizContext = createContext<any>("");

export const QuizProvider = QuizContext.Provider;
export const QuizConsumer = QuizContext.Consumer;
