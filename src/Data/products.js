// Product data for clothing items

// Helper to generate stock object for all size/color combos
function generateStock(sizes, colors, defaultQty = 10) {
  const stock = {};
  sizes.forEach(size => {
    stock[size] = {};
    colors.forEach(color => {
      // stock[size][color] = defaultQty;
      // Generate a random stock quantity between 0 and defaultQty
        stock[size][color] = Math.floor(Math.random() * (defaultQty + 1));
    });
  });
  return stock;
}

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    description: "100% cotton, unisex classic t-shirt.",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1660936764409-4da65828b4f8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1662630398743-ebbe859187d7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1654432007491-8c97c473a7b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1666358085449-a10a39f33942?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    discount: 50, // 50% discount
    stock: generateStock(["S", "M", "L", "XL"], ["Black", "White", "Blue"]),
    productCare: [
      "Machine wash cold with like colors.",
      "Do not bleach.",
      "Tumble dry low or hang dry.",
      "Iron on low if needed."
    ],
    reviews: [
      {
        reviewer: "Jane Doe",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        title: "Super comfortable!",
        body: "Absolutely love this t-shirt. It's soft and fits perfectly.",
        date: "2025-07-01"
      },
      {
        reviewer: "Mike Smith",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        rating: 4,
        title: "Great value",
        body: "The price with the discount is unbeatable. Happy with my purchase.",
        date: "2025-06-28"
      }
    ]
  },
  {
    id: 2,
    name: "Denim Jeans",
    description: "Slim fit, stretch denim jeans.",
    price: 49.99,
    images: [
      "https://images.unsplash.com/photo-1713880442898-0f151fba5e16?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1621059591080-d5db06386b53?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    discount: 20, // 20% discount
    stock: generateStock(["28", "30", "32", "34", "36"], ["Blue", "Black"], 5),
    productCare: [
      "Wash inside out in cold water.",
      "Do not bleach.",
      "Tumble dry low or line dry.",
      "Iron on medium heat."
    ],
    reviews: [
      {
        reviewer: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 4,
        title: "Comfortable jeans",
        body: "Fits well and looks good. A bit tight at the waist but stretches.",
        date: "2025-07-03"
      }
    ]
  },
  {
    id: 3,
    name: "Hooded Sweatshirt",
    description: "Fleece-lined hoodie with front pocket.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1688111421205-a0a85415b224?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1635796233075-9b8ede6ba680?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1635715226585-004fef5a55a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Blue", "Green"],
    discount: 15, // 15% discount
    stock: generateStock(["S", "M", "L", "XL"], ["Gray", "Black", "Red", "Green"], 20),
    productCare: [
      "Machine wash cold.",
      "Do not bleach.",
      "Tumble dry medium.",
      "Do not iron decoration."
    ],
    reviews: [
      {
        reviewer: "Emily Clark",
        avatar: "https://randomuser.me/api/portraits/women/47.jpg",
        rating: 5,
        title: "Warm and cozy",
        body: "Perfect for chilly days. I love the color options too!",
        date: "2025-06-26"
      }
    ]
  },
  {
    id: 4,
    name: "Summer Dress",
    description: "Lightweight floral summer dress.",
    price: 29.99,
    images: [
        "https://images.unsplash.com/photo-1593105522065-9a6ecd21aeb2?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1609695813802-3c443be34359?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1655366202821-36da296def9f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618143790941-cbb4e45abf06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Yellow", "Pink", "Blue"],
    discount: 75, // 75% discount
    stock: generateStock(["XS", "S", "M", "L"], ["Yellow", "Pink", "Blue", "White"], 0),
    productCare: [
      "Hand wash recommended.",
      "Do not bleach.",
      "Hang to dry.",
      "Cool iron if needed."
    ],
    reviews: []
  },
  {
    id: 5,
    name: "Demo Sneakers",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: 59.99,
    images: [
        "https://images.unsplash.com/photo-1700152587587-4811cb979692?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1562668288-599305dfd285?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1603787081717-ca78a98c405e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Green"],
    discount: 0,
    stock: generateStock(["7", "8", "9", "10", "11"], ["White", "Black", "Green"], 12),
    productCare: [
      "Spot clean with damp cloth.",
      "Do not machine wash.",
      "Air dry away from sunlight."
    ],
    reviews: [
      {
        reviewer: "Jordan Lee",
        avatar: "https://randomuser.me/api/portraits/men/48.jpg",
        rating: 5,
        title: "Great sneakers",
        body: "Very comfortable for daily walks. Highly recommend.",
        date: "2025-06-30"
      }
    ]
  },
  {
    id: 6,
    name: "Leather Jacket",
    description: "Premium leather jacket with a modern fit.",
    price: 129.99,
    images: [
        "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1578198576866-7e0ba6078128?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["Black", "Brown"], 5),
    productCare: [
      "Professional leather clean only.",
      "Store in cool dry place."
    ],
    reviews: [
      {
        reviewer: "Samantha King",
        avatar: "https://randomuser.me/api/portraits/women/49.jpg",
        rating: 5,
        title: "Stylish and premium",
        body: "Looks and feels amazing. Worth the price.",
        date: "2025-06-25"
      }
    ]
  },
  {
    id: 7,
    name: "Running Shorts",
    description: "Lightweight shorts perfect for running and workouts.",
    price: 24.99,
    images: [
        "https://images.unsplash.com/photo-1602135918313-aff25ed7dc98?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1719473458937-d42f1f9aad00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Gray"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["Blue", "Gray"], 10),
    productCare: [
      "Machine wash cold.",
      "Do not bleach.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 8,
    name: "Wool Scarf",
    description: "Soft wool scarf to keep you warm in winter.",
    price: 19.99,
    images: [
        "https://images.unsplash.com/photo-1678801868975-32786ae5aeeb?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1601379327700-05347ab58e57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1711097258176-c1a4bb511aa7?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Red", "Green", "Black"],
    discount: 0,
    stock: generateStock(["One Size"], ["Red", "Green", "Black"], 50),
    productCare: [
      "Hand wash in cold water.",
      "Lay flat to dry.",
      "Do not wring."
    ],
    reviews: []
  },
  {
    id: 9,
    name: "Baseball Cap",
    description: "Classic adjustable baseball cap.",
    price: 14.99,
    images: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1572994631587-b3b33b849ebd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1591818343198-4ff334074580?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Navy", "White", "Black"],
    discount: 0,
    stock: generateStock(["One Size"], ["Navy", "White", "Black"], 80),
    productCare: [
      "Spot clean only.",
      "Do not bleach.",
      "Air dry."
    ],
    reviews: []
  },
  {
    id: 10,
    name: "Yoga Pants",
    description: "Stretchy and comfortable yoga pants for all activities.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1591259354202-d1e6123e7b66?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1576226565048-f377166d7e7f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1599751449353-779b810ebb37?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Purple", "Blue"],
    discount: 0,
    stock: generateStock(["XS", "S", "M", "L", "XL"], ["Black", "Purple", "Blue"], 14),
    productCare: [
      "Machine wash cold.",
      "Do not bleach.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 11,
    name: "Raincoat",
    description: "Waterproof raincoat with hood.",
    price: 54.99,
    images: [
      "https://images.unsplash.com/photo-1504616267454-5460d659c9be?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1546672657-61d12fae638c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Yellow", "Blue"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["Yellow", "Blue"], 6),
    productCare: [
      "Machine wash cold on gentle cycle.",
      "Hang to dry.",
      "Do not iron."
    ],
    reviews: []
  },
  {
    id: 12,
    name: "Graphic Tee",
    description: "T-shirt with unique graphic print.",
    price: 22.99,
    images: [
      "https://images.unsplash.com/photo-1525393839361-867d646aea41?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1621446511304-2ebda9cf70f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["White", "Black"], 11),
    productCare: [
      "Machine wash inside out.",
      "Do not bleach.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 13,
    name: "Chino Pants",
    description: "Classic fit chino pants for casual or formal wear.",
    price: 44.99,
    images: [
      "https://images.unsplash.com/photo-1602039855133-b4d18d4c1d45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["30", "32", "34", "36"],
    colors: ["Beige", "Navy"],
    discount: 0,
    stock: generateStock(["30", "32", "34", "36"], ["Beige", "Navy"], 8),
    productCare: [
      "Machine wash warm.",
      "Tumble dry medium.",
      "Iron if needed."
    ],
    reviews: []
  },
  {
    id: 14,
    name: "Puffer Vest",
    description: "Lightweight insulated puffer vest.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1614031690564-1c69960b3e2c?q=80&w=806&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734835253104-ed37428e3e2c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["Black", "Red"], 6),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low.",
      "Do not iron."
    ],
    reviews: []
  },
  {
    id: 15,
    name: "Canvas Tote Bag",
    description: "Eco-friendly canvas tote bag for everyday use.",
    price: 17.99,
    images: [
      "https://images.unsplash.com/photo-1721111258887-c5467d676ccf?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1548863227-3af567fc3b27?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Natural", "Black"],
    discount: 0,
    stock: generateStock(["One Size"], ["Natural", "Black"], 60),
    productCare: [
      "Machine wash cold.",
      "Do not bleach.",
      "Air dry."
    ],
    reviews: []
  },
  {
    id: 16,
    name: "Light Scarf",
    description: "Lightweight scarf for chilly summer days.",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1623832101940-647285e32a58?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1623832101624-ecd47c803527?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Yellow", "Blue"],
    discount: 0,
    stock: generateStock(["One Size"], ["Yellow", "Blue"], 30),
    productCare: [
      "Hand wash cold.",
      "Lay flat to dry."
    ],
    reviews: []
  },
  {
    id: 17,
    name: "Denim Jacket",
    description: "Classic denim jacket with button closure.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1614699745279-2c61bd9d46b5?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],
    discount: 10,
    stock: generateStock(["S", "M", "L", "XL"], ["Blue"], 10),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 18,
    name: "Running Shoes",
    description: "Lightweight running shoes for daily exercise.",
    price: 79.99,
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White"],
    discount: 5,
    stock: generateStock(["7", "8", "9", "10", "11"], ["Black", "White"], 15),
    productCare: [
      "Wipe with damp cloth.",
      "Air dry."
    ],
    reviews: []
  },
  {
    id: 19,
    name: "Graphic T-Shirt",
    description: "Cotton t-shirt with graphic print.",
    price: 21.99,
    images: [
      "https://images.unsplash.com/photo-1553307879-79d578bb97f4?q=80&w=613&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1604571044573-d6c867eaf416?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Red"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["White", "Black", "Red"], 25),
    productCare: [
      "Machine wash cold.",
      "Do not bleach.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 20,
    name: "Leather Belt",
    description: "Genuine leather belt with metal buckle.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Black"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["Brown", "Black"], 20),
    productCare: [
      "Wipe clean with dry cloth."
    ],
    reviews: []
  },
  {
    id: 21,
    name: "Corduroy Pants",
    description: "Comfortable corduroy pants for a vintage look.",
    price: 49.99,
    images: [
        "https://images.unsplash.com/photo-1741939964416-78a1a07df8d9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1746399716251-27b785673f2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Brown", "Olive"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["Brown", "Olive"], 12),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 22,
    name: "Plaid Flannel Shirt",
    description: "Classic plaid flannel shirt for casual wear.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1658710761111-f8cfb5c370c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1658351984158-e9e63932d220?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1630355734650-55fe91e1e5c7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Green", "Blue"],
    discount: 15,
    stock: generateStock(["S", "M", "L", "XL"], ["Red", "Green", "Blue"], 18),
    productCare: [
      "Machine wash warm.",
      "Do not bleach."
    ],
    reviews: []
  },
  {
    id: 23,
    name: "Chelsea Boots",
    description: "Stylish leather Chelsea boots for all occasions.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1710338514013-42de2bbc36d6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Brown"],
    discount: 0,
    stock: generateStock(["7", "8", "9", "10", "11"], ["Black", "Brown"], 8),
    productCare: [
      "Wipe clean with damp cloth.",
      "Polish regularly."
    ],
    reviews: []
  },
  {
    id: 24,
    name: "Polo Shirt",
    description: "Breathable cotton polo shirt for smart casual style.",
    price: 27.99,
    images: [
      "https://images.unsplash.com/photo-1720514496478-78ae7a0a1173?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Navy", "Green"],
    discount: 5,
    stock: generateStock(["S", "M", "L", "XL"], ["White", "Navy", "Green"], 20),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 25,
    name: "Fleece Blanket",
    description: "Ultra-soft fleece blanket for cozy nights.",
    price: 32.99,
    images: [
      "https://images.unsplash.com/photo-1634640259477-acd23b23972f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1642253528526-d4ed03f18ce3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1662394917841-f195161fc7d0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Gray", "Blue", "Pink"],
    discount: 0,
    stock: generateStock(["One Size"], ["Gray", "Blue", "Pink"], 40),
    productCare: [
      "Machine wash warm.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 26,
    name: "Thermal Underwear Set",
    description: "Warm and breathable thermal underwear for winter.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1641808895530-4de94b53c6e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Underwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    discount: 10,
    stock: generateStock(["S", "M", "L", "XL"], ["Black", "Gray"], 15),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 27,
    name: "Bucket Hat",
    description: "Trendy bucket hat for sun protection.",
    price: 18.99,
    images: [
      "https://images.unsplash.com/photo-1648422204972-4278784a9863?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1617916918894-7bc1ea780bb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1637039796091-a3c6279fad80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Beige", "Black", "Olive"],
    discount: 0,
    stock: generateStock(["One Size"], ["Beige", "Black", "Olive"], 30),
    productCare: [
      "Hand wash only.",
      "Air dry."
    ],
    reviews: []
  },
  {
    id: 28,
    name: "Sports Bra",
    description: "Supportive sports bra for active lifestyles.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1584863495140-a320b13a11a8?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1706550631754-d121fd4840be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Underwear",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Pink", "Blue"],
    discount: 0,
    stock: generateStock(["S", "M", "L"], ["Black", "Pink", "Blue"], 18),
    productCare: [
      "Machine wash cold.",
      "Do not bleach.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 29,
    name: "Linen Shorts",
    description: "Breathable linen shorts for summer comfort.",
    price: 26.99,
    images: [
      "https://images.unsplash.com/photo-1701053041476-cacbb3085eee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Khaki"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["White", "Khaki"], 22),
    productCare: [
      "Machine wash cold.",
      "Hang to dry."
    ],
    reviews: []
  },
  {
    id: 30,
    name: "Oversized Hoodie",
    description: "Extra comfy oversized hoodie for lounging.",
    price: 44.99,
    images: [
      "https://images.unsplash.com/photo-1713884196922-66e38abd51b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578470507807-3fc541d5f544?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625880014195-928b3ee7008b?auto=format&fit=crop&w=400&q=80"
    ],
    category: "Outerwear",
    sizes: ["M", "L", "XL"],
    colors: ["Gray", "Olive", "Multi"],
    discount: 20,
    stock: generateStock(["M", "L", "XL"], ["Gray", "Olive", "Multi"], 16),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 31,
    name: "Slim Fit Blazer",
    description: "Modern slim fit blazer for formal occasions.",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1708133301793-e3ca606551b7?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1579090175332-8749c125baf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black"],
    discount: 15,
    stock: generateStock(["S", "M", "L", "XL"], ["Navy", "Black"], 10),
    productCare: [
      "Dry clean only."
    ],
    reviews: []
  },
  {
    id: 32,
    name: "Cargo Shorts",
    description: "Durable cargo shorts with multiple pockets.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1740512922260-543b1b83c986?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Green"],
    discount: 0,
    stock: generateStock(["M", "L", "XL"], ["Beige", "Green"], 20),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 33,
    name: "Faux Fur Coat",
    description: "Luxurious faux fur coat for winter style.",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1614336797449-70801e6b8b4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1674471361345-e787eaf7dd8c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L"],
    colors: ["White", "Brown"],
    discount: 25,
    stock: generateStock(["S", "M", "L"], ["White", "Brown"], 7),
    productCare: [
      "Dry clean only."
    ],
    reviews: []
  },
  {
    id: 34,
    name: "Patterned Socks (3-Pack)",
    description: "Colorful patterned socks, pack of 3.",
    price: 14.99,
    images: [
      "https://images.unsplash.com/photo-1633950646153-0ba646405a6d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1734522986231-94408515c39b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1730447619863-5349b3f6db70?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Multi"],
    discount: 0,
    stock: generateStock(["One Size"], ["Multi"], 50),
    productCare: [
      "Machine wash warm.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 35,
    name: "Classic White Shirt",
    description: "Crisp white shirt for business or casual wear.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1599950755142-d471f509a534?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    discount: 0,
    stock: generateStock(["S", "M", "L", "XL"], ["White"], 25),
    productCare: [
      "Machine wash cold.",
      "Iron on medium heat."
    ],
    reviews: []
  },
  {
    id: 36,
    name: "Quilted Bomber Jacket",
    description: "Trendy quilted bomber jacket for cool weather.",
    price: 74.99,
    images: [
      "https://images.unsplash.com/photo-1732165289122-713c00969877?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive"],
    discount: 10,
    stock: generateStock(["S", "M", "L", "XL"], ["Black", "Olive"], 12),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 37,
    name: "Tie-Dye Hoodie",
    description: "Colorful tie-dye hoodie for a bold look.",
    price: 42.99,
    images: [
      "https://images.unsplash.com/photo-1704253801119-f5beef0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1585751092218-cea84c1ecf01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Outerwear",
    sizes: ["M", "L", "XL"],
    colors: ["Rainbow"],
    discount: 0,
    stock: generateStock(["M", "L", "XL"], ["Rainbow"], 10),
    productCare: [
      "Machine wash cold.",
      "Do not bleach."
    ],
    reviews: []
  },
  {
    id: 38,
    name: "Waffle Knit Beanie",
    description: "Warm waffle knit beanie for winter days.",
    price: 16.99,
    images: [
      "https://images.unsplash.com/photo-1583439223381-81306bc9af27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Gray", "Navy", "Red"],
    discount: 0,
    stock: generateStock(["One Size"], ["Gray", "Navy", "Red"], 30),
    productCare: [
      "Hand wash cold.",
      "Lay flat to dry."
    ],
    reviews: []
  },
  {
    id: 39,
    name: "Ribbed Tank Top",
    description: "Soft ribbed tank top for layering or summer wear.",
    price: 17.99,
    images: [
      "https://images.unsplash.com/photo-1673925205809-601b5a22eb61?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1577060969681-e003a3f2af6e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1532607443961-d6408499b0cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Tops",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Pink"],
    discount: 0,
    stock: generateStock(["S", "M", "L"], ["White", "Black", "Pink"], 20),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  },
  {
    id: 40,
    name: "Fleece Joggers",
    description: "Cozy fleece joggers for lounging or workouts.",
    price: 36.99,
    images: [
      "https://images.unsplash.com/photo-1580866506550-7cd53ba75bc1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1717002643427-a832fe26f909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black"],
    discount: 5,
    stock: generateStock(["S", "M", "L", "XL"], ["Gray", "Black"], 18),
    productCare: [
      "Machine wash cold.",
      "Tumble dry low."
    ],
    reviews: []
  }
];

export default products;
