//save d jsx to an element den return d element as jsx...a jsx returned by a component is an object dat is wy we can save it in an elememnt den return/render d element.

// export default function Page() {
//   const page = (
//     <div>
//       <h1 className="header">This is JSX</h1>
//       <p>this is a paramood event</p>
//     </div>
//   );
//   console.log(page); //returns an object...page olds jsx elements
//   return page;
// }

///////////////////////////

// export default function Page() {
//   return (
//     <div>
//       <h1 className="header">This is JSX</h1>
//       <p>this is a paramood event</p>
//     </div>
//   );
// }

//challenge
// create a navbar in JSX:
// use d sematic nav element as d parent wrapper
// have an h1 element with d brand name of your website
// insert an unordered list for the other nav elements
//   inside the url have 3 li for pricinh, about and contact

// import MainContent from "./MainContent";

// import React from "react";

// export default function Page() {
//   const mywebsite = (
//     <nav>
//       <h1 className="header">sammyking.com</h1>
//       <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
//   console.log(mywebsite); //returns an object...page holds jsx elements
//   const myreactcourse = (
//     <nav>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//         <li>composable</li>
//         <li>declarative</li>
//         <li>hireable skillset</li>
//         <li>actively maintained</li>
//       </ol>
//     </nav>
//   );
//   return [mywebsite, myreactcourse];
// }
//friday solution dont use its wron a function returns one jsx not an array of jsx.

/*  g  h  5  =  6   ="  "   */

//solution

// export default function Page() {
//   return (
//     <>
//       <nav>
//         <h1 className="header">sammyking.com</h1>
//         <ul>
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//       <nav>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//           <li>composable</li>
//           <li>declarative</li>
//           <li>hireable skillset</li>
//           <li>actively maintained</li>
//         </ol>
//       </nav>
//     </>
//   );
// }

//challenge

// import logo from "./vite-project/src/assets/react.png";//wrong directory..assets and Page.js are in d same folder...just into asset den select d image

// export default function Page() {
//   const page = (
//     <div className="container">
//       <div className="logo1">
//         <img src={logo} width="40px" />
//       </div>
//       <h1>Fun facts about React</h1>
//       <ul className="list">
//         <li className="list">Was first released in 2013</li>
//         <li className="list">Was oriinally created by Jordan Walke</li>
//         <li className="list">as well over 100k Stars on Github</li>
//         <li className="list">Is maintained by Facebook</li>
//         <li className="list">
//           Powerstousands of enterprise apps, includin mobile apps
//         </li>
//       </ul>
//     </div>
//   );

//   return page;
// }

//or

// const page = (
//   <div className="container">
//     <div className="logo1">
//       <img src={logo} width="40px" />
//     </div>
//     <h1>Fun facts about React</h1>
//     <ul className="list">
//       <li className="list">Was first released in 2013</li>
//       <li className="list">Was oriinally created by Jordan Walke</li>
//       <li className="list">as well over 100k Stars on Github</li>
//       <li className="list">Is maintained by Facebook</li>
//       <li className="list">
//         Powerstousands of enterprise apps, includin mobile apps
//       </li>
//     </ul>
//   </div>
// );

// export default function Page() {
//   return page;
// }

/*  g  h  5  =  6   ="  "   */

//lesson 13......58:59

// export default function Page() {
//   return (
//     <div>
//       <div>
//         <div className="logo1">
//           <img src={logo} width="40px" />
//         </div>
//         <h1>Fun facts about React</h1>
//       </div>

//       <ul className="list">
//         <li className="list">Was first released in 2013</li>
//         <li className="list">Was originally created by Jordan Walke</li>
//         <li className="list">as well over 100k Stars on Github</li>
//         <li className="list">Is maintained by Facebook</li>
//         <li className="list">
//           Powerstousands of enterprise apps, includin mobile apps
//         </li>
//       </ul>
//     </div>
//   );
// }
{
  /* <Page/> ...not needed vite does it itself..u dont call afetr u export*/
}

//challenge....1:04:44
// export default function Page() {
//   return (
//     <>
//       <header>
//         <nav>
//           <div className="logo1">
//             <img src={logo} width="40px" />
//           </div>
//         </nav>
//       </header>

//       <h1>Reasons I am excited about React</h1>
//       <ol className="list">
//         <li className="list">makes code more readable</li>
//         <li className="list">makes project collaboration easier</li>
//         <li className="list">makes code more efficient</li>
//         <li className="list">takes care of complex processes itself</li>
//       </ol>
//       <footer>
//         <small>@ 202x zane development. All rights reserved</small>
//       </footer>
//     </>
//   );
// }

//challenge....1:14:04......bnreakin a function into components den renderin instances of d component wen needed.

// export function Header() {
//   return (
//     <header>
//       <nav>
//         <div className="logo1">
//           <img src={logo} width="40px" />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default function Page() {
//   return (
//     <>
//       <Header />
//       <h1>Reasons I am excited about React</h1>
//       <ol className="list">
//         <li className="list">makes code more readable</li>
//         <li className="list">makes project collaboration easier</li>
//         <li className="list">makes code more efficient</li>
//         <li className="list">takes care of complex processes itself</li>
//       </ol>
//       <footer>
//         <small>@ 202x zane development. All rights reserved</small>
//       </footer>
//     </>
//   );
// }

//callene

// function Header() {
//   return (
//     <header>
//       <nav>
//         <div className="logo1">
//           <img src={logo} width="40px" />
//         </div>
//       </nav>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <small>@ 202x zane development. All rights reserved</small>
//     </footer>
//   );
// }

// function MainContent() {
//   return (
//     <>
//       <h1>Reasons I am excited about React</h1>
//       <ol className="list">
//         <li className="list">makes code more readable</li>
//         <li className="list">makes project collaboration easier</li>
//         <li className="list">makes code more efficient</li>
//         <li className="list">takes care of complex processes itself</li>
//       </ol>
//     </>
//   );
// }

// export default function Page() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }

//callene

// function Header() {
//   return (
//     <header>
//       <nav>
//         <div>
//           <nav className="nav-container">
//             <div className="img-container">
//               <img src={logo} width="40px" />
//             </div>
//             <ul className="nav-items">
//               <li>Pricing</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </nav>
//         </div>
//       </nav>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <small>@ 202x zane development. All rights reserved</small>
//     </footer>
//   );
// }

// function MainContent() {
//   return (
//     <>
//       <h1>Reasons I am excited about React</h1>
//       <ol className="list">
//         <li className="list">makes code more readable</li>
//         <li className="list">makes project collaboration easier</li>
//         <li className="list">makes code more efficient</li>
//         <li className="list">takes care of complex processes itself</li>
//       </ol>
//     </>
//   );
// }

// export default function Page() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }

///////////////////////////////////
//video solution
// function Header() {
//   return (
//     <header>
//       <nav className="nav">
//         <img src={logo} className="nav-logo" />
//         <ul className="nav-items">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer className="foot">
//       <small>@ 202x zane development. All rights reserved</small>
//     </footer>
//   );
// }

// function MainContent() {
//   return (
//     <>
//       <h1 className="main-title">Reasons I am excited about React</h1>
//       <ol className="ordered-list">
//         <li className="list">makes code more readable</li>
//         <li className="list">makes project collaboration easier</li>
//         <li className="list">makes code more efficient</li>
//         <li className="list">takes care of complex processes itself</li>
//       </ol>
//     </>
//   );
// }

// export default function Page() {
//   return (
//     <>
//       <div className="container">
//         <Header />
//         <MainContent />
//         <Footer />
//       </div>
//     </>
//   );
// }
////////////////////////
//breakin d jsx into various individaul component files

import React from "react";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Header from "./Header";

export default function Page() {
  return (
    <>
      <div className="container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
