import TomatoIcon from "@/app/assets/svgs/TomatoIcon";
import CarrotIcon from "@/app/assets/svgs/CarrotIcon";
import OnionIcon from "@/app/assets/svgs/OnionIcon";
import PepperIcon from "@/app/assets/svgs/PepperIcon";
import MushroomIcon from "@/app/assets/svgs/MushroomIcon";
import OliveIcon from "@/app/assets/svgs/OliveIcon";
import PotatoIcon from "@/app/assets/svgs/PotatoIcon";
import GarlicIcon from "@/app/assets/svgs/GarlicIcon";
import CornIcon from "@/app/assets/svgs/CornIcon";
import EggplantIcon from "@/app/assets/svgs/EggplantIcon";
import BroccoliIcon from "@/app/assets/svgs/BroccoliIcon";
import GingerIcon from "@/app/assets/svgs/GingerIcon";
import PumpkinIcon from "@/app/assets/svgs/PumpkinIcon";
import AvocadoIcon from "@/app/assets/svgs/AvocadoIcon";
import LemonIcon from "@/app/assets/svgs/LemonIcon";
import AppleIcon from "@/app/assets/svgs/AppleIcon";
import PearIcon from "@/app/assets/svgs/PearIcon";
import BananaIcon from "@/app/assets/svgs/BananaIcon";
import WatermelonIcon from "@/app/assets/svgs/WatermelonIcon";
import GrapesIcon from "@/app/assets/svgs/GrapesIcon";
import StrawberryIcon from "@/app/assets/svgs/StrawberryIcon";
import KiwiIcon from "@/app/assets/svgs/KiwiIcon";
import PeachIcon from "@/app/assets/svgs/PeachIcon";
import CherryIcon from "@/app/assets/svgs/CherryIcon";
import PineappleIcon from "@/app/assets/svgs/PineappleIcon";
import MangoIcon from "@/app/assets/svgs/MangoIcon";
import CheeseIcon from "@/app/assets/svgs/CheeseIcon";
import MilkIcon from "@/app/assets/svgs/MilkIcon";
import ButterIcon from "@/app/assets/svgs/ButterIcon";
import BaconIcon from "@/app/assets/svgs/BaconIcon";
import BeefIcon from "@/app/assets/svgs/BeefIcon";
import ChickenIcon from "@/app/assets/svgs/ChickenIcon";
import FishIcon from "@/app/assets/svgs/FishIcon";
import ShrimpIcon from "@/app/assets/svgs/ShrimpIcon";
import SquidIcon from "@/app/assets/svgs/SquidIcon";
import OysterIcon from "@/app/assets/svgs/OysterIcon";
import OctopusIcon from "@/app/assets/svgs/OctopusIcon";
import PeanutIcon from "@/app/assets/svgs/PeanutIcon";
import ChestnutIcon from "@/app/assets/svgs/ChestnutIcon";
import CoffeeBeanIcon from "@/app/assets/svgs/CoffeeBeansIcon";
import BowlRiceIcon from "@/app/assets/svgs/BowlRiceIcon";
import WheatIcon from "@/app/assets/svgs/WheatIcon";
import EggIcon from "@/app/assets/svgs/EggIcon";
import BreadIcon from "@/app/assets/svgs/BreadIcon";
import ChocolateBarIcon from "@/app/assets/svgs/ChocolateIcon";
import IceCubeIcon from "@/app/assets/svgs/IceCubeIcon";
import WaterDropIcon from "@/app/assets/svgs/WaterIcon";
import SaltShakerIcon from "@/app/assets/svgs/Salt";
import SugarIcon from "@/app/assets/svgs/SugarIcon";
import HoneyIcon from "@/app/assets/svgs/HoneyIcon";
import LettuceIcon from "@/app/assets/svgs/LettuceIcon";
import CucumberIcon from "@/app/assets/svgs/CucumberIcon";
import BellPepperIcon from "@/app/assets/svgs/BellPepperIcon";
import OrangeIcon from "@/app/assets/svgs/OrangeIcon";
import BlueberryIcon from "@/app/assets/svgs/BlueberryIcon";
import CoconutIcon from "@/app/assets/svgs/CoconutIcon";
import { FoodTypes, IngredientType } from "../types/ingredients";

export const INGREDIENTS_GROUPS: Record<FoodTypes, IngredientType[]> = {
  vegetables: [
    { value: "tomato", image: <TomatoIcon /> },
    { value: "lettuce", image: <LettuceIcon /> },
    { value: "cucumber", image: <CucumberIcon /> },
    { value: "carrot", image: <CarrotIcon /> },
    { value: "onion", image: <OnionIcon /> },
    { value: "pepper", image: <PepperIcon /> },
    { value: "mushroom", image: <MushroomIcon /> },
    { value: "olive", image: <OliveIcon /> },
    { value: "potato", image: <PotatoIcon /> },
    { value: "garlic", image: <GarlicIcon /> },
    { value: "corn", image: <CornIcon /> },
    { value: "bellPepper", image: <BellPepperIcon /> },
    { value: "eggplant", image: <EggplantIcon /> },
    { value: "broccoli", image: <BroccoliIcon /> },
    { value: "ginger", image: <GingerIcon /> },
    { value: "pumpkin", image: <PumpkinIcon /> },
  ],
  fruits: [
    { value: "avocado", image: <AvocadoIcon /> },
    {
      value: "lemon",
      image: <LemonIcon />,
    },
    { value: "apple", image: <AppleIcon /> },
    { value: "pear", image: <PearIcon /> },
    { value: "orange", image: <OrangeIcon /> },
    { value: "banana", image: <BananaIcon /> },
    { value: "watermelon", image: <WatermelonIcon /> },
    { value: "grapes", image: <GrapesIcon /> },
    { value: "strawberry", image: <StrawberryIcon /> },
    { value: "blueberry", image: <BlueberryIcon /> },
    { value: "kiwi", image: <KiwiIcon /> },
    { value: "coconut", image: <CoconutIcon /> },
    { value: "peach", image: <PeachIcon /> },
    { value: "cherry", image: <CherryIcon /> },
    { value: "pineapple", image: <PineappleIcon /> },
    { value: "mango", image: <MangoIcon /> },
  ],
  dairy: [
    { value: "cheese", image: <CheeseIcon /> },
    { value: "milk", image: <MilkIcon /> },
    { value: "butter", image: <ButterIcon /> },
  ],
  meat: [
    { value: "bacon", image: <BaconIcon /> },
    { value: "beef", image: <BeefIcon /> },
    { value: "chicken", image: <ChickenIcon /> },
  ],
  fish: [
    { value: "fish", image: <FishIcon /> },
    { value: "shrimp", image: <ShrimpIcon /> },
    { value: "squid", image: <SquidIcon /> },
    { value: "oyster", image: <OysterIcon /> },
    { value: "octopus", image: <OctopusIcon /> },
  ],
  nuts: [
    { value: "peanut", image: <PeanutIcon /> },
    { value: "chestnut", image: <ChestnutIcon /> },
    { value: "coffee beans", image: <CoffeeBeanIcon /> },
  ],
  grains: [
    { value: "rice", image: <BowlRiceIcon /> },
    { value: "wheat", image: <WheatIcon /> },
  ],
  other: [
    { value: "egg", image: <EggIcon /> },
    { value: "bread", image: <BreadIcon /> },
    { value: "chocolate", image: <ChocolateBarIcon /> },
    { value: "ice", image: <IceCubeIcon /> },
    { value: "water", image: <WaterDropIcon /> },
    { value: "salt", image: <SaltShakerIcon /> },
    { value: "sugar", image: <SugarIcon /> },
    { value: "honey", image: <HoneyIcon /> },
  ],
};

export function getIconByValue(value: string) {
  const groups = Object.keys(INGREDIENTS_GROUPS);

  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];

    const ingredients =
      INGREDIENTS_GROUPS[group as keyof typeof INGREDIENTS_GROUPS];

    const ingredient = ingredients.find((ing) => ing.value === value);

    if (ingredient) return ingredient.image;
  }

  return null;
}
