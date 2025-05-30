import './css/LoginButton.css'
export const LoginButton = ({loginPageLink}) => {
    return (
        <>
        <div className="loginBox">
            <a href={loginPageLink} >Login</a>
        </div>
        </>
    )
}

{/*
Way to use:
Step 1: import { LoginButton } from '../components/LoginButton'
Step 2: Use this component in parent body <LoginButton loginPageLink={'#'} />
*/}