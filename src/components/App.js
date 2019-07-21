import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
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
      {resource}
    </div>
  );
};

export default App;
