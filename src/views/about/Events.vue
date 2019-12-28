<template>
    <Content>
        <h1>Termine</h1>

        <ContentTile>
          <h2>Weinviertel DAC Präsentation</h2>
          <p>
            Der Weinviertel DAC geht auf Tour und wir mit ihm mit. Besuchen Sie uns in Linz, Salzburg und München um mit uns die neuen pfeffrigen Veltliner zu verkosten.
          </p>
          <p>
            <i>5. März 2020, Design Center, Linz</i><br>
            <i>24. März 2020, amadeus terminal 2, Salzburg</i><br>
            <i>26. März 2020, MVG Museum, München</i>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Weintour Weinviertel</h2>
          <p>
            Am 18. und 19. April öffnen wir unser großes Tor und laden Sie ein unsere neuen Weine im gemütlichen Innenhof zu probieren.
          </p>
          <p>
            <i>18.-19. April 2020, Winzerhof Wurst, Schrattenthal</i>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Weinfrühling bei der Blauen Elf</h2>
          <p>
            Alle Jahre wieder veranstaltet die Blaue Elf ihren Weinfrühling und so dürfen auch wir wieder mit dabei sein.
          </p>
          <p>
            <i>18. April 2020, Teutschmannweg 1, Linz</i>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Retzer Weinwoche</h2>
          <p>
            <em>Eine Stadt, 10 Tage, 700 Weine.</em><br>
            Nutzen Sie diese einmalige Gelegenheit im Retzer Land und verkosten Sie die besten Weine der Region.
          </p>
          <p>
            <i>11.-21. Juni 2020, Sparkassengarten, Retz</i>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Sommerkeller <small>im Zuge der offenen Kellertür</small></h2>
          <p>
            Heuer veranstalten wir bereits zum dritten Mal unseren Sommerkeller. Lassen Sie sich von uns mit unseren Weinen und hausgemachten Speisen verwöhnen, während Sie zu Livemusik von <a href="https://www.bauchgefuehl-musik.at/" target="_blank" rel="noopen noreferrer"><em>Bauchgefühl</em></a> lauschen.
          </p>
          <p>
            <i>13. August 2020, Presshaus, Schrattenthal</i>
          </p>
        </ContentTile>

        <ContentTile>
          <h2>Tag der offenen Kellertür</h2>
          <p>
            Weinbau hat bei uns Tradition und so zählt auch mittlerweile unsere offene Kellertür zu einem fixen Programmpunkt. 4 Tage lang bieten wir Ihnen in unserem Presshaus erlesene Weine und hausgemachte Speisen.
          </p>
          <p>
            <i>13.-16. August 2020, Presshaus, Schrattenthal</i>
          </p>
        </ContentTile>

        <NewsMarketLeonding />
    </Content>
</template>

<script>
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";
import NewsMarketLeonding from "../../components/NewsMarketLeonding.vue";

export default {
  components: {
    Content,
    ContentTile,
    NewsMarketLeonding,
  }
};
</script>
