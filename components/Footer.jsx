import "./css/Footer.css";
export const Footer = () => {
  return (
    <>
    <h1 className="headingTagText">Contact Me</h1>
    <footer className='row' id='footer'>
        <div className="col-4">
            <h3>Contact Form</h3>
            <form action="#" autoComplete="off">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder='Enter your name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter your email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows={3} placeholder='Enter your message'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <div className="col-4">
            <h3>Follow Me</h3>
            <a href="https://github.com/raushangupta1425">GitHub</a> <br />
            <a href="https://www.linkedin.com/in/raushan-kumar-gupta/">LinkedIn</a>
        </div>
        <div className="col-4">
            <h3>Quick Links</h3>
            <a href="#home">Introduction</a><br />
            <a href="#about">About</a><br />
            <a href="#skills">Skills</a><br />
            <a href="#projects">Projects</a><br />
            <a href="#profiles">Profile</a><br />
            <a href="#certficates">Certificates</a><br />
            <a href="#resume">Resume</a><br />
            <a href="#footer">Contact</a>
        </div>
    </footer>
    <hr />
    <div className='row' id='copyright' style={{textAlign: "center"}}>
        <p>© {new Date().getFullYear()} Raushan Gupta. All rights reserved.</p>   
    </div>
    </>
    )
}