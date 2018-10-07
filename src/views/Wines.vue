<template>
    <Content>
        <h1>Weinkarte</h1>

        <ContentTile>
            <h2>Weißweine</h2>
            <Wine v-for="wine in whiteWines" :key="wine.id" :data="wine"/>
        </ContentTile>

        <ContentTile>
            <h2>Rotweine</h2>
            <Wine v-for="wine in redWines" :key="wine.id" :data="wine"/>
        </ContentTile>

        <ContentTile>
            <h2>Prädikatsweine</h2>
            <Wine v-for="wine in specialWines" :key="wine.id" :data="wine"/>
        </ContentTile>


        <ContentTile>
            <h2>Landweine - 1l</h2>
            <Wine v-for="wine in oneLiter" :key="wine.id" :data="wine"/>
        </ContentTile>


        <ContentTile>
            <h2>Bestellung</h2>
            <p>
                Die Preise sind in Euro und verstehen sich ab-Hof und inklusive Steuern.
                <br> Bei 1l + 2l Flaschen exclusive Euro 0,40 Einsatz.
                <br>
                <br> Aus verpackungstechnischen Gründen bitten wir Sie in 6er Einheiten zu bestellen, d.h. insgesamt 6, 12, 18, 24, usw. Flaschen.
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
import Wine from "../components/Wine.vue";

export default {
  components: {
    Content,
    ContentTile,
    ShopForm,
    Wine
  },
  asyncData({ store, route }) {
    return store.dispatch("fetchWines");
  },
  computed: {
    whiteWines: function() {
      return this.$store.state.wines.filter(w => w.type === "W");
    },
    redWines: function() {
      return this.$store.state.wines.filter(w => w.type === "R");
    },
    specialWines: function() {
      return this.$store.state.wines.filter(w => w.type === "Q");
    },
    oneLiter: function() {
      return this.$store.state.wines.filter(w => w.type === "1L");
    }
  }
};
</script>
