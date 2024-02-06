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

export const sortOptions = [
  { label: "Price (lowest)", value: "price-asc" },
  { label: "Price (highest)", value: "price-desc" },
  { label: "A-Z", value: "name-asc" },
  { label: "Z-A ", value: "name-desc" },
];

export const testimonialsData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗",
    star: 5,
    name: "sarah bond",
    isVerified: true,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍",
    star: 5,
    name: " Algistino Lionel ",
    isVerified: true,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    comment:
      "Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. Recommend... 🥰",
    star: 5,
    name: " Siarhei Dzenisenka ",
    isVerified: true,
  },

];

export const heroCategory =[
  {
    id:1,
    title:"Men's",
    img:"https://images.unsplash.com/photo-1530735038726-a73fd6e6a349?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id:2,
    title:"Women's",
    img:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id:3,
    title:"Hoodies",
    img:"https://images.unsplash.com/photo-1542053254535-def95e944232?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
