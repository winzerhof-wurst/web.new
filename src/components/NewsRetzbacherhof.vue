<template>
    <ContentTile>
        <h2>Pollaks Retzbacherhof</h2>
        <p>
            Genie&szlig;erhof - F&uuml;hldichwohlhof - Retzbacherhof
            <br>
            <br> Nur einen Katzensprung von uns entfernt, in Unterretzbach, betreibt unser Bruder/Schwager Harald Pollak mit seiner Frau
            Sonja und dem engagierten Team in K&uuml;che und Service seit August 2004 den Retzbacherhof. Harald, der auf langj&auml;hrige
            Erfahrung im Gastronomiebereich verweisen kann, steht selbst hinterm Herd und kocht mit Hingabe und Begeisterung neben Spezialit&auml;ten
            aller Art besonders gerne traditionelle Gerichte aus der Gegend und verwendet daf&uuml;r am liebsten Produkte von Anbietern
            aus der n&auml;heren Umgebung. Die Wirtsleute haben das traditionelle Gasthaus mit viel Fingerspitzengef&uuml;hl umgestaltet
            und modernisiert, den urt&uuml;mlichen Charakter aber dennoch erhalten. So steht gleich nach dem Eingang noch immer der
            Stammtisch, an dem die Einheimischen mit Begeisterung Karten spielen und philosophieren. Im dahinter gelegenen Salettl speist
            man in feinstem Ambiente und genie&szlig;t den Ausblick auf Gastgarten und die m&auml;chtigen Maulbeer- und Kastanienb&auml;ume.
            Die Speisekarte bietet f&uuml;r jeden etwas, und auch die Getr&auml;nkekarte – nat&uuml;rlich sind auch wir mit einer Auswahl
            unserer Weine vertreten – kann sich sehen lassen.
            <br>
            <br> Neugierig geworden? Gut so! Am besten gleich hinfahren und sich selbst &uuml;berzeugen!
            <br>
            <img class="img-fluid"
                     :src="require('../images/pollak_retzbacherhof_2013.jpg')"
                     alt="Pollak Retzbacherhof">
        </p>
    </ContentTile>
</template>

<script>
import ContentTile from "./ContentTile.vue";

export default {
  components: {
    ContentTile
  }
};
</script>
