<template>
  <v-app dark>
    <v-content>
      <v-sheet>
        <v-card elevation="0" align-center>
          <v-card-title primary-title class="d-flex justify-center">
            <div class="display-3 font-weight-black">
              DIGITALEE
            </div>
          </v-card-title>
          <v-divider class="mx-5" />
          <v-card-subtitle class="d-flex justify-center">
            <div class="headline">
              Navigating the Digital World
            </div>
          </v-card-subtitle>
          <nuxt />
        </v-card>
      </v-sheet>
    </v-content>
    <v-footer app>
      <span>&copy; DigitaLee LLC {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
  }
};
</script>
