import React from "react";

import {
  AC,
  Alcove,
  Automatic,
  Bathroom,
  Fridge,
  FullyIntegrated,
  Gas,
  Kitchen,
  Microwave,
  Petrol,
  Radio,
  TV,
  Van,
  Water,
} from "../common/components/icons";

export const vehicleEquipment = [
  { name: "AC", label: "AC", icon: <AC /> },
  { name: "transmission", label: "Automatic", icon: <Automatic /> },
  { name: "kitchen", label: "Kitchen", icon: <Kitchen /> },
  { name: "TV", label: "TV", icon: <TV /> },
  { name: "bathroom", label: "Bathroom", icon: <Bathroom /> },
];

export const vehicleType = [
  { label: "Van", icon: <Van />, value: "panelTruck" },
  {
    label: "Fully Integrated",
    icon: <FullyIntegrated />,
    value: "fullyIntegrated",
  },
  { label: "Alcove", icon: <Alcove />, value: "alcove" },
];

export const badgeIcons = [
  { name: "transmission", label: "Automatic", icon: <Automatic /> },
  { name: "engine", label: "Petrol", icon: <Petrol /> },
  { name: "kitchen", label: "Kitchen", icon: <Kitchen /> },
  { name: "AC", label: "AC", icon: <AC /> },
  { name: "bathroom", label: "Bathroom", icon: <Bathroom /> },
  { name: "water", label: "Water", icon: <Water /> },
  { name: "TV", label: "TV", icon: <TV /> },
  { name: "radio", label: "Radio", icon: <Radio /> },
];

export const featureIcons = [
  { name: "transmission", label: "Transmission", icon: <Automatic /> },
  { name: "engine", label: "Engine", icon: <Petrol /> },
  { name: "kitchen", label: "Kitchen", icon: <Kitchen /> },
  { name: "AC", label: "AC", icon: <AC /> },
  { name: "bathroom", label: "Bathroom", icon: <Bathroom /> },
  { name: "refrigerator", label: "Fridge", icon: <Fridge /> },
  { name: "microwave", label: "Microwave", icon: <Microwave /> },
  { name: "gas", label: "Gas", icon: <Gas /> },
  { name: "water", label: "Water", icon: <Water /> },
  { name: "TV", label: "TV", icon: <TV /> },
  { name: "radio", label: "Radio", icon: <Radio /> },
];
