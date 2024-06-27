const categories = [
    {
      name: 'Mobiles',
      products: [
        {
          name: 'iPhone 13',
          description: 'Apple iPhone 13 with 128GB storage',
          price: 799,
          image: 'data:image/webp;base64,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',
        },
        {
          name: 'Samsung Galaxy S21',
          description: 'Samsung Galaxy S21  ',
          price: 999,
          image: 'https://zoneofdeals.com/wp-content/uploads/2023/01/samsung-s21-128gb-2.jpg',
        },
        {
            name: 'iPhone 13',
            description: 'Apple iPhone 13 with 128GB storage',
            price: 799,
            image: 'data:image/webp;base64,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',
          },
          {
            name: 'Samsung Galaxy S21',
            description: 'Samsung Galaxy S21  ',
            price: 999,
            image: 'https://zoneofdeals.com/wp-content/uploads/2023/01/samsung-s21-128gb-2.jpg',
          },
          {
            name: 'iPhone 13',
            description: 'Apple iPhone 13 with 128GB storage',
            price: 799,
            image: 'data:image/webp;base64,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',
          },
      ],
    },
    {
      name: 'Fashion',
      products: [
        {
          name: 'Men T-Shirt',
          description: 'Comfortable cotton t-shirt',
          price: 19.99,
          image: 'https://images.bewakoof.com/t1080/men-s-purple-beast-within-graphic-printed-oversized-t-shirt-581488-1715257463-1.jpg',
        },
        {
          name: 'Women Dress',
          description: 'Elegant evening dress',
          price: 49.99,
          image: 'https://images.bewakoof.com/t640/women-s-yellow-all-over-printed-oversized-t-shirt-627786-1718108223-1.jpg',
        },
        {
            name: 'Men T-Shirt',
            description: 'Comfortable cotton t-shirt',
            price: 19.99,
            image: 'https://images.bewakoof.com/t1080/men-s-purple-beast-within-graphic-printed-oversized-t-shirt-581488-1715257463-1.jpg',
          },
          {
            name: 'Women Dress',
            description: 'Elegant evening dress',
            price: 49.99,
            image: 'https://images.bewakoof.com/t640/women-s-yellow-all-over-printed-oversized-t-shirt-627786-1718108223-1.jpg',
          },
          {
            name: 'Men T-Shirt',
            description: 'Comfortable cotton t-shirt',
            price: 19.99,
            image: 'https://images.bewakoof.com/t1080/men-s-purple-beast-within-graphic-printed-oversized-t-shirt-581488-1715257463-1.jpg',
          },
          
      ],
    },
  ];
  
  export default categories;
  