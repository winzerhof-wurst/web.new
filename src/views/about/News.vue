<template>
    <Content>
        <h1>Aktuelles</h1>

        <ContentTile>
            <h2>Weinviertel DAC Präsentation</h2>
            <p>
              Der Weinviertel DAC geht auf Tour und wir mit ihm mit. Dieses Jahr haben Sie gleich drei mal die Chance unsere neuen pfeffrigen Veltliner zu probieren. Sie treffen uns
              <ul>
                <li>am 5. März im Design Center Linz,</li>
                <li><s>am 24. März im amadeus terminal 2 in Salzburg, und</s> ABGESAGT</li>
                <li><s>am 26. März im MVG Museum in München.</s> ABGESAGT</li>
              </ul>
            </p>
            <p>
                Natürlich nehmen wir Ihnen auch gerne Wein mit, wenn Sie ihn ein paar Tage vorab bei uns bestellen. Wir freuen uns Sie bei der Verkostung zu sehen.
            </p>
            <img class="img-fluid"
                     :src="require('../../images/202002_dac.jpg')"
                     alt="Weinviertel DAC Präsentation">
        </ContentTile>

        <ContentTile>
            <h2>Wein findet Stadt</h2>
            <p>
              Waidhofen verwandelt seine Fußgängerzone zu einer Weinstraße für alle Weinliebhaber. Wir sind mit dabei und schenken eine Auswahl unsere Weine für Sie aus.
            </p>
            <p>
              19. Juni 2020, Hoher Markt, Waidhofen an der Ybbs
            </p>
        </ContentTile>

        <ContentTile>
            <h2>Urlaub am Winzerhof</h2>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe width="640" height="360" src="https://www.youtube.com/embed/O2i49NVaYNs" frameborder="0" allowfullscreen></iframe>
            </div>
        </ContentTile>

        <NewsRetzbacherhof />
        <NewsSchlossSchrattenthal />
        <NewsRentARebstock />
    </Content>
</template>

<script>
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";
import NewsMarketLeonding from "../../components/NewsMarketLeonding.vue";
import NewsRentARebstock from "../../components/NewsRentARebstock.vue";
import NewsRetzbacherhof from "../../components/NewsRetzbacherhof.vue";
import NewsSchlossSchrattenthal from "../../components/NewsSchlossSchrattenthal.vue";

export default {
  components: {
    Content,
    ContentTile,
    NewsMarketLeonding,
    NewsRentARebstock,
    NewsRetzbacherhof,
    NewsSchlossSchrattenthal
  }
};
</script>
