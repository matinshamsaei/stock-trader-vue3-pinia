<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import { useStocksStore } from "@/stores/stocks.js";

const stocksStore = useStocksStore();
stocksStore.initStock();
</script>

<template>
  <div id="app">
    <div class="container py-5">
      <app-header></app-header>

      <div class="row">
        <div class="px-4 pt-3 pb-5">
          <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.px-4.pt-3.pb-5 {
  width: 100%;
}

.slide-enter-active {
  animation: slide-in 300ms ease-out forwards;
}

.slider-leave-active {
  animation: slide-out 300ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
