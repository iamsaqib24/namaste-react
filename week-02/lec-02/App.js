import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { className: "heading"}, "Igniting our App")


function Header() {
    return (
        <div>
            <h1 className="component-heading">Component Header</h1>
        </div>
    )
}



function Page() {
    return (
        <Header />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Page />)
