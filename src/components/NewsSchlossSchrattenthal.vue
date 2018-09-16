<template>
    <ContentTile>
        <h2>Schloss Schrattenthal</h2>
        <p>
            Ein Besuch im Schloss Schrattenthal ist auch eine Reise in die Vergangenheit. Eingebettet in die sanften H&uuml;gel des westlichen
            Weinviertels liegt am Fu&szlig;e des Manhartsberges das Schloss Schrattenthal.
        </p>
        <p>
            N&auml;here Information finden Sie unter
            <a href="http://www.schloss-schrattenthal.at" target="_blank">schloss-schrattenthal.at</a>
        </p>
        <img class="img-fluid"
                     :src="require('../images/schloss_schrattenthal.jpg')"
                     alt="Logo Schloss Schrattenthal">
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
