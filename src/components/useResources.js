import { useState, useEffect } from "react";

const useResources = resource => {
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

  return resources;
};

export default useResources;
