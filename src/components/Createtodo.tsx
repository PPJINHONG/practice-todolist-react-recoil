import { Component } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categorystate, todostate } from "../atom";

const Header = styled.h1`
width: 100%;
height: 50px;
text-align: center;
margin-top: 50px;
`
const Form = styled.form`
width: 90%;
margin: auto;
`
const Input = styled.input`
width: 70%;
height: 30px;
border: 1px solid ${a=>a.theme.bordercolor};
background-color: white;

`
const Button = styled.button`
width: 30%;
height: 30px;
border: 1px solid ${a=>a.theme.bordercolor};
background-color: white;

`
interface Iform { 
    todo:string;
}


function Createtodo(){
    const settodo = useSetRecoilState(todostate);
    const category = useRecoilValue(categorystate);
    const {register,handleSubmit,setValue} = useForm<Iform>();
    const handlevalid = ({todo} : Iform) => {
    
        setValue("todo","");
        settodo((oldtodo) => [...oldtodo, {id:Date.now(), text:todo, category},]);
    };
    

    return (
        <>
            <Header>Todo list</Header>
     

        <Form onSubmit={handleSubmit(handlevalid)}>
          <Input
            {...register("todo", {
              required: "Please write a To Do",
            })}
            placeholder="Write a to do"
          />
          <Button>Add</Button>
        </Form>
      </>
    )
}
export default Createtodo;