import { useRecoilState, useRecoilValue } from "recoil";
import { todoselector, todostate } from "../atom";
import Createtodo from "./Createtodo";
import Todolist from "./Todolist";

function Todo(){
    // const todos = useRecoilValue(todostate);
    const [todo,doing,done] = useRecoilValue(todoselector);
    
    console.log([todo,doing,done]);
    

    return(
        
            <>
                <Createtodo />
                <hr></hr>
              <ul><h2>todo</h2>
                  {/* {todos.map(a=>(<Todolist text={a.text} category={a.category} id={a.id}/>))} */}
                    {/* {todos.map(a=>(<Todolist key={a.id}{...a}/>))} */}
                    {todo.map((a)=>(<Todolist key={a.id}{...a}/>))}
              </ul>
              <hr></hr>
              <ul><h2>done</h2>
                  {/* {todos.map(a=>(<Todolist text={a.text} category={a.category} id={a.id}/>))} */}
                  {done.map((a)=>(<Todolist key={a.id}{...a}/>))}
              </ul>
              <hr></hr>
              <ul><h2>doing</h2>
                  {/* {todos.map(a=>(<Todolist text={a.text} category={a.category} id={a.id}/>))} */}
                  {doing.map((a)=>(<Todolist key={a.id}{...a}/>))}
              </ul>
            </>
          );
          
    
}
export default Todo;