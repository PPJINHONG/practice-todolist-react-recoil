import { atom ,selector} from "recoil";

export interface Itodo {
    text: string;
    id:number;
    category: "TO_DO" | "DOING" | "DONE";
  }
export const todostate = atom<Itodo[]>({
    key : "todo",
    default : [],
});

export const todoselector = selector({
    key: "todoselector",
    get : ({get})=>{
      const todos= get(todostate);
      return [
        todos.filter((todo)=>todo.category==="TO_DO"),
        todos.filter((todo)=>todo.category==="DOING"),
        todos.filter((todo)=>todo.category==="DONE"),
        
      ];
    }

});