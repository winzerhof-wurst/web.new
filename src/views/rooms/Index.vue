<template>
    <Content>
        <h1>G&auml;stezimmer</h1>

        <ContentTile>
            <h2>Gastfreundschaft Wurst</h2>
            <p>
                Getreu unserem Motto
                <i>"Komm als Gast und geh als Freund"</i> ist es unser Bestreben, Sie bestm&ouml;glich zu verw&ouml;hnen und Ihren Aufenthalt
                bei uns zu einem unvergesslichen Erlebnis zu machen. Genie&szlig;en Sie die Tage in unserem Haus in den 3 Zimmern mit allem
                Komfort - ausgezeichnet mit 4 Blumen - und Blick auf den liebevoll restaurierten Innenhof.
            </p>
            <p>
                <i>"Was gibt es Sch&ouml;neres, als den Tag mit einem wunderbaren Fr&uuml;hst&uuml;ck zu beginnen?"</i> Wir verw&ouml;hnen
                Sie mit hausgemachten Schmankerln und k&ouml;stlichen regionalen Produkten.
            </p>
            <p>
                Im gem&uuml;tlichen Kellerst&uuml;berl mit historisch steingew&ouml;lbtem Degustationskeller haben Sie die M&ouml;glichkeit
                unsere Qualit&auml;tsweine zu verkosten.
            </p>
            <img class="img-fluid center-block rounded"
                     :src="require('../../images/zimmer_1.jpg')"
                     alt="Winzerhof Wurst">
        </ContentTile>

        <ContentTile>
            <h2>Lebensqualit&auml;t Wurst</h2>
            <p>
                Schrattenthal, die kleinste Weinstadt &Ouml;sterreichs, ist eine
                <strong>Oase der Stille</strong>. Hier k&ouml;nnen Sie ausspannen und Kraft tanken.
            </p>
            <p>
                Wenn Sie Aktivit&auml;ten suchen, bietet das gut ausgebaute, beschilderte Radnetz des Retzer Landes Gelegenheit dazu.
                <a target="_blank" href="http://www.openstreetmap.org/?mlat=48.7169&mlon=15.9075#map=12/48.7169/15.9075&layers=C">
                    Open Street Map</a> enth&auml;lt einige sch&ouml;ne Strecken zum Radfahren rund um Schrattenthal.
            </p>
            <p>
                <i>"Erleben"</i> Sie das Werden des Weines von der Rebe bis ins Glas. Das vermitteln wir Ihnen bei Riedenwanderung und Kellerf&uuml;hrung.
            </p>
            <p>
                F&uuml;r Ausfl&uuml;ge in die Umgebung bieten sich Pulkau, Eggenburg und etwas weiter entfernt die Bezirksst&auml;dte Retz,
                Horn und Hollabrunn an. Suchen Sie weltbekannte Kulturg&uuml;ter bzw. Sehensw&uuml;rdigkeiten - in knapp einer Autostunde
                erreichen Sie Krems, die Wachaumetropole. Nur wenig l&auml;nger brauchen Sie nach Wien.
            </p>
            <img class="img-fluid center-block rounded"
                     :src="require('../../images/zimmer_2.jpg')"
                     alt="Winzerhof Wurst">
        </ContentTile>
    </Content>
</template>

<script>
import Content from "../../components/Content.vue";
import ContentTile from "../../components/ContentTile.vue";

export default {
  components: {
    Content,
    ContentTile
  },
  data() {
    var date = new Date();
    return {
      today: date.toISOString().substring(0, "1970-01-01".length)
    };
  }
};
</script>

