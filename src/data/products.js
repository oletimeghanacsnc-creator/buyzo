const thumbnailSet = (productPath) => {
  const thumbnail = `https://cdn.dummyjson.com/product-images/${productPath}/thumbnail.webp`;
  return [thumbnail, thumbnail, thumbnail, thumbnail];
};

export const categories = [
  {
    id: "fashion",
    label: "Fashion",
    image:
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "electronics",
    label: "Electronics",
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "home-decor",
    label: "Home Decor",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "beauty",
    label: "Beauty",
    image:
      "https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "footwear",
    label: "Footwear",
    image:
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/thumbnail.webp",
  },
  {
    id: "accessories",
    label: "Accessories",
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
  },
  {
    id: "fragrances",
    label: "Fragrances",
    image:
      "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  },
  {
    id: "furniture",
    label: "Furniture",
    image:
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
  },
];

export const products = [
  {
    id: "1",
    title: "Wireless Noise Cancelling Headphones",
    category: "Electronics",
    rating: 4.8,
    price: 179.99,
    description:
      "Immersive over-ear headphones with deep bass, crystal-clear calls, and up to 30 hours of battery life.",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    ],
  },
  {
    id: "2",
    title: "Active Mesh Sneakers",
    category: "Fashion",
    rating: 4.6,
    price: 89.99,
    description:
      "Lightweight sneakers with breathable mesh upper and cushioned sole for all-day comfort.",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/sports-sneakers-off-white-red/4.webp",
    ],
  },
  {
    id: "3",
    title: "Smart Fitness Watch",
    category: "Electronics",
    rating: 4.7,
    price: 129.99,
    description:
      "Track heart rate, sleep, activity, and notifications with a bright always-on display.",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/3.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-watch-series-4-gold/thumbnail.webp",
    ],
  },
  {
    id: "4",
    title: "Premium Leather Tote Bag",
    category: "Fashion",
    rating: 4.5,
    price: 119.99,
    description:
      "Elegant daily tote with structured silhouette, premium finish, and roomy interior pocketing.",
    images: [
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/1.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/2.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/3.webp",
      "https://cdn.dummyjson.com/product-images/womens-bags/heshe-women's-leather-bag/thumbnail.webp",
    ],
  },
  {
    id: "5",
    title: "Ceramic Vase Set",
    category: "Home Decor",
    rating: 4.4,
    price: 54.99,
    description:
      "Minimal matte ceramic vases designed to pair with fresh stems and dried arrangements.",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/2.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/3.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/4.webp",
    ],
  },
  {
    id: "6",
    title: "Hydrating Skin Care Kit",
    category: "Beauty",
    rating: 4.9,
    price: 72.5,
    description:
      "Complete hydration routine with cleanser, serum, and moisturizer for daily glow.",
    images: [
      "https://images.pexels.com/photos/29022724/pexels-photo-29022724.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34939743/pexels-photo-34939743.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34939691/pexels-photo-34939691.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/13683563/pexels-photo-13683563.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "7",
    title: "Wireless Earbuds Pro",
    category: "Electronics",
    rating: 4.6,
    price: 99.0,
    description:
      "Compact true wireless earbuds with adaptive EQ and low-latency performance.",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
    ],
  },
  {
    id: "8",
    title: "Modern Accent Lamp",
    category: "Home Decor",
    rating: 4.3,
    price: 64.99,
    description:
      "Soft ambient table lamp with brushed metal base and warm-tone fabric shade.",
    images: [
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp",
    ],
  },
  {
    id: "9",
    title: "Running Shoes Elite",
    category: "Fashion",
    rating: 4.5,
    price: 109.99,
    description:
      "Performance running shoes with responsive foam and reinforced heel support.",
    images: [
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/1.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/2.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/3.webp",
      "https://cdn.dummyjson.com/product-images/mens-shoes/puma-future-rider-trainers/4.webp",
    ],
  },
  {
    id: "10",
    title: "Bluetooth Speaker Mini",
    category: "Electronics",
    rating: 4.2,
    price: 59.99,
    description:
      "Portable mini speaker with rich audio profile and up to 12 hours playback.",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
    ],
  },
  {
    id: "11",
    title: "Velvet Cushion Pack",
    category: "Home Decor",
    rating: 4.1,
    price: 39.99,
    description:
      "Set of soft velvet cushions with subtle texture to elevate living room styling.",
    images: [
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/2.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/3.webp",
      "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp",
    ],
  },
  {
    id: "12",
    title: "Vitamin C Glow Serum",
    category: "Beauty",
    rating: 4.7,
    price: 34.99,
    description:
      "Lightweight brightening serum that helps reduce dullness and improve texture.",
    images: [
      "https://images.pexels.com/photos/16769670/pexels-photo-16769670.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/28255122/pexels-photo-28255122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/29977128/pexels-photo-29977128.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/34939709/pexels-photo-34939709.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
  {
    id: "13",
    title: "Urban Runner Sneakers",
    category: "Footwear",
    rating: 4.5,
    price: 94.99,
    description:
      "Breathable performance sneakers with lightweight support and everyday comfort.",
    images: thumbnailSet("mens-shoes/nike-baseball-cleats"),
  },
  {
    id: "14",
    title: "Retro Street Sneakers",
    category: "Footwear",
    rating: 4.4,
    price: 88.99,
    description:
      "Classic streetwear-inspired sneakers built for style and daily wear.",
    images: thumbnailSet("mens-shoes/sports-sneakers-off-white-red"),
  },
  {
    id: "15",
    title: "Trail Performance Shoes",
    category: "Footwear",
    rating: 4.6,
    price: 119.99,
    description:
      "Cushioned outsole and solid grip engineered for training and long runs.",
    images: thumbnailSet("mens-shoes/puma-future-rider-trainers"),
  },
  {
    id: "16",
    title: "Smart Earbuds Lite",
    category: "Accessories",
    rating: 4.4,
    price: 79.99,
    description:
      "True wireless earbuds with low-latency pairing and clear mic pickup.",
    images: thumbnailSet("mobile-accessories/apple-airpods"),
  },
  {
    id: "17",
    title: "Wireless Gaming Earphones",
    category: "Accessories",
    rating: 4.3,
    price: 69.99,
    description:
      "Ergonomic earphones tuned for immersive sound and all-day comfort.",
    images: thumbnailSet("mobile-accessories/beats-flex-wireless-earphones"),
  },
  {
    id: "18",
    title: "Portable Voice Assistant Speaker",
    category: "Accessories",
    rating: 4.2,
    price: 64.99,
    description:
      "Compact voice-enabled speaker with rich sound and quick smart controls.",
    images: thumbnailSet("mobile-accessories/amazon-echo-plus"),
  },
  {
    id: "19",
    title: "Calvin Fresh Eau De Toilette",
    category: "Fragrances",
    rating: 4.5,
    price: 49.99,
    description:
      "Fresh day fragrance with a balanced citrus and musky blend.",
    images: thumbnailSet("fragrances/calvin-klein-ck-one"),
  },
  {
    id: "20",
    title: "Coco Noir Perfume",
    category: "Fragrances",
    rating: 4.7,
    price: 89.99,
    description:
      "Elegant evening fragrance with a deep floral and warm woody profile.",
    images: thumbnailSet("fragrances/chanel-coco-noir-eau-de"),
  },
  {
    id: "21",
    title: "Dolce Shine Perfume",
    category: "Fragrances",
    rating: 4.6,
    price: 76.99,
    description:
      "Vibrant floral scent designed for a bright and uplifting signature.",
    images: thumbnailSet("fragrances/dolce-shine-eau-de"),
  },
  {
    id: "22",
    title: "Annibale Premium Bed",
    category: "Furniture",
    rating: 4.6,
    price: 499.99,
    description:
      "Premium modern bed frame with clean lines and premium wood finish.",
    images: thumbnailSet("furniture/annibale-colombo-bed"),
  },
  {
    id: "23",
    title: "Executive Conference Chair",
    category: "Furniture",
    rating: 4.4,
    price: 259.99,
    description:
      "Ergonomic executive chair with posture support and refined detailing.",
    images: thumbnailSet("furniture/knoll-saarinen-executive-conference-chair"),
  },
  {
    id: "24",
    title: "Wooden Bathroom Vanity",
    category: "Furniture",
    rating: 4.3,
    price: 329.99,
    description:
      "Contemporary wooden vanity with integrated mirror and storage utility.",
    images: thumbnailSet("furniture/wooden-bathroom-sink-with-mirror"),
  },
];
