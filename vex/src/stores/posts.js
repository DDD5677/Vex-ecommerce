import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", () => {
   const posts = ref([
      {
         id: 1,
         title: "How To Wear Bright Shoes",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.",
         img: "blog-post-1.jpg",
      },
      {
         id: 2,
         title: "Two Ways To Wear Straight Shoes",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.",
         img: "blog-post-2.jpg",
      },
      {
         id: 3,
         title: "Making A Denim Statement",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.",
         img: "blog-post-3.jpg",
      },
      {
         id: 4,
         title: "Standard Text Post",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.",
         img: "blog-post-4.jpg",
      },
      {
         id: 5,
         title: "How To Wear Bright Shoes",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.",
         img: "blog-post-5.jpg",
      },
      {
         id: 6,
         title: "How To Wear Bright Shoes",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere.",
         img: "blog-post-6.jpg",
      },
   ]);

   const latestPosts = ref([
      {
         id: 1,
         title: "Introducing Swift for Mac",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.",
         img: "post-thumb.jpg",
      },
      {
         id: 2,
         title: "Welcome to Themefisher Family",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.",
         img: "post-thumb-2.jpg",
      },
      {
         id: 3,
         title: "Warm welcome from swift",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.",
         img: "post-thumb-3.jpg",
      },
      {
         id: 4,
         title: "Introducing Swift for Mac",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.",
         img: "post-thumb-4.jpg",
      },
      {
         id: 5,
         title: "Introducing Swift for Mac",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.",
         img: "post-thumb-5.jpg",
      },
      {
         id: 6,
         title: "Introducing Swift for Mac",
         body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, officia.",
         img: "post-thumb-6.jpg",
      },
   ]);

   return { posts, latestPosts };
});
