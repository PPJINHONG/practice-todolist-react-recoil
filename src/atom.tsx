import { atom ,selector} from "recoil";

export interface Itodo {
    text: string;
    id:number;
    category: "TO_DO" | "DOING" | "DONE" ;
  }
export const todostate = atom<Itodo[]>({
    key : "todo",
    default : [],
});
export const categorystate = atom({
    key: "category",
    default : "TO_DO",  
})

export const todoselector = selector({
    key: "todoselector",
    get : ({get})=>{
      const todos= get(todostate);
      const category = get(categorystate);
      return todos.filter( a => a.category === category);
    }

});