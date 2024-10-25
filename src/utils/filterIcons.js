import {
  AC,
  Alcove,
  Automatic,
  Close,
  Favorite,
  Fridge,
  FullyIntegrated,
  Gas,
  Kitchen,
  Location,
  Logo,
  Microwave,
  Petrol,
  Radio,
  Shower,
  Star,
  TV,
  Van,
  Water,
} from "../common/components/icons/icons";

export const vehicleEquipment = [
  { name: "AC", label: "AC", icon: <AC /> },
  { name: "automatic", label: "Automatic", icon: <Automatic /> },
  { name: "kitchen", label: "Kitchen", icon: <Kitchen /> },
  { name: "TV", label: "TV", icon: <TV /> },
  { name: "bathroom", label: "Bathroom", icon: <Shower /> },
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

export const iconsOnCard = {
  transmission: <Automatic />,
  engine: <Petrol />,
  kitchen: <Kitchen />,
  AC: <AC />,
  TV: <TV />,
  radio: <Radio />,
  water: <Water />,
  bathroom: <Shower />,
  microwave: <Microwave />,
  refrigerator: <Fridge />,
  gas: <Gas />,
};
