import { useRecoilState, useRecoilValue } from "recoil";
import { todostate } from "../atom";
import Createtodo from "./Createtodo";
import Todolist from "./Todolist";

function Todo(){
    const todos = useRecoilValue(todostate);
    console.log(todos)

    return(
        
            <>
                <Createtodo />
              <ul>
                  {/* {todos.map(a=>(<Todolist text={a.text} category={a.category} id={a.id}/>))} */}
                    {todos.map(a=>(<Todolist key={a.id}{...a}/>))}
              </ul>
            </>
          );
          
    
}
export default Todo;