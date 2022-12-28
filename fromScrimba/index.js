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

const h1 = document.createElement("h1")
h1.textContent = "Imperative way of writing code"
h1.className = "header"
document.getElementById("root").appendChild(h1)
