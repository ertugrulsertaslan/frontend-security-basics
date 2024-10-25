// src/components/CSRFExample.js

/*
  Cross-Site Request Forgery (CSRF) is a type of attack where an 
  unauthorized command is transmitted from a user that the web application 
  trusts. This can happen when a user is tricked into clicking a link 
  or visiting a malicious website while being logged into another site. 
  For example, if a user is authenticated on a banking website and 
  clicks on a link from a malicious site, that link could perform actions 
  on the bank's site without the user's consent.
  
  This example simulates a CSRF attack by making a POST request to 
  a protected endpoint without proper CSRF protection. In a real-world 
  application, it's crucial to implement CSRF protection mechanisms 
  such as CSRF tokens to ensure that requests come from legitimate sources.
*/

import { useState } from "react";

function CSRFExample() {
  const [message, setMessage] = useState(""); // State to hold the message

  const simulateCSRF = () => {
    // Simulating a CSRF attack by making a POST request
    fetch("https://example.com/api/protected-endpoint", {
      method: "POST", // Request type: POST
      credentials: "include", // Include cookies for authentication
      headers: {
        "Content-Type": "application/json", // Specify content type
      },
      body: JSON.stringify({ data: "sample data" }), // Data to be sent
    })
      .then((response) => {
        if (response.ok) {
          setMessage(
            "CSRF request sent successfully! This is a simulated attack."
          ); // Success message
        } else {
          setMessage(
            "CSRF request failed. The server did not accept the request."
          ); // Failure message
        }
      })
      .catch((error) => {
        setMessage(
          "CSRF request failed. The server did not accept the request. " +
            error.message
        ); // Error message
      });
  };

  return (
    <section className="bg-black text-white p-5 w-full flex flex-col justify-center items-center">
      <h2 className="font-extrabold">CSRF Example</h2>
      <button
        className="bg-red-500 text-white p-2 rounded"
        onClick={simulateCSRF}
      >
        Simulate CSRF Request
      </button>
      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}

export default CSRFExample;
