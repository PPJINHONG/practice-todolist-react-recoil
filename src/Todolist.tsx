import { type } from "os";
import {useForm} from "react-hook-form"


interface Iform{
    firstname:string,
    lastname:string,
    username:string,
    password:number,
    password1:number,
    email:string,
    formerros?:string
}

function Todolist(){
    const {register,handleSubmit,formState:{errors},setError} = useForm<Iform>({
        defaultValues:{
            email:"@naver.com"
        }
    })
    const onvalid= (data : Iform)=>{
        if(data.password !== data.password1)
        return setError("password1",{
            message:"password are not same",
        },
        {
            shouldFocus:true
        }
        
        )
        // setError("formerros",{message:"form erros!"})
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
            minLength:{value:3,message:"too short"},   
            validate:(value)=> value.includes("jinhong") ? "no jinhong allowed" : true
                })} 
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
        <span>{errors.formerros?.message}</span>
       </form>
       </>
    )

}
export default Todolist;