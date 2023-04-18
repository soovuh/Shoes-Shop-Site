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

const hotDeals = [
  {
    id: 6,
    name: "Nike Retro GTS",
    image: "../images/shoes/Nike-Retro-GTS.jpg",
    price: 200,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "low-top",
    brand: "Nike",
    sale: 0.7,
    views: 14,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 10,
    name: "Puma Cali",
    image: "../images/shoes/Puma-Cali.jpg",
    price: 160,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    sex: "female",
    type: "platform",
    brand: "Puma",
    sale: 0.1,
    views: 6,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
    },
  },
  {
    id: 11,
    name: "Reebok Classic",
    image: "../images/shoes/Reebok-Classic.jpg",
    price: 120,
    size: ["36", "37", "38", "39", "40", "41"],
    sex: "male",
    type: "low-top",
    brand: "Reebok",
    sale: 0.3,
    views: 12,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
    },
  },
  {
    id: 14,
    name: "Puma Basket Classic",
    image: "../images/shoes/Puma-Basket-Classic.jpg",
    price: 120,
    size: ["36", "37", "38", "39", "40", "41", "42"],
    sex: "male",
    type: "retro",
    brand: "Puma",
    sale: 0.3,
    views: 8,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 5,
    },
  },
  {
    id: 2,
    name: "Adidas Urban",
    image: "../images/shoes/Urban-Outfiters.jpg",
    price: 300,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "high-top",
    brand: "Adidas",
    sale: 0.2,
    views: 2,
    url: "/product.html",
    createdAt: new Date("2023-03-13"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 7,
    name: "Nike Court Vision",
    image: "../images/shoes/Nike-Court-Vision.jpg",
    price: 140,
    size: ["35", "37", "38", "39", "40", "41", "42", "43"],
    sex: "male",
    type: "retro",
    brand: "Nike",
    sale: 0.2,
    views: 3,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
    },
  },
  {
    id: 8,
    name: "Nike Air Max",
    image: "../images/shoes/Nike-Air-Max.jpg",
    price: 220,
    size: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0.15,
    views: 8,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 17,
    name: "Vans Slip-On Pro",
    image: "../images/shoes/Vans-Slip-On-Pro.jpg",
    price: 80,
    size: ["36", "37", "38", "39", "40"],
    sex: "female",
    type: "slip-on",
    brand: "Vans",
    sale: 0.4,
    views: 6,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
    },
  },
  {
    id: 20,
    name: "Puma Platform Trace",
    image: "../images/shoes/Puma-Platform-Trace-Animal.jpg",
    price: 160,
    size: ["35", "36", "37", "38", "39", "40", "41", "42"],
    sex: "female",
    type: "platform",
    brand: "Puma",
    sale: 0.25,
    views: 12,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 5,
      42: 3,
    },
  },
];

const shoesObjs = [
  {
    id: 1,
    name: "Adidas Trainers",
    image: "../images/shoes/Adidas-Trainers.jpg",
    price: 125,
    size: ["38", "39", "40", "41", "42"],
    sex: "male",
    type: "running",
    brand: "Adidas",
    sale: 0,
    views: 0,
    url: "/product.html",
    createdAt: new Date("2023-03-12"),
    qty: {
      38: 6,
      39: 4,
      40: 3,
      41: 1,
      42: 8,
    },
  },
  {
    id: 2,
    name: "Adidas Urban",
    image: "../images/shoes/Urban-Outfiters.jpg",
    price: 300,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "high-top",
    brand: "Adidas",
    sale: 0.2,
    views: 2,
    url: "/product.html",
    createdAt: new Date("2023-03-13"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 3,
    name: "Adidas Superstar",
    image: "../images/shoes/Adidas-Super-Star.jpg",
    price: 200,
    size: ["35", "37", "38"],
    sex: "female",
    type: "low-top",
    brand: "Adidas",
    sale: 0,
    views: 5,
    url: "/product.html",
    createdAt: new Date("2023-03-11"),
    qty: {
      35: 2,
      37: 5,
      38: 3,
    },
  },
  {
    id: 4,
    name: "Adidas Triple-Platforum",
    image: "../images/shoes/Adidas-Triple-Platforum.jpg",
    price: 350,
    size: ["37"],
    sex: "female",
    type: "platform",
    brand: "Adidas",
    sale: 0.1,
    views: 10,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      37: 2,
    },
  },
  {
    id: 5,
    name: "Nike Downshifter 9",
    image: "../images/shoes/Nike-Downshifter.jpg",
    price: 170,
    size: ["38", "39", "40", "41", "42"],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0.15,
    views: 7,
    url: "/product.html",
    createdAt: new Date("2023-03-18"),
    qty: {
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
    },
  },
  {
    id: 6,
    name: "Nike Retro GTS",
    image: "../images/shoes/Nike-Retro-GTS.jpg",
    price: 200,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "low-top",
    brand: "Nike",
    sale: 0.7,
    views: 14,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 7,
    name: "Nike Court Vision",
    image: "../images/shoes/Nike-Court-Vision.jpg",
    price: 140,
    size: ["35", "37", "38", "39", "40", "41", "42", "43"],
    sex: "male",
    type: "retro",
    brand: "Nike",
    sale: 0.2,
    views: 3,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
    },
  },
  {
    id: 8,
    name: "Nike Air Max",
    image: "../images/shoes/Nike-Air-Max.jpg",
    price: 220,
    size: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0.15,
    views: 8,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 9,
    name: "Puma RS-X3",
    image: "../images/shoes/Puma-RS-X3.jpg",
    price: 180,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "female",
    type: "running",
    brand: "Puma",
    sale: 0,
    views: 2,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 10,
    name: "Puma Cali",
    image: "../images/shoes/Puma-Cali.jpg",
    price: 160,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43"],
    sex: "female",
    type: "platform",
    brand: "Puma",
    sale: 0.1,
    views: 6,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
    },
  },
  {
    id: 11,
    name: "Reebok Classic",
    image: "../images/shoes/Reebok-Classic.jpg",
    price: 120,
    size: ["36", "37", "38", "39", "40", "41"],
    sex: "male",
    type: "low-top",
    brand: "Reebok",
    sale: 0.3,
    views: 12,
    url: "/product.html",
    createdAt: new Date("2023-03-19"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
    },
  },
  {
    id: 12,
    name: "Reebok Princess",
    image: "../images/shoes/Reebok-Princess.jpg",
    price: 100,
    size: ["35", "37", "38", "39", "40"],
    sex: "female",
    type: "classic",
    brand: "Reebok",
    sale: 0.2,
    views: 4,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
    },
  },
  {
    id: 13,
    name: "Kappa Court",
    image: "../images/shoes/Kappa-Court.jpg",
    price: 90,
    size: ["35", "36", "37", "38", "39", "40", "41"],
    sex: "male",
    type: "skate",
    brand: "Kappa",
    sale: 0.25,
    views: 5,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
    },
  },
  {
    id: 14,
    name: "Puma Basket Classic",
    image: "../images/shoes/Puma-Basket-Classic.jpg",
    price: 120,
    size: ["36", "37", "38", "39", "40", "41", "42"],
    sex: "male",
    type: "retro",
    brand: "Puma",
    sale: 0.3,
    views: 8,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 5,
    },
  },
  {
    id: 15,
    name: "Reebok Classic Leather",
    image: "../images/shoes/Reebok-Classic-Leather.jpg",
    price: 180,
    size: ["39", "40", "41", "42", "43", "44"],
    sex: "female",
    type: "leather",
    brand: "Reebok",
    sale: 0,
    views: 3,
    url: "/product.html",
    createdAt: new Date("2023-03-17"),
    qty: {
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
    },
  },
  {
    id: 16,
    name: "Kappa Gizeh",
    image: "../images/shoes/Kappa-Gizeh.jpg",
    price: 100,
    size: ["37", "38", "39", "40", "41"],
    sex: "male",
    type: "running",
    brand: "Kappa",
    sale: 0,
    views: 2,
    url: "/product.html",
    createdAt: new Date("2023-03-17"),
    qty: {
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
    },
  },
  {
    id: 17,
    name: "Vans Slip-On Pro",
    image: "../images/shoes/Vans-Slip-On-Pro.jpg",
    price: 80,
    size: ["36", "37", "38", "39", "40"],
    sex: "female",
    type: "slip-on",
    brand: "Vans",
    sale: 0.4,
    views: 6,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
    },
  },
  {
    id: 18,
    name: "Adidas Originals",
    image: "../images/shoes/Adidas-Originals.jpg",
    price: 220,
    size: ["38", "39", "40", "41", "42", "43"],
    sex: "male",
    type: "high-top",
    brand: "Adidas",
    sale: 0.25,
    views: 4,
    url: "/product.html",
    createdAt: new Date("2023-03-17"),
    qty: {
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 5,
    },
  },
  {
    id: 19,
    name: "Nike Air Force 1 Shadow",
    image: "../images/shoes/Nike-Air-Force-1-Shadow.jpg",
    price: 280,
    size: ["35", "36", "37", "38", "39", "40", "41"],
    sex: "female",
    type: "platform",
    brand: "Nike",
    sale: 0,
    views: 7,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
    },
  },
  {
    id: 20,
    name: "Puma Platform Trace",
    image: "../images/shoes/Puma-Platform-Trace-Animal.jpg",
    price: 160,
    size: ["35", "36", "37", "38", "39", "40", "41", "42"],
    sex: "female",
    type: "platform",
    brand: "Puma",
    sale: 0.25,
    views: 12,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 5,
      42: 3,
    },
  },
  {
    id: 21,
    name: "Reebok Club C 85 Vintage",
    image: "../images/shoes/Reebok-Club-C-85-Vintage.jpg",
    price: 100,
    size: ["38", "39", "40", "41", "42"],
    sex: "male",
    type: "low-top",
    brand: "Reebok",
    sale: 0,
    views: 9,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      38: 1,
      39: 6,
      40: 7,
      41: 5,
      42: 3,
    },
  },
  {
    id: 22,
    name: "Vans Classic Slip-On",
    image: "../images/shoes/Vans-Classic-Slip-On.jpg",
    price: 75,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "slip-on",
    brand: "Vans",
    sale: 0.15,
    views: 18,
    url: "/product.html",
    createdAt: new Date("2023-03-17"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 23,
    name: "Kappa Banda Coen",
    image: "../images/shoes/Kappa-Banda-Coen.jpg",
    price: 90,
    size: ["39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "retro",
    brand: "Kappa",
    sale: 0.05,
    views: 7,
    url: "/product.html",
    createdAt: new Date("2023-03-17"),
    qty: {
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 24,
    name: "Adidas x Parley Ultraboost 5.0",
    image: "../images/shoes/Adidas-X-Parley-Ultraboost-5.0-DNA.jpg",
    price: 240,
    size: ["38", "39", "40", "41", "42"],
    sex: "male",
    type: "running",
    brand: "Adidas",
    sale: 0.2,
    views: 14,
    url: "/product.html",
    createdAt: new Date("2023-03-16"),
    qty: {
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
  {
    id: 25,
    name: "Nike Air Max 97",
    image: "../images/shoes/Nike-Air-Max-97.jpg",
    price: 190,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0,
    views: 8,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
  },
];

const cartExample = [
  {
    id: 23,
    name: "Kappa Banda Coen",
    image: "../images/shoes/Kappa-Banda-Coen.jpg",
    price: 90,
    size: ["39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "retro",
    brand: "Kappa",
    sale: 0.05,
    views: 7,
    url: "/product.html",
    createdAt: new Date("2023-03-17"),
    qty: {
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
    userSize: "41",
    userQty: 1,
  },
  {
    id: 24,
    name: "Adidas x Parley Ultraboost 5.0",
    image: "../images/shoes/Adidas-X-Parley-Ultraboost-5.0-DNA.jpg",
    price: 240,
    size: ["38", "39", "40", "41", "42"],
    sex: "male",
    type: "running",
    brand: "Adidas",
    sale: 0.2,
    views: 14,
    url: "/product.html",
    createdAt: new Date("2023-03-16"),
    qty: {
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
    userSize: "39",
    userQty: 1,
  },
  {
    id: 25,
    name: "Nike Air Max 97",
    image: "../images/shoes/Nike-Air-Max-97.jpg",
    price: 190,
    size: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    sex: "male",
    type: "running",
    brand: "Nike",
    sale: 0,
    views: 8,
    url: "/product.html",
    createdAt: new Date("2023-03-15"),
    qty: {
      35: 8,
      36: 2,
      37: 5,
      38: 1,
      39: 6,
      40: 7,
      41: 4,
      42: 3,
      43: 9,
      44: 10,
      45: 3,
    },
    userSize: "42",
    userQty: 1,
  },
];

export { carouselObjs, shoesObjs, hotDeals, cartExample };
