<template>
  <v-app>
    <v-parallax
      src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
      height="1000"
    />
    <v-content>
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
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  },
});
</script>

<style scoped>
</style>
