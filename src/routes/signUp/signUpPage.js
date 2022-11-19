import { Link } from "react-router-dom";
import './styles.js';
import { Body, Container, TitleBox, Input, Button, ToSignUp } from './styles.js';


export default function SignUp ()
{
    return (
		<Container>
            <Body>
                <TitleBox>Muca Agendamentos</TitleBox> 
                <Input placeholder='Name' type="text"></Input> 
                <Input placeholder='E-mail' type="email" ></Input> 
                <Input placeholder='Password' type="password" ></Input> 
                <Input placeholder='Confirm your password' type="password"></Input> 
                <Button >Register</Button>
                <Link to="/">
                <ToSignUp>Already have an account? Log in here!</ToSignUp> 
                </Link> 
            </Body> 
		</Container>
	);

}