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

function Card() {
    return (
        <div className="card">
            <img src="./katie-zaferes.png" alt="" className="card--image"/>
            <div className="card--stats">
                <img src="./star.png" alt="" className="card--star" />
                <span>5.0</span>
                <span className="gray" >(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

function Contact(props) {
    return (
        <div className="contact-card">
            <img src="./mr-whiskerson.png"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}


function Page() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
            <Contact name="Mr. Saqib"
                     phone="7888787228"
                     email="iamsaqib24@gmail.com" />
            <Contact name="Mr. Apple"
                     phone="9814559880"
                     email="abc@abc.com" />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
