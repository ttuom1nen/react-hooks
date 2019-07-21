import React, { useState, useEffect } from "react";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = resource => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(response => setResources(response))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return (
    <ul className="uk-list uk-list-striped">
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
