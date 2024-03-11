import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useReviewStore = defineStore("reviews", () => {
   const reviews = ref([]);

   return { reviews };
});
