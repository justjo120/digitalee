<template>
  <v-card>
    <v-card-title>
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script lang="ts">
// import Vue from 'vue';
import { createComponent, ref } from '@vue/composition-api';
import { Ref } from '@vue/composition-api/dist/reactivity/ref';

export default createComponent({
  setup (): { title: Ref<string> } {
    const title = ref('Login');
    return {
      title
    };
  }
});

</script>

<style>

</style>
