<script setup>
import { computed, ref } from "vue";
import { usePortfolioStore } from "@/stores/portfolio";
import { useStocksStore } from "@/stores/stocks";

const portfolioStore = usePortfolioStore();
const stocksStore = useStocksStore();
let quantity = ref("");

const props = defineProps(["stock"]);

const funds = computed(() => portfolioStore.fundsAmount);
const buyStockCrime = computed(
  () => quantity.value * props.stock.price > funds.value
);

function buyStock() {
  const order = {
    stockId: props.stock.id,
    stockPrice: props.stock.price,
    stockQuantity: quantity.value,
  };
  stocksStore.buyStocks(order);
  quantity.value = 0;
}
</script>

<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        {{ props.stock.name }}
        <small class="pull-right">{{ props.stock.price }}</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input
            class="form-control"
            placeholder="Quantity"
            type="number"
            v-model="quantity"
            :class="{ crime: buyStockCrime }"
          />
        </div>

        <div class="pull-right">
          <button
            class="btn btn-success"
            :class="{ 'btn-danger': buyStockCrime }"
            @click="buyStock"
            :disabled="
              buyStockCrime || quantity <= 0 || !Number.isInteger(quantity)
            "
          >
            {{ buyStockCrime ? "Insufficients Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crime {
  border: 1px solid red;
  box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.2);
}
</style>
