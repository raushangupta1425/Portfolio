import './css/NavItems.css'
export const NavItems = (props) => {
    let {intro,about,skills,projects,profiles,cert,resume,contact} = props;
    
    return (
        <>
        <ul id="navBars">
            <li >
                <a className="active" aria-current="page" href={intro}>Introduction</a>
            </li>
            <li>
                <a aria-current="page" href={about}>About</a>
            </li>
            <li>
                <a aria-current="page" href={skills}>Skills</a>
            </li>
            <li id='dropdown'>
                <a href={projects} role="button">
                    Projects
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a href={"#"}>My Projects</a></li>
                    <li><a href={"#"}>College Projects</a></li>
                    {/* <li><a href={action}>Something else here</a></li> */}
                </ul>
            </li>
            <li>
                <a aria-current="page" href={profiles}>Profiles</a>
            </li>
            <li>
                <a aria-current="page" href={cert}>Certificates</a>
            </li>
            <li>
                <a aria-current="page" href={resume}>Resume</a>
            </li>
            <li>
                <a aria-current="page" href={contact}>Contact</a>
            </li>
        </ul>
        </>
    )
}

{/*
Way to use:
Step 1: import { NavItems } from '../components/NavItems'
Step 2: Use this component in parent body <NavItems home={'#'} action={'#'} contact={'#contact'} />
*/}