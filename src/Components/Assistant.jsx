import React, { useState, useEffect, useContext, useRef } from 'react';
import { Context } from '../App';
import Typed from "typed.js";
import tResume from "../assets/Tanmay'sResume.pdf";
import ResumeString from "../assets/Resume"; // <-- import your ResumeString

function Assistant() {
  const [replyText, setReplyText] = useState('');
  const [messages, setMessages] = useContext(Context);
  const [requestText, setRequestText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const te = useRef(null);

  useEffect(() => {
    const typed = new Typed(te.current, {
      strings: ['Tanmay Chaudhari'],
      typeSpeed: 100,
      loop: true,
      loopCount: 1,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    setReplyText(
      "I'm a Software Engineer with a strong background in AI/ML, full-stack development, and designing scalable cloud systems."
    );
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (requestText.trim() !== '' && !isLoading) {
      setIsLoading(true);
      setReplyText('');

      const userMessage = { role: 'user', content: requestText };
      const fullMessages = [
        {
          role: 'system',
          content: `${ResumeString}\n\nIMPORTANT: Always respond in exactly 50 words or less. Be concise and direct.`
        },
        ...messages,
        {
          role: 'user',
          content: `Answer in exactly 50 words or less: ${requestText}`
        }
      ];

      let finalResponse = '';

      try {
        finalResponse = await query(
          {
            model: "llama-3.1-8b-instant",
            messages: fullMessages,
            stream: true,
            max_tokens: 75,
            temperature: 0.3,
          },
          (chunk) => setReplyText((prev) => prev + chunk)
        );

        setMessages([
          ...messages,
          userMessage,
          { role: 'assistant', content: finalResponse }
        ]);

      } catch (error) {
        console.error("Error:", error);
        setReplyText("Sorry, something went wrong. Please try again!");
      } finally {
        setIsLoading(false);
        setRequestText('');
      }
    }
  };

  async function query(data, onStream) {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${atob(import.meta.env.VITE_APP_HF_API_KEY)}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    if (!response.body) {
      throw new Error("Response body is null");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const events = chunk.split("\n\n");

      for (const event of events) {
        if (event.trim() === "" || !event.startsWith("data:")) continue;

        const jsonString = event.slice(5).trim();
        if (jsonString === "[DONE]") continue;

        try {
          const jsonEvent = JSON.parse(jsonString);
          const content = jsonEvent.choices[0]?.delta?.content;

          if (content) {
            fullText += content;
            onStream(content);
          }
        } catch (error) {
          console.error("Error parsing event chunk:", error, "Chunk:", jsonString);
        }
      }
    }
    return fullText;
  }

  return (
    <div id="About">
      <div>
        <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white text-center pt-24 md:text-5xl lg:text-6xl">
          Hello, I'm <span ref={te} />
        </div>
        <div className="mt-6 text-2xl text-center text-white font-semibold">
          How can I help you today?
        </div>
        <div className="flex justify-center items-center mt-6 flex-wrap">
          <input
            id="chat"
            rows="1"
            className="flex-grow sm:flex-grow-0 w-full sm:w-10/12 md:w-6/12 max-w-xs sm:max-w-md md:max-w-lg p-2.5 text-sm text-gray-900 bg-gray-700 rounded-lg border border-gray-600 focus:ring-0 focus:border-gray-600 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-500 dark:text-white dark:focus:ring-0 dark:focus:border-gray-600"
            placeholder="Ask me anything about Tanmay ..."
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e)}
            style={{ color: 'white', outline: 'none' }}
            disabled={isLoading}
          />
          <button
            type="button"
            className="ml-2 text-white bg-sky-700 hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
            onClick={handleSendMessage}
            disabled={isLoading}
          >
            <svg className="w-5 h-4 my-1 mx-1 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
        <div className="text-center text-white mt-9 text-xl mx-28 lg:text-xl sm:px-16 lg:px-48">
          {replyText || (isLoading && "Thinking...")}
        </div>
        <div className="my-12 justify-center flex space-x-4">
          <button className="text-black rounded bg-sky-500 py-2 px-8 hover:bg-sky-400 font-bold border-b-4 border-blue-700 hover:border-sky-500">
            <a href={tResume} target={"_blank"}>Résumé</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assistant;
