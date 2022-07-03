import {Link} from 'react-router-dom'
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
const Choicewr = styled.ul`
display:block;
border: 1px solid ${prop=>prop.theme.bordercolor};
border-radius: 20px;
max-width: 480px;
text-align: center;
font-size: 30px;
margin-top: 100px;
`
const Choice = styled.li`
background-color: ${(props)=>props.theme.bgcolor};
color: ${(props) => props.theme.textcolor};
margin: 30px;
border-bottom:1px solid ${prop=>prop.theme.bordercolor};
a {
    padding: 15px;
}
&:hover {
    a {
      color: ${(props) => props.theme.accentcolor};
      opacity: 0.7px;
    }
  }    


`
function Home()
{
    return(
        <Container>
            <Header>
        <Title>practice todolist</Title>
        </Header>
        <Choicewr>
        <Choice><Link to={'/signup'}>Signup</Link></Choice>
        <Choice><Link to={'/todo'}>todolist</Link></Choice>
        </Choicewr>
        </Container>

    )

}
export default Home;
