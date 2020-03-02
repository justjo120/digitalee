<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <div class="title text-uppercase">
        About
      </div>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <div class="">
        DigitaLee aims to bring quality service to help your business navigate through the ever changing digital world.
      </div>
    </v-col>
    <br>
    <v-col cols="12" class="d-flex justify-center">
      <h3>
        DigitaLee Values
      </h3>
    </v-col>
    <v-col
      v-for="(trait, idx) in traits"
      :key="idx"
      cols="12"
      md="3"
    >
      <v-hover v-slot:default="{ hover }">
        <v-card
          color="primary"
          height="200"
        >
          <v-img
            height="200"
            :src="trait.background || defaults.background"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text text-center"
                style="height: 100%;"
              >
                <span :class="trait.size">
                  {{ trait.text }}
                </span>
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      defaults: {
        background: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
      },
      traits: [{
        text: 'Responsive',
        background: require('@/assets/responsivevalue.png'),
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }, {
        text: 'Communicative',
        background: require('@/assets/communicationvalue.png'),
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }, {
        text: 'Collaborative',
        background: require('@/assets/collaborationvalue.png'),
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }, {
        text: 'Data Driven',
        background: require('@/assets/datadrivenvalue.png'),
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }]
    };
  }
});
</script>

<style scoped>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .75;
  position: absolute;
  width: 100%;
}

</style>
