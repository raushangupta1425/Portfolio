import './css/HeaderContact.css'
export const HeaderContact = (Props) => {
    let {phone, email} = Props;
    return (
        <>
        <div className="headerContact">
              <i className="fas fa-phone-volume"></i> <span> +91 {phone}</span>
              <i className="far fa-envelope-open ms-4 me-1"></i> <span> {email}</span>
          </div>
        </>
    )
}

{/*
Way to use:
Step 1: import { HeaderContact } from '../components/HeaderContact'
Step 2: Use this component in parent body <HeaderContact phone={'98xxxxxx32'} email={'abc@gmail.com'} />
*/}