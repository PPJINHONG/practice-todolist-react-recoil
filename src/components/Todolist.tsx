import { useSetRecoilState } from "recoil";
import { Categories, Itodo, todostate } from "../atom";

function Todolist({text,category,id}:Itodo){
    const settodos = useSetRecoilState(todostate);
    const onclickfn = (event: React.MouseEvent<HTMLButtonElement>)=>{
        const {currentTarget : {name}} = event;
        settodos((oldtodos) => {
            const targetindex = oldtodos.findIndex((todo)=>todo.id===id);
            const oldtodo = oldtodos[targetindex];
            const newtodo = {id,text,category : name as Categories};
            console.log(newtodo);
            console.log(id,text);
            return [
                ...oldtodos.slice(0,targetindex),
                newtodo,
                ...oldtodos.slice(targetindex+1)]; 
        });
     };
     const deleteToDo = () => {
        settodos((oldtodo) => {
        const newToDos = oldtodo.filter((todo) => todo.id !== id);
            return newToDos;
        });
    }
   
    return (
     <li>
         <span>{text}</span>
         {category !== Categories.DOING && (<button onClick={onclickfn} name={Categories.DOING}>doing</button>)}
         {category !== Categories.TO_DO && (<button onClick={onclickfn} name={Categories.TO_DO}>to do</button>)}
         {category !== Categories.DONE && <button onClick={onclickfn} name={Categories.DONE}>done</button>}
         <button onClick={deleteToDo} >delete</button>
     </li>   
    )
}
export default Todolist;