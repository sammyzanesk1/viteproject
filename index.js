/*
g

h

5

6

=""

"

=

*/

import { createRoot } from "react-dom/client";

/*
//challenge: create a new h1 element, give it some text content, give it a class name of header, append it as a child of the div #root(main.jsx)

//solution
const h1 = document.createElement("h1");
h1.textContent = "Imperative code style";
h1.className = "header";
document.getElementById("root").append(h1);
*/

//when we create html pages in js d machine returns an object we convert d object to a string object using d append method then we use react create root to render the string object as a readable object or actual html elements in d broswer webpage.

//step 1
const page = (
  <div>
    <h1>My awesome website in React</h1>
    <h3>Reasons I love React</h3>
    <ol>
      <li>composable</li>
      <li>declarative</li>
      <li>hireable skillset</li>
      <li>actively maintained</li>
    </ol>
  </div>
);

//step 2
document.getElementById("root").append(JSON.stringify(page));
console.log(page);

//step 3
createRoot.render(page, document.getElementById("root"));
