import pro1 from "../../assets/pro1.webp";
import pro2 from "../../assets/pro2.webp";
import pro3 from "../../assets/pro3.webp";
import pro4 from "../../assets/pro4.webp";
import pro5 from "../../assets/pro5.webp";
import pro6 from "../../assets/pro6.webp";
import pro7 from "../../assets/pro7.webp";
import pro8 from "../../assets/pro8.webp";
import pro9 from "../../assets/pro9.webp";
import pro10 from "../../assets/pro10.webp";
import pro11 from "../../assets/pro11.webp";
import pro12 from "../../assets/pro12.webp";
import pro13 from "../../assets/pro13.jpg";
import pro14 from "../../assets/pro14.webp";
import pro15 from "../../assets/pro15.webp";

const data = [
  {
    id: 1,
    title: "Wireless Headphones",
    desc: "High-quality wireless headphones with noise cancellation and deep bass.",
    price: 2999,
    category: "Headphones",
    brand: "Sony",
    rating: 4.7,
    stock: 20,
    src: pro1,
    specifications: [
      "Bluetooth 5.0",
      "Active Noise Cancellation",
      "Battery Life: 30 Hours",
      "Fast Charging: 10 mins = 5 hours playtime",
      "Built-in Mic for Calls",
    ],
  },
  {
    id: 2,
    title: "Gaming Monitor",
    desc: "27-inch Full HD gaming monitor with 144Hz refresh rate and ultra-low latency.",
    price: 15999,
    category: "Monitors",
    brand: "Dell",
    rating: 4.5,
    stock: 15,
    src: pro2,
    specifications: [
      "27-inch Full HD Display",
      "144Hz Refresh Rate",
      "1ms Response Time",
      "G-Sync & FreeSync Compatible",
      "HDMI & DisplayPort Support",
    ],
  },
  {
    id: 3,
    title: "True Wireless Earbuds",
    desc: "Compact earbuds with touch controls and crystal-clear sound.",
    price: 1999,
    category: "Earphones",
    brand: "Boat",
    rating: 4.3,
    stock: 30,
    src: pro3,
    specifications: [
      "Bluetooth 5.2",
      "IPX5 Water Resistance",
      "Battery Life: 20 Hours",
      "Fast Charging: 10 mins = 3 hours playtime",
      "Touch Controls & Voice Assistant",
    ],
  },
  {
    id: 4,
    title: "Studio Headphones",
    desc: "Professional over-ear headphones for music production and mixing.",
    price: 4999,
    category: "Headphones",
    brand: "Audio-Technica",
    rating: 4.8,
    stock: 10,
    src: pro4,
    specifications: [
      "40mm Drivers for Accurate Sound",
      "Closed-Back Design for Sound Isolation",
      "Detachable Cable",
      "Frequency Response: 15Hz - 28kHz",
      "Lightweight & Comfortable",
    ],
  },
  {
    id: 5,
    title: "Portable Bluetooth Speaker",
    desc: "Waterproof Bluetooth speaker with powerful bass and long battery life.",
    price: 3499,
    category: "Amplifiers",
    brand: "JBL",
    rating: 4.6,
    stock: 25,
    src: pro5,
    specifications: [
      "Bluetooth 5.1",
      "IPX7 Waterproof",
      "Battery Life: 12 Hours",
      "Dual Passive Radiators for Deep Bass",
      "Built-in Mic for Calls",
    ],
  },
  {
    id: 6,
    title: "USB Audio Interface",
    desc: "Professional-grade USB audio interface for recording and live streaming.",
    price: 8999,
    category: "Amplifiers",
    brand: "Focusrite",
    rating: 4.9,
    stock: 8,
    src: pro6,
    specifications: [
      "2 Mic/Instrument Inputs",
      "24-bit/192kHz Audio Quality",
      "Zero-Latency Monitoring",
      "Compatible with Windows & macOS",
      "Phantom Power for Condenser Mics",
    ],
  },
  {
    id: 7,
    title: "Curved Gaming Monitor",
    desc: "Ultra-wide curved monitor with 165Hz refresh rate for an immersive gaming experience.",
    price: 24999,
    category: "Monitors",
    brand: "Samsung",
    rating: 4.7,
    stock: 12,
    src: pro7,
    specifications: [
      "32-inch Ultra-Wide Curved Display",
      "165Hz Refresh Rate",
      "1ms Response Time",
      "AMD FreeSync Premium",
      "HDR10 Support",
    ],
  },
  {
    id: 8,
    title: "Noise Cancelling Earphones",
    desc: "Premium in-ear earphones with active noise cancellation and high-res audio.",
    price: 5999,
    category: "Earphones",
    brand: "Bose",
    rating: 4.8,
    stock: 18,
    src: pro8,
    specifications: [
      "Active Noise Cancellation",
      "Battery Life: 16 Hours",
      "Customizable Sound Modes",
      "Bluetooth 5.3",
      "IPX4 Water Resistance",
    ],
  },
  {
    id: 9,
    title: "Wireless Gaming Headset",
    desc: "Lag-free wireless gaming headset with surround sound and RGB lighting.",
    price: 7499,
    category: "Headphones",
    brand: "Razer",
    rating: 4.6,
    stock: 20,
    src: pro9,
    specifications: [
      "50mm Drivers for Deep Bass",
      "2.4GHz Wireless Connection",
      "Detachable Noise-Canceling Mic",
      "Surround Sound Support",
      "16.8M RGB Lighting Customization",
    ],
  },
  {
    id: 10,
    title: "Smart LED Monitor",
    desc: "Ultra-thin smart monitor with built-in apps and wireless connectivity.",
    price: 17999,
    category: "Monitors",
    brand: "LG",
    rating: 4.7,
    stock: 14,
    src: pro10,
    specifications: [
      "32-inch Ultra-Thin Display",
      "Built-in Netflix, YouTube & Apps",
      "Wireless Display Connectivity",
      "HDR10 & IPS Panel",
      "Eye Comfort Mode",
    ],
  },
  {
    id: 11,
    title: "Mechanical Keyboard",
    desc: "RGB backlit mechanical keyboard with tactile switches for gamers and programmers.",
    price: 4999,
    category: "Headphones",
    brand: "Corsair",
    rating: 4.7,
    stock: 20,
    src: pro11,
    specifications: [
      "Mechanical Switches",
      "RGB Backlighting",
      "Dedicated Media Controls",
      "Anti-Ghosting & N-Key Rollover",
      "USB Passthrough",
    ],
  },
  {
    id: 12,
    title: "Smartwatch",
    desc: "Advanced smartwatch with fitness tracking, heart rate monitoring, and GPS.",
    price: 7999,
    category: "Earphones",
    brand: "Apple",
    rating: 4.8,
    stock: 25,
    src: pro12,
    specifications: [
      "Retina Display",
      "Heart Rate & SpO2 Monitoring",
      "Built-in GPS",
      "Water Resistant",
      "Sleep Tracking",
    ],
  },
  {
    id: 13,
    title: "4K Action Camera",
    desc: "Ultra HD 4K action camera with waterproof casing and wide-angle lens.",
    price: 10999,
    category: "Amplifiers",
    brand: "GoPro",
    rating: 4.6,
    stock: 18,
    src: pro13,
    specifications: [
      "4K Ultra HD Video",
      "Waterproof up to 30m",
      "Super Wide-Angle Lens",
      "Built-in WiFi & Bluetooth",
      "Slow Motion & Time Lapse Modes",
    ],
  },
  {
    id: 14,
    title: "VR Headset",
    desc: "Immersive VR headset with high-resolution display and 6DoF tracking.",
    price: 24999,
    category: "Earphones",
    brand: "Oculus",
    rating: 4.7,
    stock: 10,
    src: pro14,
    specifications: [
      "High-Resolution OLED Display",
      "6 Degrees of Freedom Tracking",
      "Built-in Audio",
      "Wireless PC Streaming",
      "Adjustable Head Strap",
    ],
  },
  {
    id: 15,
    title: "Wireless Charging Pad",
    desc: "Fast wireless charging pad compatible with multiple devices.",
    price: 2999,
    category: "Amplifiers",
    brand: "Samsung",
    rating: 4.6,
    stock: 30,
    src: pro15,
    specifications: [
      "Fast Wireless Charging",
      "Supports Qi-Compatible Devices",
      "Overheat Protection",
      "LED Charging Indicator",
      "Compact & Portable",
    ],
  },
];

export default data;
