# What is NPM ?

NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

Every project in JavaScript – whether it's Node.js or a browser application – can be scoped as an npm package with its own package information and its package.json job to describe the project.

We can think of package.json as stamped labels on those npm good boxes that our army of Wombats delivers around.

package.json will be generated when npm init is run to initialise a JavaScript/Node.js project, with these basic metadata provided by developers:

# What is Parcel ? Why do we need it ?

Parcel.js is an open-source bundler. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in: a development server, diagnostics, minification, and even image compression.

A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser.

# what is .parcel-cache ?

The . cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.
