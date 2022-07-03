import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

interface Iform { 
    todo:string;
}

const todostate = atom<Itodo[]>({
    key : "todo",
    default : [],
});

interface Itodo {
    text: string;
    id:number;
    category: "TO_DO" | "DOING" | "DONE";
  }

function Todo(){
    const [todos,settodos] = useRecoilState(todostate);

   const {register,handleSubmit,setValue} = useForm<Iform>();
   const handlevalid = ({todo} : Iform) => {
       console.log("add todo",todo)
       setValue("todo","");
       settodos((oldtodo) => [...oldtodo,{id:Date.now(),text:todo,category:"TO_DO"}]);
   };
   console.log(todos);
    return(
        
            <div>
              <h1>To Dos</h1>
              <hr />
              <form onSubmit={handleSubmit(handlevalid)}>
              
                <input
                  {...register("todo", {
                    required: "Please write a To Do",
                  })}
                  placeholder="Write a to do"
                />
                <button>Add</button>

              </form>
              <ul>
                  {todos.map(a=>(<li key={a.id}>
                    {a.text }
                  </li>))}
            
              </ul>
            </div>
          );
          
    
}
export default Todo;