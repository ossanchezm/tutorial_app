<template>
  <q-page class="q-pa-md">
    <q-btn
      @click="increaseCounter"
      color="primary"
      :label="counter"
      size="xl"
      class="full-width q-mb-md"
    />
    <div class="row">
      <div class="col">
        <q-btn
          @click="decreaseCounter"
          flat
          round
          color="negative"
          icon="remove"
          size="lg"
        />
      </div>
      <div class="col text-center">
        <q-btn @click="resetCounter" flat round icon="restart_alt" size="lg" />
      </div>
      <div class="col text-right">
        <q-btn
          @click="increaseCounter"
          flat
          round
          color="positive"
          icon="add"
          size="lg"
        />
      </div>
    </div>
    <q-btn
      @click="quitApp"
      flat
      round
      icon="power_settings_new"
      size="sm"
      class="absolute-bottom-right"
    />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
let counter = ref(10);
const increaseCounter = () => {
  counter.value++;
};
const decreaseCounter = () => {
  counter.value--;
};
const resetCounter = () => {
  counter.value = 0;
};
const quitApp = () => {
  window.myAPI.quitApp();
};
</script>
