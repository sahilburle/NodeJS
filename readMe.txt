Basic codes of Node JS

*) Express is a node js web application framework that provides broad features for building web and mobile applications.
    It is used to build a single page, multipage, and hybrid web application.
    It's a layer built on the top of the Node js that helps manage servers and routes.

*) Typically all middlewares in nodejs/expressjs have access to request, response and next objects.
    A request is something that's coming from a browser that invokes a particular function to perform certain tasks and return a response.
    “A particular function” in this case is a middleware.

*) Static files are typically files such as scripts, CSS files, images, etc.
    that aren't server-generated, but must be sent to the browser when requested.
    If node. js is your web server, it does not serve any static files by default,
    you must configure it to serve the static content you want it to serve.

*) js Query String. The Query String module used to provides utilities for parsing and formatting URL query strings.
    It can be used to convert query string into JSON object and vice-versa.
    The Query String is the part of the URL that starts after the question mark(?).

*) Partials are basically just views that are designed to be used from within other views.
    They are particularly useful for reusing the same markup between different views,
    layouts, and even other partials. <%- partial('./partials/navbar.ejs') %>

*) Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js.
    It manages relationships between data, provides schema validation, and is used to translate
    between objects in code and the representation of those objects in MongoDB

*) Body-parser is the Node. js body parsing middleware.
    It is responsible for parsing the incoming request bodies in a middleware before you handle it.