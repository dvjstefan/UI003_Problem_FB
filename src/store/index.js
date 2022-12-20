/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
//import lager from "./modules/lager";
import crestron from "./plugins/crestron";

export default createStore({
  state() {
    return {
      systemName: "",
      lagerLista: [
        {
          id: "lagerSlide_1",
          name: "Test 1",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_2",
          name: "Test 2",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_3",
          name: "Test 3",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_4",
          name: "Test 4",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_5",
          name: "Test 5",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
        {
          id: "lagerSlide_6",
          name: "Test 6",
          power: false,
          mediaplayer_1: false,
          mediaplayer_2: true,
          slider: 0,
        },
      ],
    };
  },
  mutations: {
    setSystemName(state, systemName) {
      state.systemName = systemName;
    },
    setPowerFeedback(state, payload) {
      //console.log("Payload check: " + [payload.id] + " " + payload.power);
      //console.log(state.lagerList[payload.id] + " " + [payload.id].power);
      const list = state.lagerLista.find((list) => list.id == [payload.id]);
      list.power = [payload.id].power;
      console.log("Power : " + list.power);
      //state.lagerList[payload.id].power = payload.power;
    },
    setPower(state, { id, power }) {
      // Empty mutation for Vuex
    },
  },
  getters: {
    getPowerFeedback: (state) => `${state.lagerLista.id.power}`,
  },
  modules: {
    //lager: lager,
    //counter: counter,
    //displays: displays,
  },
  plugins: [crestron()],
});
