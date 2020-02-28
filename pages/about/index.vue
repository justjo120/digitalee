<template>
  <v-row>
    <v-layout class="d-flex justify-center align-content-center">
      <v-flex xs10>
        <v-col class="d-flex justify-center">
          <h2>
            About
          </h2>
        </v-col>
        <v-col>
          <p class="text-justify">
            DigitaLee aims to bring quality service to help your business navigate through the ever changing digital world.
          </p>
        </v-col>
      </v-flex>
    </v-layout>
    <br>
    <v-layout class="d-flex justify-center align-content-center">
      <v-flex xs10>
        <v-col class="d-flex justify-center">
          <h3>
            Guiding Principles
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
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal white--text"
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
      </v-flex>
    </v-layout>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {
      traits: [{
        text: 'Timely',
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }, {
        text: 'Communication',
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }, {
        text: 'Co-Authors',
        icon: 'mdi-clock-check-outline',
        size: 'display-2',
      }, {
        text: 'Data Driven',
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
