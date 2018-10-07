<template>
    <ShopItem>
        <div class="description">
            <strong>{{name}} {{year}}</strong>
            <br> {{ description }}
            <br>
            <small v-html="text"></small>
        </div>
        <div class="unit-price">
            {{unit}}
            <br> €{{price}}
        </div>
        <div class="add-to-cart">
            <span v-if="out_of_stock" class="out-of-stock">ausgetrunken</span>
            <div v-else class="input-group">
                <input type="text" :value="quantity" class="form-control">
                <span class="input-group-btn">
                    <button class="btn btn-default add-6" type="button">+6</button>
                    <button class="btn btn-default add-12" type="button">+12</button>
                </span>
            </div>
        </div>
    </ShopItem>
</template>

<script>
import ShopItem from "./ShopItem.vue";

export default {
  components: {
    ShopItem
  },
  props: {
    data: Object
  },
  data() {
    return {
      id: this.data.id,
      name: this.data.name,
      description: this.data.description,
      text: this.data.text,
      year: this.data.year,
      unit: this.data.unit,
      price: this.data.price,
      out_of_stock: this.data.out_of_stock
    };
  },
  computed: {
    quantity() {
      return 0;
    }
  }
};
</script>
