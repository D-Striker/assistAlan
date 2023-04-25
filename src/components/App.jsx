import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quote from "./Quote";
import { Quotes } from "./Quotes";
import alanBtn from '@alan-ai/alan-sdk-web';

function App() {

    useEffect(() => {
        alanBtn({
            key: '4b7385dd533bdcbefbedd1fe1dadce152e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
                
              }
            }
        });
      }, []);

  return (
    <div>
      <Header />
      {Quotes.map((quoteItem, index) => {
        return (
          <Quote
            key={index}
            id={index}
            quote={quoteItem.quote}
            author={quoteItem.author}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;