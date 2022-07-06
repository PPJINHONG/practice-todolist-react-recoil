import { atom ,selector} from "recoil";

export interface Itodo {
    text: string;
    id:number;
    category:Categories;
  }

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" ="DOING",
  "DONE" = "DONE"
};

export const todostate = atom<Itodo[]>({
    key : "todo",
    default : [],
});
export const categorystate = atom<Categories>({
    key: "category",
    default : Categories.TO_DO,  
})

export const todoselector = selector({
    key: "todoselector",
    get : ({get})=>{
      const todos= get(todostate);
      const category = get(categorystate);
      return todos.filter( a => a.category === category);
    }

});