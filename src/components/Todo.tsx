import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categorystate, todoselector, todostate } from "../atom";
import Createtodo from "./Createtodo";
import Todolist from "./Todolist";

function Todo(){
    // const todos = useRecoilValue(todostate);
    const todo = useRecoilValue(todoselector);
    const [category,setcategory] = useRecoilState(categorystate);
    console.log(todo);
    const oninputfn = (event : React.FormEvent<HTMLSelectElement>) =>{
        setcategory(event.currentTarget.value as any);
    }
    console.log(category);
    return(
        
            <>
                <Createtodo />
                <hr></hr>
              <ul>
                  {todo.map( a => (<Todolist key={a.id}{...a} />))}
              </ul>
                  {/* {todos.map(a=>(<Todolist text={a.text} category={a.category} id={a.id}/>))} */}
                    {/* {todos.map(a=>(<Todolist key={a.id}{...a}/>))} */}
                    {/* {todo.map((a)=>(<Todolist key={a.id}{...a}/>))} */}
                   <form>
                    <select value={category} onInput={oninputfn}>
                        <option value={Categories.TO_DO}>todo</option>
                        <option value={Categories.DOING}>doing</option>
                        <option value={Categories.DONE}>done</option>
                    </select>
                </form>
            
            </>
          );
          
    
}
export default Todo;