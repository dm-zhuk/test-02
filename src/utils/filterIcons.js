import {
  AC,
  Alcove,
  Automatic,
  FullyIntegrated,
  Kitchen,
  Shower,
  TV,
  Van,
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
