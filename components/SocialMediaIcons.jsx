import './css/SocialMediaIcons.css'
export const SocialMediaIcons = (Props) => {
    let {facebookLink, twitterLink, instagramLink, linkedinLink} = Props;
    return (
        <>
         <div className="socialIcons">
              <a href={facebookLink}><i className="fab fa-facebook-f"></i></a>
              <a href={twitterLink}><i className="fab fa-twitter"></i></a>
              <a href={instagramLink}><i className="fab fa-instagram"></i></a>
              <a href={linkedinLink}><i className="fab fa-linkedin"></i></a>
          </div>
        </>
    )
}

{/*
Way to use:
Step 1: import { SocialMediaIcons } from '../components/SocialMediaIcons'
Step 2: Use this component in parent body <SocialMediaIcons facebookLink={'#'} twitterLink={'#'} instagramLink={'#'} linkedinLink={'#'} />
*/}