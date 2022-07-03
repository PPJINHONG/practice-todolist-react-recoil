import { type } from "os";
import {useForm} from "react-hook-form"
import styled from "styled-components";
const Container = styled.div`
 padding: 0px 20px;
 max-width: 500px;
 margin: auto;
 
 `
const Header = styled.header`
 height: 15vh;
 display: block;
 justify-content: center;
 margin-top:15px;
 padding-top: 30px;
`
const Title = styled.h1`
font-size :30px;
color: ${(props) => props.theme.textcolor};
text-align: center;
`
const Input = styled.input`
margin: 15px 0px 0px 0px;
height: 30px;
`
interface Iform{
    firstname:string,
    lastname:string,
    username:string,
    password:number,
    password1:number,
    email:string,
    formerros?:string
}

function Signup(){
    const {register,handleSubmit,formState:{errors},setError,setValue,reset} = useForm<Iform>({
        defaultValues:{
            email:"@naver.com"
        }
    })
   
    const onvalid= (data : Iform)=>{    //마지막 호출 (handlesubmit객체를 씀)
        if(data.password !== data.password1)
        return setError("password1",{
            message:"password are not same",
        },
        {
            shouldFocus:true
        }
        
        )
        setValue("firstname",""); //https://react-hook-form.com/api/useform/setvalue
        reset();
        console.log(data);        
        // setError("formerros",{message:"form erros!"}) //폼전체 막기 
    }
    console.log(errors);
 
    return (
       <Container>
           <Header>
       <Title>Signup</Title>
       </Header>
       <form style={{display:"flex" , flexDirection:"column"}} onSubmit={handleSubmit(onvalid)}>
        <Input {...register("firstname",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="firstname~" />
        <span>{errors.firstname?.message}</span>
        <Input {...register("lastname",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="lastname~" />
        <span>{errors.lastname?.message}</span>
        <Input {...register("username",{
            required:"write here",
            minLength:{value:3,message:"too short"},   
            validate:(value)=> value.includes("jinhong") ? "no jinhong allowed" : true
                })} 
            placeholder="username" />
        <span>{errors.username?.message}</span>
        <Input {...register("password",{
            required: {value:true,message:"sex"} , 
            minLength:{value:3,message:"too short"}})} 
            placeholder="pw" />
        <span>{errors.password?.message}</span>
        <Input {...register("password1",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="pwck" />
        <span>{errors.password1?.message}</span> 
        <Input {...register("email",{
            required:"write here",  
            pattern:{value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                    message: "Only naver.com emails allowed"},
            })} 
            placeholder="email" />
        <span>{errors.email?.message}</span>
       
        
        <button>add</button>
        <span>{errors.formerros?.message}</span>
       </form>
       <ul></ul>
       </Container>
    )

}
export default Signup;