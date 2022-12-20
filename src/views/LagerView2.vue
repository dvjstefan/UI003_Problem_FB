<template>
  <header class="header">
    <v-app>
      <div id="lager" class="container">
        <div class="sliders" v-for="lager in lagerLista" :key="lager.id">
          <button
            class="btn-default red"
            :class="{
              green: lager.power,
            }"
            @click="setPower({ id: lager.id, power: true })"
          >
            On
          </button>
          <button
            class="btn-default"
            :class="{
              green: lager.mediaplayer_1,
            }"
            @click="setPlayer1({ id: lager.id, mediaplayer_1: true })"
          >
            1
          </button>
          <button
            class="btn-default"
            :class="{
              green: lager.mediaplayer_2,
            }"
            @click="setPlayer2({ id: lager.id, mediaplayer_2: true })"
          >
            2
          </button>
          <v-slider
            v-model="lager.slider"
            step="1"
            density="comfortable"
            thumb-label
            color="orange"
            :label="lager.name"
            direction="vertical"
          />
          <p>{{ lager.slider || 0 }}</p>
        </div>
        <section class="section">
          <div>
            <a class="a1">Stäng av spelare:</a>
            <div class="right">
              <button class="btn-tight red">1</button>
              <button class="btn-tight green">2</button>
            </div>
          </div>
        </section>
      </div>
    </v-app>
  </header>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    //
  }),
  methods: {
    ...mapMutations(["setPower", "setPowerFeedback"]),
    ...mapMutations("lager", ["setPlayer1"]),
    ...mapMutations("lager", ["setPlayer2"]),
  },
  computed: {
    ...mapState(["lagerLista"]),
    ...mapGetters(["getPowerFeedback"]),
  },
};
</script>
