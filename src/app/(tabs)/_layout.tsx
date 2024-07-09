import { Tabs } from "expo-router";
import "../../global.css"
import React, { useState } from "react";

export default function TabLayout() {
  return (
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            }}  
        />
      </Tabs>
  );
}