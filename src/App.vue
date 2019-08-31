<template>
  <div id="app">
    Counter :{{count}}
    <br />
    Getter:{{plus10}}
    <br />
    <button @click="incrementCount">increment</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import counterAction from "@/store/modules/counter/actions";

export default {
  name: "app",
  computed: {
    ...mapGetters("counter", ["plus10"]),
    ...mapState("counter", ["count"])
  },
  methods: {
    ...mapActions("counter", {
      increment: "increment",
      resetCount: "resetState"
    }),
    incrementCount() {
      this.increment();
    },
    reset() {
      this.resetCount();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
