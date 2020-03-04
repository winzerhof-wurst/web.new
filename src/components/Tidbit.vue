<template>
    <ShopItem>
        <div class="description">
            <strong>{{name}}</strong>
            <br>
        </div>
        <div class="unit-price">
            €{{price}}
        </div>
        <div class="add-to-cart">
            <div class="input-group">
                <input type="text"
                       v-model="quantity"
                       class="form-control">
                <span class="input-group-btn">
                    <button class="btn btn-default add-1"
                            type="button"
                            v-on:click="addToCart">+1</button>
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
      price: this.data.price
    };
  },
  computed: {
    quantity: {
      get() {
        return this.$store.getters.cartQuantity(this.data.id);
      },
      set(raw) {
        let quantity = parseInt(raw.replace(/\D/g, ""), 10);
        if (isNaN(quantity)) {
          quantity = 0;
        }
        this.$store.commit("updateProductQuantity", {
          id: this.data.id,
          quantity
        });
      }
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("addProductToCart", {
        id: this.data.id
      });
    }
  }
};
</script>
