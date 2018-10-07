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
                <input type="text"
                       v-model="quantity"
                       class="form-control">
                <span class="input-group-btn">
                    <button class="btn btn-default add-6"
                            type="button"
                            v-on:click="add6">+6</button>
                    <button class="btn btn-default add-12"
                            type="button"
                            v-on:click="add12">+12</button>
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
    quantity: {
      get() {
        return this.$store.getters.cartWineQuantity(this.data.id);
      },
      set(raw) {
        let quantity = parseInt(raw.replace(/\D/g, ""), 10);
        if (isNaN(quantity)) {
          quantity = 0;
        }
        this.$store.commit("updateWineQuantity", {
          wineId: this.data.id,
          quantity
        });
      }
    }
  },
  methods: {
    add6() {
      this.$store.commit("addSixBottlesToCart", {
        wineId: this.data.id
      });
    },
    add12() {
      this.$store.commit("addTwelveBottlesToCart", {
        wineId: this.data.id
      });
    }
  }
};
</script>
