import React, { Fragment } from "react";
import usePolling from "./usePolling";
import ReactDOM from "react-dom";

const ApiPolling = () => {
  const [isPolling, startPolling, stopPolling] = usePolling({
    url: "https://pokeapi.co/api/v2/pokemon?limit=1&offset=1",
    interval: 3000, // in milliseconds(ms)
    retryCount: 3, // this is optional
    onSuccess: (response) => {
      console.log("POKEMON : ", response.results[0].name);
      return true;
    },
    onFailure: () => console.log("handle failure"), // this is optional
    method: "GET"
  });

  return (
    <div className="App">
      {isPolling ? (
        <Fragment>
          <div> API Polling Demo</div>
          <button onClick={stopPolling}>Stop Polling</button>
        </Fragment>
      ) : (
        <Fragment>
          <div> Hello I have stopped polling</div>
          <button onClick={startPolling}>Start Polling</button>
        </Fragment>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ApiPolling />, rootElement);
