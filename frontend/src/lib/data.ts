import { add } from "date-fns";

export const brandsName = {
  cloths: [
    "Urban Threads",
    "Leisure Loft",
    "EasyBreezy Wear",
    "Street Chic Co.",
    "RelaxRite Apparel",
  ],
  sunglasses: [
    "SunSplash Shades",
    "RadiantRay Eyewear",
    "LuminousLuxe Sunglasses",
    "GlowGaze Optics",
    "SolarStyle Shades",
  ],
  sandals: [
    "ComfortStride Footwear",
    "Barefoot Bliss Sandals",
    "SoleSerenity Shoes",
    "TreadTrend Sandals",
  ],
  bags: ["ChicCraze Handbags", "Elegance Essence Bags", "UrbanGlam Purses"],
  sneakers: [
    "StrideFlex Sneakers",
    "VelocityKicks",
    "UrbanPulse Footwear",
    "ImpactRun Sneakers",
  ],
};

export const collections = [
  "Dresses",
  "Jackets",
  "Pants",
  "Shirt",
  "Jumpsuits & Rompers",
  "Sweater",
  "Outerwear",
];

export const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
export const sizes = ["S", "M", "L", "XL", "XXL"];

export const futureDate = add(new Date(), {
  days: 20,
  hours: 22,
  minutes: 40,
});

export const sortOptions = [{label:'Price (lowest)',value:'price-asc'},{label:'Price (highest)',value:'price-desc'},{label:'A-Z',value:'name-asc'},{label:'Z-A ',value:'name-desc'},]
