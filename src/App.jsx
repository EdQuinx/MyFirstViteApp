import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <nav className="nav-bar background h-nav ">
        <img src="assets/img/logo.png" alt="logo" className="logo" />
        <ul className="nav-list v-class">
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact-block">Contact</a>
          </li>
        </ul>
        <div className="right-nav v-class">
          <input type="text" name="search" id="search" />
          <button className="btn btn-search"> Search</button>
        </div>
        <div className="burger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </nav>
      <section className="background firstSection" id="home">
        <div className="box-main">
          <div className="firstHalf">
            <p className="text-bg">F-Code - Code the dream</p>
            <p className="text-sm">
              F-Code is a club, a community, a family where all members share
              the same passion for coding. What are you waiting for? Join us
              now.
            </p>
            <div className="buttons">
              <a href="#contact-block">
                <button className="btn">Contact Us</button>
              </a>
            </div>
          </div>
          <div className="secondHalf">
            <img src="assets/img/logo.png" alt="Club Logo" />
          </div>
        </div>
      </section>
      <section id="service" className="section-down">
        <div className="para">
          <p className="sectionTag text-bg">About us</p>
          <p className="sectionSubTag text-sm">
            F-Code, established in 2014, is the first academic club of FPT
            University at Ho Chi Minh City. With the initial aim of creating a
            community for Software Engineering major’s students, F-Code allows
            them to share and improve skills that are neccesary for developers.
            After 5 years, F-Code has offered various activites to students.
          </p>
        </div>
        <div className="thumbnail">
          <img
            className="imgFluid"
            src="assets/img/about.jpg"
            alt="logo Image"
          />
        </div>
      </section>
      <div className="hr-end">
        <hr />
      </div>
      <section className="section-down reverse-order">
        <div className="para">
          <p className="sectionTag text-bg">R.ODE Battle 2023</p>
          <p className="sectionSubTag text-sm">
            R.ODE BATTLE 2023 is a focused competition that attracts programmers
            with skills in algorithm usage or CSS. In the competition,
            participants will test their abilities by applying their knowledge
            and skills to solve high-level algorithmic problems or logic-based
            problem-solving in shape creation tasks using CSS.
          </p>
        </div>
        <div className="thumbnail">
          <img
            className="imgFluid"
            src="./assets/img/rode.jpg"
            alt="logo Image"
          />
        </div>
      </section>
      <hr />
      <section className="section-down">
        <div className="para">
          <p className="sectionTag text-bg">
            Exploring IT Universe - SPACE ARENA
          </p>
          <p className="sectionSubTag text-sm">
            This is a knowledge-based competition with a wide range of questions
            covering various fields. Participants will gather at the competition
            venue and answer the questions posed by the organizers. Those who
            answer correctly will continue to stay in the competition, while
            those who answer incorrectly will have to stop playing and leave the
            arena.
          </p>
        </div>
        <div className="thumbnail">
          <img
            className="imgFluid"
            src="./assets/img/space_arena.jpg"
            alt="logo Image"
          />
        </div>
      </section>
      <div className="hr-end">
        <hr />
      </div>
      <div id="contact-block" className="contact-block">
        <div className="contact-address">
          <h2>Contact Us</h2>
          <p>
            Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
            phố Hồ Chí Minh
          </p>
          <p>Tel: +84010204192</p>
        </div>
        <div className="contact-emails">
          <div className="emails">
            <h4>F - Code Academic Club</h4>
            <p>fcode.fptuhcm@gmail.com</p>
          </div>
          <div className="emails">
            <h4>Backend Crew</h4>
            <p>be.fcode.fptuhcm@gmail.com</p>
          </div>
          <div className="emails">
            <h4>Frontend Crew</h4>
            <p>fe.fcode.fptuhcm@gmail.com</p>
          </div>
          <div className="emails">
            <h4>AI Crew</h4>
            <p>ai.fcode.fptuhcm@gmail.com</p>
          </div>
          <div className="emails">
            <h4>Security Crew</h4>
            <p>ia.fcode.fptuhcm@gmail.com</p>
          </div>
          <div className="emails">
            <h4>Game Crew</h4>
            <p>game.fcode.fptuhcm@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer background">
        <p>Copyright © EdQuinx</p>
      </div>
    </>
  );
}

export default App;
