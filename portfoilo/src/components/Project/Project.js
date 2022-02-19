// import React from "react";
// import { useEffect, useState} from "react";
// import { useParams, Link } from "react-router-dom";
// import colmarAcademySpec from "../../images/colmar-academy-spec.png";
// import findYourHatGif from "../../images/find-your-hat-demo.gif";
// import numberGuesser from "../../images/numberGuesserSpec.png";
// import jammming from "../../images/Jammming.png";
// import jammmingSpotify from "../../images/jammmingSpotify.png";
// import wireframes from "../../images/wireframes.png";
// import demoOne from "../../images/1stDemo.png";
// import demoTwo from "../../images/2ndDemo.png";
// import "./Project.css";

// export default function Project() {
//   const pjData = [
//     {
//       id: "projectOne",
//       title: "COLMAR ACADEMY",
//       dueDate: "Completion:2021-1 week",
//       href: "https://andison624.github.io/Capstone-ColmarAssets/",
//       rel: "colmarAcademy",
//       challenge:
//         "This project provides both desktop and responsive versions of the image, which need to be done in one week according to the size and layout requirements provided.",
//       outcome:
//         "To complete this project within the target timeframe, I used bootstrap framework to complete this challenge.",
//       skills: ["HTML5", "CSS", "ResponsiveWeb", "Bootstrap"],
//       user1:
//         "They need the project to match the size and layout required within the images they provide.",
//       user2: "They need both desktop and the responsive versions.",
//       src1: "colmarAcademySpec",
//       result:
//         "With the popularity of 3G, more and more people are using mobile phones to access the Internet. Mobile devices are overtaking desktop devices as the most common terminals to access the Internet.This project allowed me to be exposed to this concept, which I believe can be applied to future projects.",
//       key1: "As getting into bootstrap, I learned about the convenience of framework",
//       key2: "Search the responsive profile, know-how does its importanc",
//     },
//     {
//       id: "projectTwo",
//       title: "FIND YOUR HAT",
//       dueDate: "Completion:2021-3 week",
//       href: "https://github.com/Andison624/Find-Your-Hat",
//       rel: "findYourHat",
//       challenge:
//         "In this project, I need to build an interactive terminal game. The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.",
//       outcome:
//         "In this project, I built an interactive terminal game with JavaScript classes. I build this mini-game by looking at a dynamic gif image and to add to the fun, I added other difficulty options to the basic requirements.",
//       skills: ["JavaScript"],
//       user1:
//         "When users fall down one of the holes or step outside the map, show they are defeated.",
//       user2: "When users find the hat, show they are won.",
//       src1: "findYourHatGif",
//       result:
//         "This project got me to practice a lot of JavaScript basics such as If than else, class, and loop. Since React is the world of classes, it is easier for me to learn to react by relying on what I learned in this project.",
//       key1: "Intensifier If than else, class, and loop.",
//       key2: "Learn more about what a class is and make it easy to learn react",
//     },
//     {
//       id: "projectThree",
//       title: "NUMBER GUESSER",
//       dueDate: "Completion:2021-3 week",
//       href: "https://andison624.github.io/Number-Guesser/",
//       rel: "numberGuesser",
//       challenge:
//         "In this project, I write JavaScript functions to power a small guessing game. This time, my code will run in the browser instead of just the terminal. Instead of just seeing text output from my program, my JavaScript functions are incorporated into a website that also uses HTML/CSS.",
//       outcome:
//         "In addition to the project requirements, I have added some interactive features to make this project more interesting and more comfortable for users. It's as if a sign will appear when winning and losing. Provides a next round button to reset the game without having to rearrange the page.",
//       skills: ["HTML5", "CSS", "JavaScript"],
//       user1: "They need NPC to provide a random set of numbers as targets.",
//       user2:
//         " They need after the computer player and the user provides a number, which side's number is closer to the NPC's random number to determine which side wins.",
//       src1: "numberGuesser",
//       result:
//         "In fact, this project is less difficult than the projects I have done before, mainly because it allows me to mix HTML, CSS, and JavaScript, as well as understand how to use Math",
//       key1: "When taking a method name, you need to use a name that is easy to understand the method of the function",
//       key2: "How to use HTML, CSS and JavaScript at the same time",
//     },
//     {
//       id: "projectFour",
//       title: "JAMMMING",
//       dueDate: "Completion:2022-3 week",
//       href: "https://andison624.github.io/Jammming/",
//       rel: "jammming",
//       challenge:
//         "In this project, I will build a React web application called Jammming. I will use my knowledge of React components, passing state, and requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.",
//       outcome:
//         "I used the HTML and CSS available online and wrote out the functionality that the entire web app needed with REACT. However, I had no understand it in a short period of time, so I referred to the practice of online videos and wrote a lot of comments for future research.",
//       skills: ["HTML5", "CSS", "JavaScript", "API"],
//       user1:
//         "They need to use my knowledge of React components and passing state.",
//       user2:
//         "They need requests with the Spotify API to build a website that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.",
//       src1: "jammming",
//       result:
//         "This web app can run successfully, but I still have a half-understanding of the operation of the API and need to learn more. In addition, to use this web app, you need to fill in Users and Access in the background of <a href='https://developer.spotify.com/my-applications/#!/applications' target='_blank'><i>Spotify</i></a>{' '}to use it, otherwise, a 403 error will be displayed.",
//       key1: "How the API works",
//     },
//     {
//       id: "projectFive",
//       title: "TO DO LIST",
//       dueDate: "Completion:2021-1 month",
//       href: "https://andison624.github.io/ToDoList/",
//       rel: "toDoList",
//       challenge:
//         "This project is working in a group of 3 people. There are ten requirements in total: Design The App Wireframes/ Implement The Wireframes using Bootstrap/ Create a Task Card layout and a Task List component/ Display The Tasks/ Task Form Inputs Validation/ Update A Task/ Persisting Tasks to LocalStorage/ Deleting Tasks/ Test TaskManager.",
//       outcome:
//         "I handle Design The App Wireframes/ Implement The Wireframes using Bootstrap/ Create a Task Card layout and a Task List component/ Display The Tasks/ Update A Task/ Deleting Tasks. As well as some additional challenges such as dark mode, search function, and sidebar.",
//       skills: [
//         "HTML5",
//         "CSS",
//         "ResponsiveWeb",
//         "Bootstrap",
//         "React-bootstrap",
//         "JavaScript",
//         "React.js",
//         "jQuery",
//         "Figma",
//         "Jest",
//         "API",
//       ],
//       user1: "They need to create a Task Planner web app from scratch.",
//       user2:
//         "they need to demonstrate the technical and non-technical skills developed during the Junior Web Developer program.",
//       src1: "wireframes",
//       src2: "demoOne",
//       src3: "demoTwo",
//       result:
//         "The project was conducted in small groups, which gave me an idea of how a project can be created from scratch. After understanding the ten project requirements, we expressed our opinions to choose the part of our handle and added some additional features to make the entire Web app more complete and beautiful.",
//       key1: " I learned to react.Hook, which is more convenient than React.Component",
//       key2: "I learned to use Figma to paint sitemaps before creating a web app",
//     },
//   ];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div id="project">
//       {
//         pjData.map((pj) => {
//           return (
//             <div className={pj.id} className="project-inner">
//               <div className="project-title">
//                 <div className="project-title-inner">
//                   <h1>
//                     {pj.title}
//                   </h1>
//                   <div className="project-title-text">
//                     <h4>{pj.dueDate}</h4>
//                     <div>
//                       <a
//                         href={pj.href}
//                         target="_blank"
//                         rel={pj.rel}
//                         className="project-title-btn"
//                       >
//                         VIEW DEMO
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-head">
//                 <div className="project-head-inner">
//                   <div className="project-head-inner-1">
//                     <h3>CHALLENGE</h3>
//                     <p>{pj.challenge}</p>
//                   </div>
//                   <div className="project-head-inner-2">
//                     <h3>OUTCOME</h3>
//                     <p>{pj.outcome}</p>
//                     <h5>
//                       <i>SKILLS</i>
//                     </h5>
//                     <div className="skills">
//                       {/* <span>{pjData.skills}</span>
//                   <span>{pjData.skills}</span>
//                   <span>{pjData.skills}</span> */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-body">
//                 <div className="project-body-inner">
//                   <div className="project-body-inner-1">
//                     <h3>WHAT DO USERS WANT?</h3>
//                     <div className="userWant">
//                       <div className="userWant-1">
//                         <h5>01</h5>
//                         <span>{pj.user1}</span>
//                       </div>
//                       <div className="userWant-2">
//                         <h5>02</h5>
//                         <span>{pj.user2}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="project-body-inner-2">
//                     <h3>REQUIREMENTS</h3>
//                     <img src={pj.src1}></img>
//                     <img src={pj.src2}></img>
//                     <img src={pj.src3}></img>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-footer">
//                 <div className="project-footer-inner">
//                   <h3>RESULTS AND TAKEAWAYS</h3>
//                   <p>{pj.result}</p>
//                   <h5>
//                     <i>Some key takeaways from this project are:</i>
//                   </h5>
//                   <li>{pj.key1}</li>
//                   <li>{pj.key2}</li>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       <Link to="/">
//         <div>home</div>
//       </Link>
//     </div>
//   );
// }
