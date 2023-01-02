import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {className: "heading"}, "Practice")



// JSX - this is HTML like syntax but it is not HTML inside javascript. It is a syntax extension to JavaScript.

// JSX => React.createElement => Object => HTML(DOM).

// JSX uses React.createElement which gives an object and that object gets converted into html which gets rendered to the DOM.
// Babel converts your jsx to React.createElement

const heading2 = (
    <>
    <h1 className='heading'>
        Hello JSX from React Element
    </h1>
    <p>This is HTML like syntax but it is not HTML inside javascript. It is a syntax extension to JavaScript.
    JSX uses React.createElement which gives an object and that object gets converted into html which gets rendered to the DOM.
    </p>
    </>
)


// React Component
// - Functional  component - New way
// - Class component - Old way


const FunctionalComponent2 = () => (
    <h1 className="heading">Hello from functional-component-2</h1>
)

const FunctionalComponent = () => {
    return (
        <>
            {heading2}
            {FunctionalComponent2()}
            <h1 className="heading">Hello from functional-component</h1>
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<FunctionalComponent />)
