<template>
    <Content>
        <h1>Schmankerl</h1>

        <ContentTile>
            <Tidbit v-for="tidbit in tidbits" :key="tidbit.id" :data="tidbit" />
        </ContentTile>

        <ContentTile>
            <h2>Bestellung</h2>
            <p>
                Die Preise sind in Euro und verstehen sich als Online-Preise.
                <br>
                <br> Die Versandkosten sind gewichts- und entfernungsabhängig und werden Ihnen vor der Auslieferung bekanntgegeben.
            </p>
            <ShopForm />
        </ContentTile>
    </Content>
</template>

<script>
import Content from "../components/Content.vue";
import ContentTile from "../components/ContentTile.vue";
import ShopForm from "../components/ShopForm.vue";
import Tidbit from "../components/Tidbit.vue";

export default {
  components: {
    Content,
    ContentTile,
    ShopForm,
    Tidbit
  },
  asyncData({ store, route }) {
    return store.dispatch("fetchProducts");
  },
  computed: {
    tidbits() {
      return this.$store.state.tidbits;
    }
  }
};
</script>
