import React from "react";
import { View } from "react-native";

import { DINE, RETAIL, SERVICE, SHOP } from "../../service/imageservices";
import Homepage from "./Homecard";

const YourParentComponent = () => {
  const data = [
    {
      title: "DINE",
      image: "E:React-Nativecrop_mobileassetsDINE (2).png",
    },
    
    {
      title: "SERVICE",
      image: "E:React-Nativecrop_mobileassetsservice.png",
    },

    {
      title: "SHOP",
      image: "E:React-Nativecrop_mobileassetsshop.png",
    },

    { title: "RETAIL", 
    image: "E:React-Nativecrop_mobileassets\retail.png" 
    },
  ];

  return (
    <View>
      <Homepage data={data} />
    </View>
  );
};

export default YourParentComponent;
