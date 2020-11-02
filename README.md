# NodeJS-Blog
INTRODUCTION

SHARE is a public markdown blogging website where anybody can write their thoughts on a particular topic and tech knowledge by writing articles. It has a feature to edit at any point of time. All articles are editable and removable. Anybody can edit an article and delete one. We can add headlines in an article.

TECHNOLOGIES and FRAMEWORKS

I have used technologies like Nodejs, ejs, Express, MongoDB, CSS, Bootstrap, Slugify, JSDOM, Method-override, Marked and dompurify.

NodeJS:
It is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v14.13.0. Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
So, basically Node.js = Runtime Environment + JavaScript Library.

EJS: 
It is a simple templating language that lets anyone generate HTML markup with plain JavaScript. EJS stands for Embedded JavaScript templating which is used to acquire fast development, simple syntax, speed execution, easy debugging, active development.There are many good features given by ejs like fast compilation and rendering, simple template tags, ships with CLI and compiles with the Express view system etc.

Express:
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

MongoDB:
MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. It helps in storing required or saved data.



CSS:
CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.

Bootstrap:
Bootstrap is a CSS framework used mainly to build responsive websites which has predefined styling classes which gives us the required styling without writing lots of styling code lines.

Slugify: 
To remove the ugly ids given automatically to each article and use the title in the url created when clicked on the read more button. It is directly given in the models so that it automatically works for every article created.

JSDOM:
JSDOM is a library which parses and interacts with assembled HTML just like a browser. The benefit to JSDOM is that it isn’t actually a browser. Instead, it implements web standards like browsers do. You can feed it some HTML, and it will parse that HTML. basically used to render HTML code inside Nodejs.

Method-Override:
Method-override is used to create a new method just like methods GET and POST. I used method override to create a method DELETE to delete an article and PUT to edit an article.

Marked:
This is a package that can be used to parse markdown into html. In addition to the usual use case of parsing to html, it is possible to define a custom renderer that can be used to render out plain text, or some other standard other than html.

Dompurify:
This package is used to sanitize the html so that users can’t add malicious code into the article.
