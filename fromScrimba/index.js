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

const navbar = (
    <nav>
        <h1>React</h1>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Docs</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const page = (
    <div>
        <h1>I am leaning React from Scrimba</h1>
        <h3>Reasons I'm learning react</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
        </ol>
    </div>
)

// ReactDOM.render(navbar, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)
