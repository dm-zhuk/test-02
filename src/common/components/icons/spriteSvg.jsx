import React from "react";

import { AcIconSvg } from "./AcIconSvg";
import { AlcoveIconSvg } from "./AlcoveIconSvg";
import { AutomaticIconSvg } from "./AutomaticIconSvg";
import { CloseIconSvg } from "./CloseIconSvg";
import { FavoriteIconSvg } from "./FavoriteIconSvg";
import { FavoritePressedIconSvg } from "./FavoritePressedIconSvg";
import { FridgeIconSvg } from "./FridgeIconSvg";
import { FullyIntegratedIconSvg } from "./FullyIntegratedIconSvg";
import { GasIconSvg } from "./GasIconSvg";
import { KitchenIconSvg } from "./KitchenIconSvg";
import { LocationIconSvg } from "./LocationIconSvg";
import { MapIconSvg } from "./MapIconSvg";
import { LogoIconSvg } from "./LogoIconSvg";
import { MicrowaveIconSvg } from "./MicrowaveIconSvg";
import { PetrolIconSvg } from "./PetrolIconSvg";
import { RadioIconSvg } from "./RadioIconSvg";
import { ShowerIconSvg } from "./ShowerIconSvg";
import { StarIconSvg } from "./StarIconSvg";
import { TvIconSvg } from "./TvIconSvg";
import { VanIconSvg } from "./VanIconSvg";
import { WaterIconSvg } from "./WaterIconSvg";

const Icon = ({ component: Component }) => <Component />;

// VEHICLE TYPE ICONS
export const AC = () => <Icon component={AcIconSvg} />;
export const Automatic = () => <Icon component={AutomaticIconSvg} />;
export const Kitchen = () => <Icon component={KitchenIconSvg} />;
export const TV = () => <Icon component={TvIconSvg} />;
export const Shower = () => <Icon component={ShowerIconSvg} />;

// VEHICLE EQUIPMENT ICONS
export const Van = () => <Icon component={VanIconSvg} />;
export const FullyIntegrated = () => (
  <Icon component={FullyIntegratedIconSvg} />
);
export const Alcove = () => <Icon component={AlcoveIconSvg} />;

// CARD BADGES ICONS
export const Petrol = () => <Icon component={PetrolIconSvg} />;
export const Fridge = () => <Icon component={FridgeIconSvg} />;
export const Microwave = () => <Icon component={MicrowaveIconSvg} />;
export const Gas = () => <Icon component={GasIconSvg} />;
export const Radio = () => <Icon component={RadioIconSvg} />;
export const Water = () => <Icon component={WaterIconSvg} />;
export const Star = () => <Icon component={StarIconSvg} />;
export const Favorite = () => <Icon component={FavoriteIconSvg} />;
export const FavoritePressed = () => (
  <Icon component={FavoritePressedIconSvg} />
);

// UI ICONS
export const Location = () => <Icon component={LocationIconSvg} />;
export const Map = () => <Icon component={MapIconSvg} />;
export const Close = () => <Icon component={CloseIconSvg} />;
export const Logo = () => <Icon component={LogoIconSvg} />;
