<template>
  <v-layout class="d-flex justify-center align-content-center">
    <v-flex xs10>
      <v-row justify="center">
        <v-col
          v-for="(content, idx) in contentItems"
          :key="idx"
          cols="12"
          md="4"
        >
          <pitch-content-card
            :title="content.title"
            :description="content.description"
            :background-image="content.backgroundImage"
          />
        </v-col>
      </v-row>
      <br>
      <v-row>
        <v-col>
          <v-card
            elevation="0"
          >
            <v-card-title class="d-flex justify-center">
              <div class="title">
                Portfolio
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-row>
        <v-col>
          <v-card
            elevation="0"
          >
            <v-card-title class="d-flex justify-center">
              <div class="title">
                About Me
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import PitchContentCard from '~/components/home/PitchContentCard.vue';

interface HomePageData {
  contentItems: PitchContent[]
}

export interface PitchContent {
  title: string;
  backgroundImage: string;
  description: string;
}

export default Vue.extend({
  components: {
    PitchContentCard,
  },
  data (): HomePageData {
    return {
      contentItems: [{
        title: 'Web Development',
        description: 'Lorem Ipsum',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
      }, {
        title: 'Digital Strategy',
        description: '',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
      }, {
        title: 'Branding',
        description: '',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
      }],
    };
  }
});
</script>
