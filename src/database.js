const carouselObjs = [
  {
    id: 1,
    image: "../images/carousel/image-1.jpg",
  },
  {
    id: 2,
    image: "../images/carousel/image-2.jpg",
  },
  {
    id: 3,
    image: "../images/carousel/image-3.jpg",
  },
  {
    id: 4,
    image: "../images/carousel/image-4.jpg",
  },
  {
    id: 5,
    image: "../images/carousel/image-5.jpg",
  },
  {
    id: 6,
    image: "../images/carousel/image-6.jpg",
  },
  {
    id: 7,
    image: "../images/carousel/image-7.jpg",
  },
  {
    id: 8,
    image: "../images/carousel/image-8.jpg",
  },
  {
    id: 9,
    image: "../images/carousel/image-9.jpg",
  },
];

const hotDeals = [{}];

const shoesObjs = [
  {
    id: 1,
    name: "Adidas Trainers",
    image: "../images/shoes/Adidas-Trainers.jpg",
    price: 125,
    sizes: [38, 39, 40, 41, 42],
    sex: "male",
    type: "running",
    brand: "Adidas",
    sale: 0,
    views: 0,
  },
  {
    id: 2,
    name: "Adidas Urban",
    image: "../images/shoes/Urban-Outfiters.jpg",
    price: 300,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    sex: "male",
    type: "high-top",
    brand: "Adidas",
    sale: 0.2,
    views: 2,
  },
  {
    id: 3,
    name: "Adidas Superstar",
    image: "../images/shoes/Adidas-Super-Star.jpg",
    price: 200,
    sizes: [35, 37, 38],
    sex: "female",
    type: "low-top",
    brand: "Adidas",
    sale: 0,
    views: 5,
  },
  {
    id: 4,
    name: "Adidas Triple-Platforum",
    image: "../images/shoes/Adidas-Triple-Platforum.jpg",
    price: 350,
    sizes: [37],
    sex: "female",
    type: "platform",
    brand: "Adidas",
    sale: 0.1,
    views: 10,
  },
  {
    id: 5,
    name: "Nike Downshifter 9",
    image: "../images/shoes/Nike-Downshifter.jpg",
    price: 170,
    sizes: [38, 39, 40, 41, 42],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0.15,
    views: 7,
  },
  {
    id: 6,
    name: "Nike Retro GTS",
    image: "../images/shoes/Nike-Retro-GTS.jpg",
    price: 200,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    sex: "male",
    type: "low-top",
    brand: "Nike",
    sale: 0.7,
    views: 14,
  },
  {
    id: 7,
    name: "Nike Court Vision",
    image: "./../public/images/shoes/Nike-Court-Vision.jpg",
    price: 140,
    sizes: [35, 37, 38, 39, 40, 41, 42, 43],
    sex: "male",
    type: "retro",
    brand: "Nike",
    sale: 0.2,
    views: 3,
  },
  {
    id: 8,
    name: "Nike Air Max",
    image: "./../public/images/shoes/Nike-Air-Max.jpg",
    price: 220,
    sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0.15,
    views: 8,
  },
  {
    id: 9,
    name: "Puma RS-X3",
    image: "./../public/images/shoes/Puma-RS-X3.jpg",
    price: 180,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    sex: "female",
    type: "running",
    brand: "Puma",
    sale: 0,
    views: 2,
  },
  {
    id: 10,
    name: "Puma Cali",
    image: "./../public/images/shoes/Puma-Cali.jpg",
    price: 160,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43],
    sex: "female",
    type: "platform",
    brand: "Puma",
    sale: 0.1,
    views: 6,
  },
  {
    id: 11,
    name: "Reebok Classic",
    image: "./../public/images/shoes/Reebok-Classic.jpg",
    price: 120,
    sizes: [36, 37, 38, 39, 40, 41],
    sex: "male",
    type: "low-top",
    brand: "Reebok",
    sale: 0.3,
    views: 12,
  },
  {
    id: 12,
    name: "Reebok Princess",
    image: "./../public/images/shoes/Reebok-Princess.jpg",
    price: 100,
    sizes: [35, 37, 38, 39, 40],
    sex: "female",
    type: "classic",
    brand: "Reebok",
    sale: 0.2,
    views: 4,
  },
  {
    id: 13,
    name: "Kappa Court",
    image: "./../public/images/shoes/Kappa-Court.jpg",
    price: 90,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    sex: "male",
    type: "skate",
    brand: "Kappa",
    sale: 0.25,
    views: 5,
  },
  {
    id: 14,
    name: "Puma Basket Classic",
    image: "./../public/images/shoes/Puma-Basket-Classic.jpg",
    price: 120,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    sex: "male",
    type: "retro",
    brand: "Puma",
    sale: 0.3,
    views: 8,
  },
  {
    id: 15,
    name: "Reebok Classic Leather",
    image: "./../public/images/shoes/Reebok-Classic-Leather.jpg",
    price: 180,
    sizes: [39, 40, 41, 42, 43, 44],
    sex: "female",
    type: "leather",
    brand: "Reebok",
    sale: 0,
    views: 3,
  },
  {
    id: 16,
    name: "Kappa Gizeh",
    image: "./../public/images/shoes/Kappa-Gizeh.jpg",
    price: 100,
    sizes: [37, 38, 39, 40, 41],
    sex: "male",
    type: "running",
    brand: "Kappa",
    sale: 0,
    views: 2,
  },
  {
    id: 17,
    name: "Vans Slip-On Pro",
    image: "./../public/images/shoes/Vans-Slip-On-Pro.jpg",
    price: 80,
    sizes: [36, 37, 38, 39, 40],
    sex: "female",
    type: "slip-on",
    brand: "Vans",
    sale: 0.4,
    views: 6,
  },
  {
    id: 18,
    name: "Adidas Originals",
    image: "./../public/images/shoes/Adidas-Originals.jpg",
    price: 220,
    sizes: [38, 39, 40, 41, 42, 43],
    sex: "male",
    type: "high-top",
    brand: "Adidas",
    sale: 0.25,
    views: 4,
  },
  {
    id: 19,
    name: "Nike Air Force 1 Shadow",
    image: "./../public/images/shoes/Nike-Air-Force-1-Shadow.jpg",
    price: 280,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    sex: "female",
    type: "platform",
    brand: "Nike",
    sale: 0,
    views: 7,
  },
  {
    id: 20,
    name: "Puma Platform Trace Animal",
    image: "./../public/images/shoes/Puma-Platform-Trace-Animal.jpg",
    price: 160,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42],
    sex: "female",
    type: "platform",
    brand: "Puma",
    sale: 0.25,
    views: 12,
  },
  {
    id: 21,
    name: "Reebok Club C 85 Vintage",
    image: "./../public/images/shoes/Reebok-Club-C-85-Vintage.jpg",
    price: 100,
    sizes: [38, 39, 40, 41, 42],
    sex: "male",
    type: "low-top",
    brand: "Reebok",
    sale: 0,
    views: 9,
  },
  {
    id: 22,
    name: "Vans Classic Slip-On",
    image: "./../public/images/shoes/Vans-Classic-Slip-On.jpg",
    price: 75,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    sex: "male",
    type: "slip-on",
    brand: "Vans",
    sale: 0.15,
    views: 18,
  },
  {
    id: 23,
    name: "Kappa Banda Coen",
    image: "./../public/images/shoes/Kappa-Banda-Coen.jpg",
    price: 90,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    sex: "male",
    type: "retro",
    brand: "Kappa",
    sale: 0.05,
    views: 7,
  },
  {
    id: 24,
    name: "Adidas x Parley Ultraboost 5.0 DNA",
    image: "./../public/images/shoes/Adidas-X-Parley-Ultraboost-5.0-DNA.jpg",
    price: 240,
    sizes: [38, 39, 40, 41, 42],
    sex: "male",
    type: "running",
    brand: "Adidas",
    sale: 0.2,
    views: 14,
  },
  {
    id: 25,
    name: "Nike Air Max 97",
    image: "./../public/images/shoes/Nike-Air-Max-97.jpg",
    price: 190,
    sizes: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0,
    views: 8,
  },
];

export { carouselObjs, shoesObjs };