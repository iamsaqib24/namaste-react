import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {className: "heading"}, "Practice")



// JSX - this is HTML like syntax but it is not HTML inside javascript. It is a syntax extension to JavaScript.

const heading2 = (
    <>
    <h1 className='heading'>
        Hello JSX
    </h1>
    <p>This is HTML like syntax but it is not HTML inside javascript. It is a syntax extension to JavaScript.</p>
    </>
)



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading2)
