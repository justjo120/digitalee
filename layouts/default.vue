<template>
  <v-app class="overflow-hidden">
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
      >
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" />
        </template>
        <v-tabs
          centered
          color="white"
        >
          <v-tab
            v-for="item in items"
            :key="item.name"
            class="px-0"
            grow
            fixed-tabs
            :to="item.route"
            nuxt
          >
            <span class="white--text">
              {{ item.name }}
            </span>
          </v-tab>
        </v-tabs>
      </v-app-bar>
    </v-card>
    <v-content>
      <v-parallax
        src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
        height="300"
      />
      <v-container fluid>
        <v-row class="pt-5">
          <v-layout class="d-flex justify-center align-content-center">
            <v-flex xs12>
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
        <br>
        <v-slide-x-transition>
          <nuxt />
        </v-slide-x-transition>
      </v-container>
    </v-content>
    <v-footer app>
      <v-col xs12 class="py-0 text-center caption">
        <span>&copy; DigitaLee LLC {{ new Date().getFullYear() }}</span>
      </v-col>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      tab: null,
      items: [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Portfolio', route: '/portfolio' },
        { name: 'Contact', route: '/contact' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
