"use client";
import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/typed-events";
function App() {
  console.log("component render");
  const room = 0;
  const [message, setMessage] = useState<string>("");
  const [inbox, setInbox] = useState(["salam", "necesen"]);
  const [socket, setSocket] = useState<
    Socket<DefaultEventsMap, DefaultEventsMap> | undefined
  >(undefined);
  // const [count, setCount] = useState(0);
  //   const socket = io("http://localhost:3008/");
  const sendMessage = () => {
    console.log(message);

    socket?.emit("message", message);
  };

  useEffect(() => {
    console.log("useeeee");
    const socket = io("https://imaginative-melba-guri.koyeb.app/");

    // socket.on("connect", () => {
    //   console.log("Successfully connected!");
    // });

    setSocket(socket);
    return () => {
      console.log("Closing the socket connection.");
      socket.disconnect();
    };
  }, [inbox]);

  socket?.on("message", (message: string) => {
    setInbox([...inbox, message]);
  });

  return (
    <>
      <div>
        <ul>
          {inbox &&
            inbox.map((elem, i) => {
              return <li key={i}>{elem}</li>;
            })}
        </ul>
      </div>
      <div>
        <input onChange={(e) => setMessage(e.target.value)} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <input type="text" />
        <button>Room</button>
      </div>
    </>
  );
}

export default App;
