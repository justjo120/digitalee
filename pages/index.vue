<template>
  <v-layout class="d-flex justify-center align-content-center">
    <v-flex xs10>
      <v-row justify="center" class="d-flex flex-grow flex-shrink flex-basis">
        <v-col
          v-for="(content, idx) in contentItems"
          :key="idx"
          cols="12"
          md="4"
          class="flex-grow"
        >
          <pitch-content-card
            class="fill-height"
            :icon="content.icon"
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
  icon: string;
}

export default Vue.extend({
  components: {
    PitchContentCard,
  },
  data (): HomePageData {
    return {
      contentItems: [{
        title: 'Web Development',
        description: 'Whether you need someone to help get you set up on WordPress or you’re looking for a custom SaaS solution, we can help with planning, architecture, UX/UI design, as well as full stack development',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
        icon: 'mdi-monitor-clean',
      }, {
        title: 'Digital Strategy',
        description: 'Should you invest your marketing dollars in search marketing or social media? We bring industry experienced marketers to help you find the best mix of digital presence to maximize your presence and keep track of your returns.',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
        icon: 'mdi-map-check'
      }, {
        title: 'Branding',
        description: 'Your Brand is your company’s DNA. We can create a cohesive, easy to manage online presence with a custom branding kit including a color scheme, fonts, and other useful creative materials to keep you consistent as you set yourself apart.',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
        icon: 'mdi-dna',
      }],
    };
  }
});
</script>
