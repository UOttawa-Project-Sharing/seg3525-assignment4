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
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Red"],
    discount: 15, // 15% discount
    stock: generateStock(["S", "M", "L", "XL"], ["Gray", "Black", "Red"], 20),
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
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Yellow", "Pink", "Blue"],
    discount: 75, // 75% discount
    stock: generateStock(["XS", "S", "M", "L"], ["Yellow", "Pink", "Blue"], 0),
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
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    category: "Bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Purple"],
    discount: 0,
    stock: generateStock(["XS", "S", "M", "L", "XL"], ["Black", "Purple"], 14),
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
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=400&q=80",
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
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
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
  }
];

export default products;