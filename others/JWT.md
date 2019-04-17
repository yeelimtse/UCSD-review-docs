# **JWT - Json Web Token**
- What is JWT?
  - open standard
- Why is it used?
  - To securely transfer information between any two bodies
  - Digitally signed 
    - information is verified and trusted
  - **Compact**
    - JWT can be send through url, POST request, HTTP header
  - Self-contained
    - JWT token itself contains information about the user
    - avoiding query the database more than once
- Why is JWT useful?
  - Authentication
  - Information Exchange
- Structure
  - Header
    - `alg`: algorithm like HMAC SHA256 or RSA
    - `typ`: type of JWT token
    - exmaple
        ```json
        {
            alg: "HMACSHA256",
            typ: "JWT"
        }
        ```
  - Payload
    - Contains claims: *user details or additional metadata*
    - Payload is **`Base64Url`** encoded to form the 2nd part
  - Signature
    - combine base64 header and base64 payload with secrete, combined by **dot**
    - example
        ```json
        HMACSHA256 (
            base64UrlEconde(header)+"."+
            base64UrlEconde(payload),
            secret
        )
        ```
  - **Important**: Signature is valid with exactly the same payload and header data, even one change of the field will cause invalid signature
- How do JWT tokens work?
  - **Browser** POST request to login with credentials
  - **Server** generates JWT via secret and returns to **browser**
  - **Browser** sends the JWT on the Authorization Header
  - **Server** checks JWT signature and get user info
  - **Server** send response to the client