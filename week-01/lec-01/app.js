const haeding = React.createElement("h1", { className: "heading-1", id: "main-heading"}, "Hello World!");

const haeding2 = React.createElement("h2", {}, "JavaScript");

const haeding3 = React.createElement("h3", {}, "React");

console.log(haeding)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([haeding, haeding2, haeding3]);

root.render(haeding)
