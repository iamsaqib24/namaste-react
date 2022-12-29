// ReactDOM.render(
//     <h1>Hello Saqib</h1>,
//     document.getElementById("root")
// )


// ReactDOM.render(
//     <ul>
//         <li>item-1</li>
//         <li>item-2</li>
//     </ul>,
//     document.querySelector("#root")
// )


// Creating first react component,

// function Heading() {
//     return (
//         <h1>Hello, from inside the component.</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Heading />
//     </div>,
//     document.getElementById("root")
// )



// Imperative way of code,

// const h1 = document.createElement("h1")
// h1.textContent = "Imperative way of writing code"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)


// JSX

// const element =  (
//     <div>
//         <h1 className="header">Hello JSX</h1>
//         <p>this is a paragraph.</p>
//     </div>
//     )

// console.log(element); // print object

// ReactDOM.render(element, document.getElementById("root"))

// challenge,

// const navbar = (
//     <nav>
//         <h1>React</h1>
//         <ul>
//             <li>Home</li>
//             <li>Projects</li>
//             <li>Docs</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// const page = (
//     <div>
//         <h1>I am leaning React from Scrimba</h1>
//         <h3>Reasons I'm learning react</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's a most popular js library</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(page)




/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  const element = (
    <div>
    {/* <img src="./react-logo.png" width= "40px" /> */}
    <h1>Fun facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Is maintained by Facebook</li>
        <li>Power thousands of enterprise apps including mobile apps</li>
    </ul>
    </div>
)

ReactDOM.createRoot(document.getElementById("root")).render(element)
