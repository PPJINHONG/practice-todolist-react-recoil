import { atom } from "recoil";

export interface Itodo {
    text: string;
    id:number;
    category: "TO_DO" | "DOING" | "DONE";
  }
export const todostate = atom<Itodo[]>({
    key : "todo",
    default : [],
});