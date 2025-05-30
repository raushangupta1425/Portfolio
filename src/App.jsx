import { useState } from 'react';
import './App.css';
import { ToggleSwitchButton } from '../components/ToggleSwitchButton';
import { SearchBox } from '../components/SearchBox';
import { HeaderContact } from '../components/HeaderContact';
import { SocialMediaIcons } from '../components/SocialMediaIcons';
import { NavItems } from '../components/NavItems';
import { CarouselSlide } from '../components/CarouselSlide';
import { Footer } from '../components/Footer';
import CircularProgressBar from '../components/CircularProgressBar';
import Card from '../components/Card';
import ButtonCarousel from '../components/ButtonCarousel';
import TypingTextAnimator from '../components/ui/TypingTextAnimator';

function App() {
  const [isOn, setIsOn] = useState(false)  // For ToggleSwitchButton
  const [searchValue, setSearchValue] = useState('')  // For search box

  const slides = [
    {
      image: '/Files/FilesImage/InfosysAI__Cert.png',
      description: 'This certificate is issued by Infosys for the successfully completation of Internship.',
    },
    {
      image: '/Files/FilesImage/Codsoft Web Dev.png',
      description: 'This certificate is issued by Codsoft for the successfully completation of Internship in Web development.',
    }
  ];
  const resumeSlides = [
    {
      image: '/Files/FilesImage/AI Resume.png',
      description: 'AI Developer Job Role.',
    },
    {
      image: '/Files/FilesImage/MERN Resume.png',
      description: 'Web developer Job Role.',
    }
  ];

  const messages = [
    "AI Developer",
    "MERN Stack Developer",
    "Full Stack Web Developer"
  ];

  return (
    <>
      <div id="home" className='container' style={isOn ? {backgroundColor: "#000",color: "#fff" } : { backgroundColor: "#fff",color: "#000" }}>
        <header className='row ' style={isOn ? {backgroundColor: "#14AEA8", color: "black"} : {backgroundColor: "black", color: "white"}}>
            <div className="col "><HeaderContact phone={'xxxxxxxxxx'} email={'raushangupta1425@gmail.com'} /></div>
            <div className="col-1 "><SocialMediaIcons facebookLink={'#'} twitterLink={'#'} instagramLink={'#'} linkedinLink={'https://www.linkedin.com/in/raushan-kumar-gupta/'} /></div>
            <div className="col-3 " id='search'><SearchBox searchValue={searchValue} setSearchValue={setSearchValue} /></div>
            <div className="col-2 " id='theme'><span>Theme : </span> <ToggleSwitchButton isOn={isOn} setIsOn={setIsOn} /></div>
        </header>
        <nav className='row'>
            <span className="textStyle">Raushan Gupta</span>
            <NavItems intro={'#home'} about={"#about"} skills={"#skills"} projects={"#projects"} profiles={"#profiles"} cert={"#certficates"} resume={"#resume"} contact={'#footer'} />
        </nav>
        <section>
          <CarouselSlide img1={"/Images/backgroundImage3.png"} img2={"/Images/backgroundImage4.png"} img3={"/Images/backgroundImage2.png"} img4={"/Images/backgroundImage8.png"}/>
          <div id='overlapLayer'>
            <div id='profilePic'>
              <img src="/ProfilePic.jpg" alt="Profile pic" />
            </div>
            <div>
              <h1>Hii &#x1F44B; Welcome!</h1>
              <h2>I'm Raushan Gupta</h2>
              <TypingTextAnimator texts={messages} />
              <p>I'm a Generative AI + MERN Stack + Full Stack Web Developer with a passion for creating dynamic and responsive web applications. I have college projects experience in both front-end and back-end development, and I'm always eager to learn new technologies and improve my skills.</p>
              <p>I'm currently looking for opportunities to work on exciting projects and collaborate with talented teams. If you're interested in working together, feel free to reach out!</p>
              <p>Let's connect and build something amazing together!</p>
              <a href="https://github.com/raushangupta1425?tab=repositories"><img class="socialMediaIcons" src="/Logo/github.png" alt="Github Logo" width="50"/></a>
              <a href="#"><img class="socialMediaIcons" src="/Logo/facebooklogo.png" alt="Facebook Logo" width="50"/></a>
              <a href="https://www.linkedin.com/in/raushan-kumar-gupta-raushan-kumar-gupta/"><img class="socialMediaIcons" src="/Logo/linkedinlogo.png" alt="LinkedIn Logo" width="50"/></a>
              <a href="https://www.youtube.com/@embeddedprojectscreator4824"><img class="socialMediaIcons" src="/Logo/youtubelogo.png" alt="YouTube Logo" width="50"/></a>
              <span style={{float: "right",display: "flex", gap: "30px"}}><a href="#footer"><button style={{backgroundColor: "rgb(80, 11, 170)"}}>CONTACT ME</button></a>
              <a href="Files/AI Resume.pdf"><button style={{backgroundColor: "rgb(80, 11, 170)"}}>SEE MY RESUME</button></a></span>
      </div>
          </div>
        </section>
        <section className='row' id='about'>
          <h1 className='headingTagText'>About</h1>
          <div className="aboutContainer row">
            <div className='col-8'>
              <p>I'm passionate about learning new skills and technology and very excited to get a chance to work with company developers. I also excited to play a role in software development or AI development fields. <br /> I have projects works experience in a Team, where I had play a role of <strong>Front-end developer.</strong> It was a minor project which we have to submitted in college. <br /> I always trying to update myself with new skills and technique to solve any problem by self-learning to gain a proper knowledge about my field. <br /> I also like to solve complex and competitive programming. You can see my different profiles given below on different platform.<br />I also made a website through using my skills of my YouTube channel, i.e. Embedded Projects Creator <a href="https://raushangupta1425.github.io/WebsiteDevelopment/">Embedded Projects Creator.</a></p>
            </div>
            <div className='col-4'>
              <img src="/Photo.png" alt="ProfilePic" />
            </div>
          </div>
        </section>
        <section id='skills'>
          <h1 className='headingTagText'>Skills</h1>
          <div className='skillsContainer'>
            <CircularProgressBar percentage={20} label="LangChain" />
            <CircularProgressBar percentage={20} label="Vector DB" />
            <CircularProgressBar percentage={20} label="Embeddings" />
            <CircularProgressBar percentage={30} label="Prompt Engineering" />
            <CircularProgressBar percentage={10} label="RAG" />
            <CircularProgressBar percentage={70} label="ReactJS" />
            <CircularProgressBar percentage={50} label="Express" />
            <CircularProgressBar percentage={80} label="NodeJS" />
            <CircularProgressBar percentage={40} label="MongoDB" />
            <CircularProgressBar percentage={60} label="DSA" />
          </div>
        </section>
        <section id='projects'>
          <h1 className='headingTagText'>Projects</h1>
          <div className='projectsContainer'>
            <Card
              imageSrc="/Images/Infosys Project.png"  
              title="Speech-to-Speech Streaming in 12+ Languages"
              projectLink="https://github.com/raushangupta1425/Speech-to-Speech-Streaming-Project"
            />
            <Card
              imageSrc="/Images/Kids Coding.png"  
              title="CodeKids"
              projectLink="https://skc-raushangupta1425.vercel.app/chat"
            />
            <Card
              imageSrc="/Images/KR3 Page.png"  
              title="KR3 - Gov. Test Preparation"
              projectLink="https://kr3.onrender.com"
            />
          </div>
        </section>
        <section id='profiles'>
          <h1 className='headingTagText'>Profiles</h1>
          <div className='projectsContainer'>
            <Card
              imageSrc="/Images/Hackerrank.jpg"  
              title="HackerRank Profile"
              projectLink="https://www.hackerrank.com/profile/raushangupta1425"
            />
            <Card
              imageSrc="/Images/LeetCode.png"  
              title="LeetCode Profile"
              projectLink="https://leetcode.com/RaushanGupta1425/"
            />
            <Card
              imageSrc="/Images/GeeksforGeeks.png"  
              title="GeeksforGeeks Profile"
              projectLink="https://www.hackerrank.com/profile/raushangupta1425"
            />
          </div>
        </section>
        <section id='certficates'>
          <h1 className='headingTagText'>Certifications</h1>
          <div className='certificationsContainer'>
            <ButtonCarousel slides={slides} />
          </div>
        </section>
        <section id='resume'>
          <h1 className='headingTagText'>Resume</h1>
          <div className='row resumeContainer'>
            <div className="col-6">
              <p>This Resume represent my skills and knowledge and give a brief intro about me. Download it for best view.</p>
              <p>AI Resume: <a href="/Files/AI Resume.pdf" type='button' download="Raushan's Resume">Download</a></p>
              <p>Web developer Resume: <a href="/Files/FULL MERN STACK DEVELOPER.pdf" type='button' download="Raushan's Resume">Download</a></p>
            </div>
            <div className="col-6">
              <ButtonCarousel slides={resumeSlides}/>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default App
