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


// import React from "react"
// import ReactDOM from "react-dom"

// const element = (
//     <div>
//     {/* <img src="./react-logo.png" width= "40px" /> */}
//     <h1>Fun facts about React</h1>
//     <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Is maintained by Facebook</li>
//         <li>Power thousands of enterprise apps including mobile apps</li>
//     </ul>
//     </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(element)

// Quiz to recap,

// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.


// Learning components, Pascal way

// function FirstComponent() {
//     return (
//         <div>
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Is maintained by Meta(Facebook)</li>
//                 <li>Power thousands of enterprise apps including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<FirstComponent />)


// function Page() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     {/* <img src="./react-logo.png" width="40px" /> */}
//                 </nav>
//             </header>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's a popular library, so I'll be
//                 able to fit in with the cool kids!</li>
//                 <li>I'm more likely to get a job as a developer
//                 if I know React</li>
//             </ol>
//             <footer>
//                 <small>© 2021 Ziroll development. All rights reserved.</small>
//             </footer>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Page />)

// refactoring above code,

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-icon.png" alt="react-icon" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
