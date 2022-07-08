import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categorystate, todoselector, todostate } from "../atom";
import Createtodo from "./Createtodo";
import Todolist from "./Todolist";
import styled from "styled-components";

const Container= styled.div`
margin: auto;
align-items:center;
max-width:600px;
color : ${a=>a.theme.textcolor};
`

const Form = styled.form`
width: 100%;
margin: auto;
text-align: center;
`
const Select = styled.select`
width:90%;
height: 30px;
text-align: center;
margin-top: 10px;
margin-bottom: 40px;
border: 1px solid ${a=>a.theme.bordercolor};
background-color: white;
`
const Ul = styled.ul`
width: 90%;
border: 0.5px solid ${a=>a.theme.bordercolor};
margin: auto;
border-radius: 10px;
padding: 4px;


`


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
        <Container>
                <Createtodo />
                
            
                  {/* {todos.map(a=>(<Todolist text={a.text} category={a.category} id={a.id}/>))} */}
                    {/* {todos.map(a=>(<Todolist key={a.id}{...a}/>))} */}
                    {/* {todo.map((a)=>(<Todolist key={a.id}{...a}/>))} */}
                   <Form>
                    <Select value={category} onInput={oninputfn}>
                        <option value={Categories.TO_DO}>todo</option>
                        <option value={Categories.DOING}>doing</option>
                        <option value={Categories.DONE}>done</option>
                    </Select>
                </Form>
                <Ul>
                  {todo.map( a => (<Todolist key={a.id}{...a} />))}
              </Ul>
            
            </Container>
    
          );
          
    
}
export default Todo;