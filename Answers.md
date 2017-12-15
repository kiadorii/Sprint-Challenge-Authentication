<!-- Answers to the Short Answer Essay Questions go here -->
## Answers.md
1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    * Middleware:   A chained functionality with the ability to craft a function and apply it to certain requests.
                    The sit between the route-handler and the client.
    * Sessions:     A record created and stored in our database.
                    Helps for keeping users logged in or authenticated when they 'move' on or do something like refresh a page.
    * bcrypt:        A secure operating system for security and usability.
                    It is a password hashing function and incorporates a salt to protect against rainbow table attacks.
    * JWT:          Also known as JSON Web Tokens and are useful in reaching as many clients since they are less burdensome on the servers.
                    It is a token from their server that the client persists locally through localStorage typically.
                    It is responsible for maintaining the session state.
                
2. What does bcrypt do in order to prevent attacks?
    * It extends the time it takes to hash which elongates the time it would take an attacker to attempt to solve it.

3. What are the three parts of the JSON Web Token?
    * The three parts of the JSON Web Tokens are the Header, Payload, and Signature.