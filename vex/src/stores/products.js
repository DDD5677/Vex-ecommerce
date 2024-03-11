import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", () => {
   const products = ref([
      {
         id: 1,
         name: "Reef Boardsport",
         price: 200,
         img: "product-1.jpg",
         sale: true,
      },
      {
         id: 2,
         name: "Rainbow Shoes",
         price: 200,
         img: "product-2.jpg",
         sale: false,
      },
      {
         id: 3,
         name: "Strayhorn SP",
         price: 230,
         img: "product-3.jpg",
         sale: false,
      },
      {
         id: 4,
         name: "Bradley Mid",
         price: 200,
         img: "product-4.jpg",
         sale: false,
      },
      {
         id: 5,
         name: "Rainbow Shoes",
         price: 200,
         img: "product-5.jpg",
         sale: false,
      },
      {
         id: 6,
         name: "Reef Boardsport",
         price: 200,
         img: "product-6.jpg",
         sale: false,
      },
      {
         id: 7,
         name: "Reef Boardsport",
         price: 200,
         img: "product-7.jpg",
         sale: true,
      },
      {
         id: 8,
         name: "Reef Boardsport",
         price: 200,
         img: "product-8.jpg",
         sale: false,
      },
      {
         id: 9,
         name: "Reef Boardsport",
         price: 200,
         img: "product-9.jpg",
         sale: false,
      },
   ]);
   const relatedProducts = ref([
      {
         id: 5,
         name: "Rainbow Shoes",
         price: 200,
         img: "product-5.jpg",
         sale: true,
      },
      {
         id: 1,
         name: "Reef Boardsport",
         price: 200,
         img: "product-1.jpg",
         sale: false,
      },
      {
         id: 2,
         name: "Rainbow Shoes",
         price: 200,
         img: "product-2.jpg",
         sale: false,
      },
      {
         id: 3,
         name: "Strayhorn SP",
         price: 230,
         img: "product-3.jpg",
         sale: false,
      },
   ]);

   const carts = ref([
      {
         id: 1,
         name: "Sunglass",
         img: "cart-1.jpg",
         price: 200,
      },
      {
         id: 2,
         name: "Airspace",
         img: "cart-2.jpg",
         price: 200,
      },
      {
         id: 3,
         name: "Bingo",
         img: "cart-3.jpg",
         price: 200,
      },
   ]);

   return { products, carts, relatedProducts };
});
