import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "@/views/ShopView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import CartView from "@/views/CartView.vue";
import PricingView from "@/views/PricingView.vue";
import ConfirmationView from "@/views/ConfirmationView.vue";
import ProductDetailView from "@/views/ProductDetailView.vue";
import ShopWithSidebarView from "@/views/ShopWithSidebarView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ComingSoonView from "../views/ComingSoonView.vue";
import FaqView from "../views/FaqView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpViewVue from "@/views/SignUpView.vue";
import ForgetPasswordViewVue from "@/views/ForgetPasswordView.vue";
import DashboardViewVue from "@/views/DashboardView.vue";
import OrdersViewVue from "@/views/OrdersView.vue";
import AddressViewVue from "@/views/AddressView.vue";
import ProfileDetailViewVue from "@/views/ProfileDetailView.vue";
import BlogLeftSidebar from "@/views/BlogLeftSidebar.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: HomeView,
      },
      {
         path: "/shop",
         name: "shop",
         component: ShopView,
      },
      {
         path: "/shop-with-sidebar",
         name: "shopWithSidebar",
         component: ShopWithSidebarView,
      },
      {
         path: "/checkout",
         name: "checkout",
         component: CheckoutView,
      },
      {
         path: "/cart",
         name: "cart",
         component: CartView,
      },
      {
         path: "/pricing",
         name: "pricing",
         component: PricingView,
      },
      {
         path: "/confirmation",
         name: "confirmation",
         component: ConfirmationView,
      },
      {
         path: "/shop/product",
         name: "productDetail",
         component: ProductDetailView,
      },
      {
         path: "/contact",
         name: "contact",
         component: ContactView,
      },
      {
         path: "/about",
         name: "about us",
         component: AboutUsView,
      },
      {
         path: "/faq",
         name: "f.a.q",
         component: FaqView,
      },
      {
         path: "/dashboard",
         name: "dashboard",
         component: DashboardViewVue,
      },
      {
         path: "/orders",
         name: "orders",
         component: OrdersViewVue,
      },
      {
         path: "/address",
         name: "address",
         component: AddressViewVue,
      },
      {
         path: "/profile",
         name: "profile",
         component: ProfileDetailViewVue,
      },
      {
         path: "/blogleft",
         name: "blog left",
         component: BlogLeftSidebar,
      },
      {
         path: "/coming_soon",
         name: "comingSoon",
         meta: { layout: "empty" },
         component: ComingSoonView,
      },
      {
         path: "/signin",
         name: "signin",
         meta: { layout: "empty" },
         component: SignInView,
      },
      {
         path: "/signup",
         name: "signup",
         meta: { layout: "empty" },
         component: SignUpViewVue,
      },
      {
         path: "/forgetpassword",
         name: "forgetpassword",
         meta: { layout: "empty" },
         component: ForgetPasswordViewVue,
      },
      {
         path: "/404",
         name: "404",
         meta: { layout: "empty" },
         component: NotFoundView,
      },
   ],
});

export default router;
