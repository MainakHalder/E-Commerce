import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
 * */

export const products = [
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71evs2WKJjS._SX450_.jpg",
    name: "Acer nitro gaming",
    specification:
      "12th Gen Intel Core Intel Core i5-12500H Processor 15.6-inch (39.62 cms) FHD 144 Hz Gaming Laptop (16 GB RAM/RTX 3050 Graphics/512 GB SSD/Windows 11 Home/2.5 Kgs/RGB Backlit), AN515-58",
    price: 74990,
    rating: 8,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/619Lp1ad9WL._SL1280_.jpg",
    name: "AlienWare aurora gaming",
    specification:
      "Core i9-4TB SSD + 2TB HDD - 64GB RAM - RTX 4090 | 24 Cores @ 5.8 GHz - 13th Gen CPU - 24GB GDDR6X Win 11 Home",
    price: 549990,
    rating: 6,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71+eGgpgZCL._SY355_.jpg",
    name: "Lenovo Legion gaming",
    specification:
      "AMD Ryzen 7 5800/16GB/512GB SSD/2TB HDD/Win11/NVIDIA RTX 3070 8GB GDDR6/Legion ColdFront 2.0 Cooling/ARGB Lighting with 16 Million Colors/Transparent Side Panel",
    price: 143990,
    rating: 3,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/51MDjlZz+wL._SL1000_.jpg",
    name: "Asus Rog gaming",
    specification:
      "AMD Ryzen 7 6800H, 15.6 (39.62 cm) FHD 144Hz, 4GB NVIDIA GeForce RTX 3050 Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Electro Punk/2.1 Kg",
    price: 100990,
    rating: 5,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5520/media-gallery/g15-5520-bk-coralkb/notebook-g-15-5520-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=457&qlt=100,1&resMode=sharp2&size=457,402&chrss=full",
    name: "Dell G-15 gaming",
    specification:
      "R7-6800H, 16GB DDR5, 512GB SSD, NVIDIA RTX 3060 (6GB GDDR6), 15.6 (39.62Cms) FHD WVA AG, 165 Hz 300 nits, Win 11+ MSO'21, 15 Months McAfee, Phantom Grey, 2.51Kgs",
    price: 119000,
    rating: 4,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image:
      "https://img5.gadgetsnow.com/gd/images/products/additional/large/G355700_View_1/computer-laptop/laptops/hp-victus-16-e0301ax-amd-ryzen-5-5600h-16-1-inches-gaming-laptop-8gb-512gb-ssd-windows-11-mica-silver-2-48-kg-.jpg",
    name: "Hp victus gaming",
    specification:
      "12th Gen Intel Core i5-12450H 15.6 inch(39.6 cm) FHD IPS Gaming Laptop(16GB RAM/512GB SSD/NVIDIA GeForce RTX 3050 graphics/144Hz/Backlit KB/B&O/Alexa/Xbox",
    price: 72990,
    rating: 2,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image:
      "https://img5.gadgetsnow.com/gd/images/products/additional/original/G424224_View_1/computer-laptop/laptops/msi-raider-ge77-hx-12uhs-12th-generation-intel-core-i9-12900hx-17-3-inches-gaming-laptop-32gb-2tb-ssd-windows-11-black-2-9-kg-.jpg?_gl=1*ijtv4h*_ga*MzYzODg1OTgxLjE2ODQ4MzcwOTc.*_ga_FCN624MN68*MTY4NDgzNzA5Ny4xLjEuMTY4NDgzNzE1Ny42MC4wLjA.",
    name: "Msi Katana gaming",
    specification:
      "Intel 13th Gen. i7-13620H, 44CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4050, 8GB GDDR6/Black/2.6Kg",
    price: 74990,
    rating: 9,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/71Q54HnKxwS._SX522_.jpg",
    name: "Nintendo switch",
    specification:
      "7-inch OLED screen - Enjoy vivid colors and crisp contrast with a screen that makes colors pop Wired LAN port - Use the dock’s LAN port when playing in TV mode for a wired internet connection 64 GB internal storage - Save games to your system with 64 GB of internal storage",
    price: 31899,
    rating: 7,
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/41d7O1S1H6L._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Sony ps-5",
    specification:
      " Custom 8-core AMD Zen 2. Variable frequency up to 3.5 GHz  16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (for background tasks)  Custom 825 GB ",
    price: 49990,
    rating: 6,
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/41YzPePn9iL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "x-box series s",
    specification:
      "HDD 512GB PCie Gen 4 NVME SSD  Processor Custom 8-core AMD Zen 2 CPU @ 3.8GHz ; Graphics Custom AMD RDNA 2 GPU 20 CUs @ 1.565GHz  RAM 10 GB",
    price: 36428,
    rating: 5,
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/51kzT+QwaOS.jpg",
    name: "Assassin's creed II",
    specification: "Action, Adventure",
    price: 699,
    rating: 7,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/716T8bqBQsL._SX342_.jpg",
    name: "Call of duty black ops",
    specification: "Action",
    price: 899,
    rating: 9,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/91o6fcnfXDL._SY445_.jpg",
    name: "Far cry 3",
    specification: "Action, Adventure",
    price: 399,
    rating: 7,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/81i8aJ3glJL._SY500_.jpg",
    name: "GTA san andreas",
    specification: "Open World",
    price: 599,
    rating: 4,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/41MYq8EhyCS._SX300_SY300_QL70_FMwebp_.jpg",
    name: "HTC vr set",
    specification: "Virtual Reality goggles",
    price: 84999,
    rating: 8,
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/712CzUClvjL._SL1500_.jpg",
    name: "hyperX headphone",
    specification: "headphone",
    price: 4690,
    rating: 5,
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    image: "https://m.media-amazon.com/images/I/21K6JMS8XyS._SY450_.jpg",
    name: "Logitech mouse",
    specification: "Mouse",
    price: 2499,
    rating: 10,
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    image:
      "https://m.media-amazon.com/images/I/41cymW1tLSL._SX300_SY300_QL70_FMwebp_.jpg",
    name: "Zebronics controller",
    specification: "gaming joystick",
    price: 489,
    rating: 2,
    categoryName: "accessories",
  },
];
