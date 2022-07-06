import { atom ,selector} from "recoil";
import { recoilPersist } from "recoil-persist";

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
const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
  });

export const todostate = atom<Itodo[]>({
    key : "todo",
    default : [],
    effects_UNSTABLE: [persistAtom],
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