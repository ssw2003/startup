# Bughouse Chess Notes
Elastic IP address replaces public IP address in Amazon Web Services

Learned we need sharp sign for title

Learned that a href thing needs https in it

I have to have the index file in public instead of inside a directory in public

Flex thing has to have in html tag the height declared

I need accordion elements

We need, in a fetch, "response" and "jsonResponse" variables

We have to run npm; it won't work otherwise

We have to declare variable with React and then use the literal setting function to reset variable

We can pass in function as parameter

We must use try catch with database, because it's asynchronous

Port 22 is SSH, and Port 80 is HTTP, and Port 443 is HTTPS

Status codes 300 through 399 are redirection messages

Status codes 400 through 499 are client error responses

Status codes 500 through 599 are server error responses

Passwords should be stored in hashed format

Secure cookie only sent in encrypted channels, over HTTPS. It can't be sent with insecure HTTP outside of local host. HTTP servers can't set this.

"HTTP only" cookie can't be accessed with JavaScript. It can only be accessed when it reaches the server. If a cookie persists user sessions it should have this set.


Domain specifies which server can receive a cookie. Server can set this to itself or a parent domain but can't set it elsewhere. Path means that string must be in the URL to send cookie.

"Same site" cookie is where SameSite is set. It can take 3 values: Strict, Lax, None. Strict means browser only sends cookie because of requests originating from cookie's origin site.

Lax means browser sends cookie if user navigates to origin site.

None means browser sends cookie if XSrequests and origin site requests. If this is set, Secure must be set.

http content-type header tells browser what type of data. That way it can do the data correctly.

JSX-JavaScript XML or maybe JavaScript Syntax extension. JS-JavaScript, AWS-Amazon Web Services, NPM-Node Package Manager, NVM-Node Version Manager

useState allows u to remember state information and update UI when info changes; Regular javascript cant do this; declare state var to update directly;

react hooks r used to enable functional components to use features like state management lifecycle methods and reusable logic

react hooks r used to manage side effects and use states

context hooks-receive info from distant parents without passing it as props; const th = useContext(thCo);

state hooks let thing remember info

ref hooks let thing hold info that isnt used 4 rendering like dom node or timeout id. Updating this doesn't rerender component. const iR = useRef(null);

effect hook lets thing connect to and synchronize with external systems
