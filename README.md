<h1 align="center">SNHU CS 465: Full Stack Development I</h1>
<h2 align="center">Project Details</h2>
<b>Competency</b>
<ul>
  <li>Design the architecture of a web application</li>
  <li>Build a web application using frameworks</li>
  <li>Develop and integrate a database using frameworks</li>
</ul>
<b>Scenario</b>
<br>
You are a software developer working for a software development company. Your supervisor assigned you to build a travel booking website for a new client, Travlr Getaways. The marketing department at Travlr Getaways has provided the specs and a wireframe to guide the development of the website. Your role as a software developer is to produce a fully functional travel web application that meets Travlr Getaways’ requirements:
<br>
<br>
“We are looking to create a travel booking site for our customers to book travel packages. Our customers must be able to create an account, search for travel packages by location and price point, and book reservations with our travel agency. Customers must also be able to visit our website regularly before their trip to see their itineraries. We are also seeking to have an admin-only site where Travlr Getaways administrators are able to maintain a customer base, available trip packages, and pricing for each item and package.”
<br>
<p align="center"><img src="images\Travlr Getaways Logo.png"></p>
<b>Requirements</b>
<ul>
  <li><b>Customer-Facing Website:</b> Develop and run a complex public customer-facing web application that meets software requirements.</li>
  <li><b>MVC Routing:</b> The customer-facing website must be an Express web application with routes, controllers, views, and data models.</li>
  <li><b>Static HTML to Templates with JSON:</b> Utilize the Handlebars templating engine to move the static HTML site to templates to render JSON data dynamically within the application.</li>
  <li><b>NoSQL Database:</b> Configure a NoSQL database using Mongoose for storing data in the server side of the software application.</li>
  <li><b>RESTful API:</b> Integrate RESTful API with a NoSQL database, which is organized using models and schemas with existing software frameworks.</li>
  <li><b>SPA:</b> Utilize frameworks to include rich functionality and features in a SPA to meet software requirements. Use the test data provided and add other examples of tours with dates and other data to test the SPA.</li>
  <li><b>Security:</b> Refactor the code to add security controls, including a login form, and apply best practices to ensure authorized access using secure endpoints.</li>
</ul>
<b>Software Used</b>
<ul>
<li>Node.js</li>
<li>Express</li>
<li>MongoDb</li>
<li>Angular</li>
<li>Visual Studio Code</li>
</ul>

<b>Usage</b>
<p align="center"><b>Customer Facing Pages</b></p>
<table>
<tr>
<th>Main Page</th>
<th>Travel Page</th>
</tr>
<tr>
<th><img src="images\Main Page.png"></th>
<th><img src="images\Travel Page.png"></th>
</tr>
<tr>
<th>Rooms Page</th>
<th>Meals Page</th>
</tr>
<tr>
<th><img src="images\Rooms Page.png"></th>
<th><img src="images\Meals Page.png"></th>
</tr>
</table>
<br>
<p align="center"><b>Admin Single Page Application (SPA)</b></p>

<table>
<tr>
<th>Landing Page</th>
<th>Trip Page Without Authentication</th>
</tr>
<tr>
<th><img src="images\Landing Page.png"></th>
<th><img src="images\TripsNoAuth.png"></th>
</tr>
<tr>
<th>Login Page</th>
<th>Trip Page With Authentication</th>
</tr>
<tr>
<th><img src="images\Login Page.png"></th>
<th><img src="images\TripsWithAuth.png"></th>
</tr>
<tr>
<th>Add Trip Page</th>
<th>Edit Trip Page</th>
</tr>
<tr>
<th><img src="images\AddTrip.png"></th>
<th><img src="images\EditTrip.png"></th>
</tr>
</table>

<h2 align="center">Project Reflection</h2>
<b>Architecture</b>
<ul>
<li>
<i>Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).</i>
<br>
Express.js is a server-side framework for building web applications and APIs, HTML is a markup language for structuring content, JavaScript is a programming language for adding interactivity, and SPAs are a type of web application that uses JavaScript to dynamically update content on a single page. Express.js and SPAs can work together, where Express.js serves as the backend and APIs for an SPA built using JavaScript frameworks.
<br><br>
</li>
<li>
<i>Why did the backend use a NoSQL MongoDB database?</i>
<br>
MongoDB is known for being fast and scaleable.  MongoDB stores documents as binary JSON, which is a Javascript way of holding data, so it works well with the JavaScript used in the MEAN stack. MongoDB also provides drivers and and libraries for many programming languages making it easy to integrate into the backend.

</li>
</ul>

<b>Functionality</b>
<ul>
<li>
<i>How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?</i>
<br>
JSON is a data format while JavaScript is a programming language.  JSON facilitates communication between the frontend and backend.  API endoint responses are frequently formatted in JSON to allow the front end to understand and process the data.
<br><br>
</li>
<li>
<i>Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.</i>
<br>
We utilized handlebars for our customer facing site, which allowed us to enable headers which were universally used and not hard coded into each site.  Schemas were created to seed the data from the static HTML websites to the MongoDB webstite for reusability and so we did not have to manually enter in all of the data.  Reusable UI compnonents allow for a consistent look and behavior accross the application, easier maintenance, scalability, and allows others to understand the code to better to enrich it themselves.
</li>
</ul>

<b>Testing</b>
<ul>
<li>
<i>Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security.  Explain your understanding of methods, endpoints, and security in a full stack application.</i>
<br>
The different methods we used within this application were:<BR>
GET - used to retrieve data from the server.<br>
POST - used to send data to the server.  In this case, our authentication credendials.<br>
PUT - used to update the data within the server.<br>
DELETE - used to remove data from the server.<br>
Endpoints are specific URLs used to represent actions on a server.  In our case, we used trips, and tripCodes.  So the endpoint would look like "/api/trips/{tripCode}".<br>
We used authentication to ensure only registered users to add/edit/delete trips from the customer facing website.  As I was testing the add method, I noticed that my trips would not load if invalid data was entered.  I included input validation through patterns to ensure I was getting correct data.

</li>
</ul>

<b>Reflection</b>
<ul>
<li>
<i>How has this course helped you in reaching your professional goals?</i>
<br>
This has been my first experience with using a fullstack.  Since I am pursing a computer science degree, the skills learned in this course will help me in my professional career.  I am concentrating in data analysis, so the work I did with MongoDB will help as well.
</li>
<br>
<li>
<i>What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?</i>
<br>
I have bettered my skills with identifying what a code is actually doing.  We used a lot of premade code and refactored it.  I would be unable to refactor the code if I didn't understand what it was doing.  Because many of the materials within this course are outdated, it also improved my troubleshooting skills.
</li>
</ul>