import { useSetRecoilState } from "recoil";
import { Categories, Itodo, todostate } from "../atom";
import styled from "styled-components";


const Li = styled.li`
text-align: center;
display: grid;
grid-template-columns: 6fr 1fr 1fr 1fr;
margin: 7px 0px 7px 0px;
`
    

const Span = styled.span`

font-size: 17px;
`
const Button = styled.button`
text-align: center;
border-radius: 5px;
background-color: white;
border: 0.5px solid ${a=>a.theme.bordercolor};

`

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
     <Li>
         <Span>{text}</Span>
         {category !== Categories.DOING && (<Button onClick={onclickfn} name={Categories.DOING}>doing</Button>)}
         {category !== Categories.TO_DO && (<Button onClick={onclickfn} name={Categories.TO_DO}>todo</Button>)}
         {category !== Categories.DONE && <Button onClick={onclickfn} name={Categories.DONE}>done</Button>}
         <Button onClick={deleteToDo} >delete</Button>
     </Li>   
    )
}
export default Todolist;