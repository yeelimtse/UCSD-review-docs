# **TCP Three-Way Handshake Explained**
- When a user tries to connect to a website, TCP three-way handshake happens behind the scene. The server side typically refers to the webiste, and client side refers to the user who sends the request.
- **server side** has the following methods
  - socket() - *Note websocket is a new feature in html5*
  - bind()
  - listen()
  - **accept()**
- **client side** has the following methods
  - socket()
  - **connect()**
- In short, client wants to `connect()` to the server, and once server `accept()` the request (note this is a connection request), transferring data is successful. It means that client can send data to the server, such as updating his or her user information, uploading files, sending messages, etc, and also the server can send data to the client, such as displaying images, texts, sending messages, etc. However, before the connection is built, *TCP three-way handshake happens*.
- **In details,**
  - When `connect()` is called by the client, a packet is send by the user. Inside the packet, there are a few things that denote what is the packet used for.
    - **SYN-bit**, stands for synchronize: the type of the packet, meaning this is a request from the client
    - **Sequence number** of value 0, used for authentication
    - `Such process is like asking "Hey, dude, are you there?"`
  - Once the server receives the packet, it returns a packet back to the client. Inside this packet, we have
    - **SYN + ACK**, ACK stands for acknowledgement:
    - **ACK number**, add 1 to sequence number and return back to client
    - `Such process is like answering "Yes, what's up? Who's that?"`
  - Once the client receives the packet sent by the server, the client needs to re-send another packet to tell the server `"I'm the correct person"` or `"I'm the one with authentication"` so that the server will allow this client to access and transfer data. Inside this packet, we have
    - **ACK**, acknowledgement, the type of this packet
    - **Sequence number** of value 1, updated by the client to show that he has passed the authentication
    - **ACK number** of value 1, this is because ACK is updated by the server
    - `Such process is like replying to the server "It's me, Jason, someone passed your identification test"`
  - **NOTE:** The server will eventually receive the 3rd packet sent by the client. If the server finds that the **sequence number** is the same as the **ACK number** (sent by the server in the 2nd packet), then the server will let this client pass. TCP three-way handshake is then success and finished.
  - **Analogy**
    - Let's say the client is called `Jason`, and server is called `Dick`. Jason wants to go to Dick's place and take something he needs. The following conversation is how TCP three-way handshake works.
    - `J: Dude, are you there? Could you please open the door?`
    - `D: Yes, I'm here. Who is this though? Do I know you? I saw you just gave me a number 0, I'm going to add 1 to it, and see if you know how do I get the result.`
    - `J: Oh, I'm your friend Jason. I know how to solve it, simply add 1 to 0. Check!`
    - `D: Oh, yeah! It is you, Jason. Welcome!` (TCP success)
- Then, the client can send **HTTP** request to the server. Technically, the clients are not supposed to transfer data until the authentication is successful, but in reality, this is inefficient. What really happens is that, the data is sent together with the **3rd packet**. The data packet follows the **3rd packet** so once the client passes the test, data will be received by the server immediately.
- When it comes to transfering data, there is a huge difference between **TCP** and **UDP**
  - In TCP
    - When client is requesting data from the server, the client will send another packet, as we discussed above (HTTP request). **Once the server sees the request, it will send whatever data the client needs, PLUS!!! A TCP packet**
    - This TCP packet has type of **ACK**, which means it is used for authentication. More like the server is saying `"I have sent the data to you. Have you received it yet?"`. Denote here the **ACK number** turns from 1 to **2**
    - Once the client receives the data, another TCP packet of type ACK is returned to server, with **sequence number** of 2. More like saying `"Yes, just got it."`
  - In UDP
    - **NONE OF THE AUTHENTICATION HAPPENS**
    - Once the connection is built, neither the client nor the server care about if the other one has received the request or data or not.
  - So TCP is more stable than UDP, but less efficient than UDP. TCP will make sure the other one has received the data by sending ACK packet. UDP never sends ACK packet afterwards.
---
# **TCP Four-Way Handshake Explained**
- When a user no longer needs any data from server, it will call `close()` and tell the server `"Bye, I gotta go"`
- Server will reply `"OK, I got it"`. 
- Meanwhile, returns a packet (**FIN type**) and a data of length 0. This is server also telling the client `"I'm leaving as well"`
- Client will then say `"Bye~"`
- Specifically (c - client, s - server)
  - `c -- FIN: sequence = x + 2, ACK: ACK = y + 1 --> s`
  - `s -- ACK: ACK = x + 3 --> c`
  - `s -- FIN: sequence = y + 1 --> c`
  - `c -- ACK: ACK = y + 2 --> s`

# **What happened behind the scenes when you type in an URL and when the web finishes loading?**
1. The browser will create a thread to deal with your request of this URL. It corresponds to a DNS look up remotely, such that the browser knows what the IP address is.
2. TCP three-way handshake happens to build up the connection between the client and server.
3. Once the connection is built, the browser will send HTTP requests such as `GET` to request resources from server and the server will return the corresponding resources back to user. 200 is a success status code (request successful).
4. The client side starts to download the data and resources.