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
    image : "/my-app/images/laptop-pc/Acer nitro gaming.jpg",
    name : "Acer nitro gaming",
    specification : "12th Gen Intel Core Intel Core i5-12500H Processor 15.6-inch (39.62 cms) FHD 144 Hz Gaming Laptop (16 GB RAM/RTX 3050 Graphics/512 GB SSD/Windows 11 Home/2.5 Kgs/RGB Backlit), AN515-58",
    price : 74990,
    rating : 4,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/laptop-pc/Alienware aurora gaming.jpg",
    name : "AlienWare aurora gaming",
    specification : "Core i9-4TB SSD + 2TB HDD - 64GB RAM - RTX 4090 | 24 Cores @ 5.8 GHz - 13th Gen CPU - 24GB GDDR6X Win 11 Home",
    price : 549990,
    rating : 5,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/laptop-pc/Lenovo Legion gaming.jpg",
    name : "Lenovo Legion gaming",
    specification : "AMD Ryzen 7 5800/16GB/512GB SSD/2TB HDD/Win11/NVIDIA RTX 3070 8GB GDDR6/Legion ColdFront 2.0 Cooling/ARGB Lighting with 16 Million Colors/Transparent Side Panel",
    price : 143990,
    rating : 3,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/laptop-pc/Asus Rog gaming.jpg",
    name : "Asus Rog gaming",
    specification : "AMD Ryzen 7 6800H, 15.6 (39.62 cm) FHD 144Hz, 4GB NVIDIA GeForce RTX 3050 Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Electro Punk/2.1 Kg",
    price : 100990,
    rating : 4,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/laptop-pc/Dell G-15 gaming.jpg",
    name : "Dell G-15 gaming",
    specification : "R7-6800H, 16GB DDR5, 512GB SSD, NVIDIA RTX 3060 (6GB GDDR6), 15.6 (39.62Cms) FHD WVA AG, 165 Hz 300 nits, Win 11+ MSO'21, 15 Months McAfee, Phantom Grey, 2.51Kgs",
    price : 119000,
    rating : 4,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/laptop-pc/Hp victus gaming.jpg",
    name : "Hp victus gaming",
    specification : "12th Gen Intel Core i5-12450H 15.6 inch(39.6 cm) FHD IPS Gaming Laptop(16GB RAM/512GB SSD/NVIDIA GeForce RTX 3050 graphics/144Hz/Backlit KB/B&O/Alexa/Xbox",
    price : 72990,
    rating : 2,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/laptop-pc/Msi Katana gaming.jpg",
    name : "Msi Katana gaming",
    specification : "Intel 13th Gen. i7-13620H, 44CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX4050, 8GB GDDR6/Black/2.6Kg",
    price : 74990,
    rating : 5,
    categoryName: "laptop-pc",
  },
  {
    _id: uuid(),
    image : "/my-app/images/consoles/Nintendo switch.jpg",
    name : "Nintendo switch",
    specification : "7-inch OLED screen - Enjoy vivid colors and crisp contrast with a screen that makes colors pop Wired LAN port - Use the dock’s LAN port when playing in TV mode for a wired internet connection 64 GB internal storage - Save games to your system with 64 GB of internal storage",
    price : 31899,
    rating : 3,
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    image : "/my-app/images/consoles/Sony ps-5.jpg",
    name : "Sony ps-5",
    specification : " Custom 8-core AMD Zen 2. Variable frequency up to 3.5 GHz  16 GB/256-bit GDDR6 SDRAM 512 MB DDR4 RAM (for background tasks)  Custom 825 GB ",
    price : 49990,
    rating : 5,
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    image : "/my-app/images/consoles/x-box series s.jpg",
    name : "x-box series s",
    specification : "HDD 512GB PCie Gen 4 NVME SSD  Processor Custom 8-core AMD Zen 2 CPU @ 3.8GHz ; Graphics Custom AMD RDNA 2 GPU 20 CUs @ 1.565GHz  RAM 10 GB",
    price : 36428,
    rating : 4,
    categoryName: "consoles",
  },
  {
    _id: uuid(),
    image : "/my-app/images/CD-games/Assassin's creed II.jpg",
    name : "Assassin's creed II",
    specification : "Action, Adventure",
    price : 699,
    rating : 3,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image : "/my-app/images/CD-games/Call of duty black ops.jpg",
    name : "Call of duty black ops",
    specification : "Action",
    price : 899,
    rating : 4,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image : "/my-app/images/CD-games/Far cry 3.jpg",
    name : "Far cry 3",
    specification : "Action, Adventure",
    price : 399,
    rating : 3,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image : "/my-app/images/CD-games/GTA san andreas.jpg",
    name : "GTA san andreas",
    specification : "Open World",
    price : 599,
    rating : 4,
    categoryName: "CD-games",
  },
  {
    _id: uuid(),
    image : "/my-app/images/accessories/HTC vr set.jpg",
    name : "HTC vr set",
    specification : "Virtual Reality goggles",
    price : 84999,
    rating : 3,
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    image : "/my-app/images/accessories/hyperX headphone.jpg",
    name : "hyperX headphone",
    specification : "headphone",
    price : 4690,
    rating : 3,
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    image : "/my-app/images/accessories/Logitech mouse.jpg",
    name : "Logitech mouse",
    specification : "Mouse",
    price : 2499,
    rating : 5,
    categoryName: "accessories",
  },
  {
    _id: uuid(),
    image : "/my-app/images/accessories/Zebronics controller.jpg",
    name : "Zebronics controller",
    specification : "gaming joystick",
    price : 489,
    rating : 4,
    categoryName: "accessories",
  }
];
