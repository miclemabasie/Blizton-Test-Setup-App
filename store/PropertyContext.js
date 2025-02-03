import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://48ec-102-244-41-17.ngrok-free.app/api/properties"
      );
      console.log("connecting");
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PropertyContext.Provider value={{ properties }}>
      {children}
    </PropertyContext.Provider>
  );
};
