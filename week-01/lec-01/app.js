const heading = React.createElement("h1", { className: "heading-1", id: "main-heading" }, "Hello World!");

const heading2 = React.createElement("h2", { id: "heading-2" }, "JavaScript");

const heading3 = React.createElement("h3", { id: "heading-3" }, "React");

const container = React.createElement("div", { id: "container" }, [heading, heading2, heading3]);

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([haeding, haeding2, haeding3]);

root.render(container);
