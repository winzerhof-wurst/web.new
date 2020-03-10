<template>
    <Content>
        <h1>Unsere Weinkarte</h1>

        <ContentTile>
            <p>Derzeit bewirtschaften wir eine Rebfläche von 10 Hektar. Dabei legen wir unseren Fokus auf Qualitätsweine, besonders auf den klassischen Grüner Veltliner Weinviertel DAC, der vorallem mit seiner knackigen Frucht und seinem gewissen „Pfefferl“ überzeugt. Weitere Rebsorten unseres Betriebes sind Riesling, Gelber Muskateller, Sauvignon Blanc, Müller Thurgau, sowie Blauer Portugieser, Blauer Zweigelt, Merlot und Sankt Laurent. Die Vielfalt unserer Weine können Sie direkt bei uns am Hof verkosten, oder Sie bestellen sich ein paar Flaschen und genießen die Weine zu Hause, denn wie Heinz zu sagen pflegt: „Am wichtigsten ist, dass der Wein auch zu Hause schmeckt und nicht nur in Anwesenheit des Winzers.“</p>
            <p>Aber am besten überzeugen Sie sich von unseren Weinen selbst!</p>
        </ContentTile>

        <ContentTile>
            <h2>Pakete</h2>
            <Wine v-for="wine in packages" :key="wine.id" :data="wine"/>
        </ContentTile>

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
                Die Preise sind in Euro und verstehen sich als Online-Preise.
                <br> Ab einem Bestellwert von 65,-- Euro versenden wir die Weine versandkostenfrei in ganz Österreich. 1-Liter-Flaschen können nur im 12er-Paket versendet werden. Pro 1-Liter-Flasche verrechnen wir 0,40 Euro Einsatz.
                <br>
                <br> Aus verpackungstechnischen Gründen bitten wir Sie in 6er Einheiten zu bestellen, d.h. insgesamt 6, 12, 18, 24, usw. Flaschen.
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
    return store.dispatch("fetchProducts");
  },
  computed: {
    packages: function() {
      return this.$store.state.products.filter(w => w.type === "WP");
    },
    whiteWines: function() {
      return this.$store.state.products.filter(w => w.type === "W");
    },
    redWines: function() {
      return this.$store.state.products.filter(w => w.type === "R");
    },
    specialWines: function() {
      return this.$store.state.products.filter(w => w.type === "Q");
    },
    oneLiter: function() {
      return this.$store.state.products.filter(w => w.type === "1L");
    }
  }
};
</script>
