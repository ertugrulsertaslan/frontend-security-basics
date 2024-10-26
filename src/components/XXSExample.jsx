// src/components/XSSExample.js
/*
  Cross-Site Scripting (XSS) is a type of security vulnerability 
  where an attacker can inject malicious scripts into web pages viewed 
  by other users. These scripts can steal cookies, session tokens, or 
  other sensitive information from the user’s browser.

  This example demonstrates how to handle user input safely to 
  prevent XSS attacks. The component allows users to enter HTML or 
  JavaScript code, which can be displayed in different ways:
  
  1. **Unsafe Display**: Directly renders user input, which can lead 
     to XSS attacks if malicious code is entered.
  2. **Safe Display with DOMPurify**: Uses the DOMPurify library 
     to sanitize the input, removing any malicious scripts.
  3. **Safe Display with HTML Escaping**: Escapes HTML characters to 
     prevent the browser from interpreting any HTML tags or JavaScript 
     code, thus rendering it harmless.
*/

import { useState } from "react";
import DOMPurify from "dompurify";

function XSSExample() {
  const [userInput, setUserInput] = useState("");
  const [output, setOutput] = useState("");

  const text = [
    `<img src="invalid.jpg" onerror="alert('XSS Attempt!')">  [DOMPurify Sanitization]\n
  <a href="javascript:alert('XSS Attempt!')">Click me</a>  [DOMPurify Sanitization]\n
  <b>This is a bold text</b> [HTML Escaping]
  `,
  ];
  const escapeHtml = (unsafe) => {
    return unsafe
      .replace(/&/g, "&amp;") // Convert & to &amp;
      .replace(/</g, "&lt;") // Convert < to &lt;
      .replace(/>/g, "&gt;") // Convert > to &gt;
      .replace(/"/g, "&quot;") // Convert " to &quot;
      .replace(/'/g, "&#039;"); // Convert ' to &#039;
  };

  const handleEscapedDisplay = () => {
    setOutput(escapeHtml(userInput)); // Safely escape HTML
  };

  const handleUnsafeDisplay = () => {
    setOutput(userInput); // Display user input unsafely
  };

  const handleSafeDisplay = () => {
    setOutput(DOMPurify.sanitize(userInput)); // Safely sanitize with DOMPurify
  };

  return (
    <section className="w-full h-full mt-5 p-5 flex flex-col justify-center items-center">
      <h2 className="font-extrabold">XSS Example</h2>
      <h3>These entries are continued by the following texts:</h3>
      <pre className="p-5 mb-5 mt-5 w-full text-center">{text}</pre>
      <input
        className="p-3 w-1/2 border-2 border-black"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter something..."
      />
      <br />
      <button
        className="mb-5 border border-black p-3"
        onClick={handleUnsafeDisplay}
      >
        Display Unsafely
      </button>
      <button
        className="mb-5 border border-black p-3"
        onClick={handleSafeDisplay}
      >
        Display Safely with DOMPurify
      </button>
      <button
        className="mb-5 border border-black p-2"
        onClick={handleEscapedDisplay}
      >
        Display Safely with HTML Escaping
      </button>
      <div className="p-2">
        <div
          className="w-full items-center flex justify-center"
          dangerouslySetInnerHTML={{ __html: output }}
        />
        {output}
      </div>
    </section>
  );
}

export default XSSExample;
