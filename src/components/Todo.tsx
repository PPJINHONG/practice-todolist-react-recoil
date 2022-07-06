import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categorystate, todoselector, todostate } from "../atom";
import Createtodo from "./Createtodo";
import Todolist from "./Todolist";

function Todo(){
    // const todos = useRecoilValue(todostate);
    const todo = useRecoilValue(todoselector);
    const [category,setcategory] = useRecoilState(categorystate);
    console.log(todo);
    const oninputfn = (event : React.FormEvent<HTMLSelectElement>) =>{
        setcategory(event.currentTarget.value);
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
                        <option value={"TO_DO"}>todo</option>
                        <option value={"DOING"}>doing</option>
                        <option value={"DONE"}>done</option>
                    </select>
                </form>
            
            </>
          );
          
    
}
export default Todo;