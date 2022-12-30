// const heading = React.createElement("h1", { className: "main-heading" }, "Hello AirBnb")

function Navbar() {
    return (
        <nav>
            <img src="./airbnb-logo.png" alt="airbnb-logo" className="nav--logo" />
        </nav>
    )
}

function Hero() {
    return (
        <section className="hero" >
            <img src="./photo-grid.png" alt="" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}


function Page() {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
