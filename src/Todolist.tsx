import { type } from "os";
import {useForm} from "react-hook-form"


interface Iform{
    firstname:string,
    lastname:string,
    username:string,
    password:number,
    password1:number,
    email:string,
}

function Todolist(){
    const {register,handleSubmit,formState:{errors}} = useForm<Iform>({
        defaultValues:{
            email:"@naver.com"
        }
    })
    const onvalid = (data: any)=>{
        console.log(data);
    }
    console.log(errors);
 
    return (
       <>
       <form style={{display:"flex" , flexDirection:"column"}} onSubmit={handleSubmit(onvalid)}>
        <input {...register("firstname",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="firstname~" />
        <span>{errors.firstname?.message}</span>
        <input {...register("lastname",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="lastname~" />
        <span>{errors.lastname?.message}</span>
        <input {...register("username",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="username" />
        <span>{errors.username?.message}</span>
        <input {...register("password",{
            required: {value:true,message:"sex"} , 
            minLength:{value:3,message:"too short"}})} 
            placeholder="pw" />
        <span>{errors.password?.message}</span>
        <input {...register("password1",{
            required:"write here",
            minLength:{value:3,message:"too short"}})} 
            placeholder="pwck" />
        <span>{errors.password1?.message}</span> 
        <input {...register("email",{
            required:"write here",  
            pattern:{value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
                    message: "Only naver.com emails allowed"},
            })} 
            placeholder="email" />
        <span>{errors.email?.message}</span>
       
        
        <button>add</button>

       </form>
       </>
    )

}
export default Todolist;