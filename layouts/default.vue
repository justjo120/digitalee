<template>
  <v-app>
    <v-parallax
      src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
      height="500"
    />
    <v-content>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card
            flat
          >
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-row>
        <v-layout class="d-flex justify-center align-content-center">
          <v-flex xs10>
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <v-img
                  :contain="true"
                  max-width="55%"
                  :src="require('@/assets/digitalee-logo.png')"
                />
              </v-col>
            </v-row>
            <v-divider class="mx-5" />
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <div class="headline text-xs-center">
                  Navigating the Digital World
                </div>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-row>
      <v-row>
        <nuxt />
      </v-row>
    </v-content>
    <v-footer app class="text-xs-center">
      <v-row class="d-flex justify-center">
        <div>
          <span>&copy; DigitaLee LLC {{ new Date().getFullYear() }}</span>
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      tab: null,
      items: ['About', 'Portfolio', 'Contact'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  },
});
</script>

<style scoped>
</style>
