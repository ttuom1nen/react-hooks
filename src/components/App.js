import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="uk-container uk-container-small uk-position-relative">
      <div>
        <button
          style={{ display: "inline-block", margin: "4px" }}
          className="uk-button uk-button-default"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          style={{ display: "inline-block", margin: "4px" }}
          className="uk-button uk-button-default"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
