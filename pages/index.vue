<template>
  <v-row>
    <v-layout class="d-flex justify-center align-content-center">
      <v-flex xs10>
        <v-col class="text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec eget tellus est.
            Ut aliquam non mauris a ullamcorper.
            Aliquam rhoncus sit amet nisi eget iaculis.
            Phasellus nec bibendum tortor, eget aliquet tortor.
          </p>
        </v-col>
      </v-flex>
    </v-layout>
    <v-layout class="d-flex justify-center align-content-center">
      <v-flex xs10>
        <v-row>
          <v-col
            v-for="(content, idx) in contentItems"
            :key="idx"
            cols="12"
            md="4"
          >
            <pitch-content-card
              :icon="content.icon"
              :title="content.title"
              :description="content.description"
              :background-image="content.backgroundImage"
            />
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-row>
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
        description: 'From static single-page websites and progressive web apps to custom SaaS solutions, we can help with planning, architecture, UX/UI design, as well as full-stack development.',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
        icon: 'mdi-monitor-clean',
      }, {
        title: 'Digital Strategy',
        description: 'We bring industry experienced marketers to help you find the best mix of digital presence to maximize your returns.',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
        icon: 'mdi-map-check'
      }, {
        title: 'Branding',
        description: 'Your brand is your company’s DNA. We can create a cohesive, easy to manage online presence with a custom branding kit including a color scheme, fonts, and other creative materials to keep you consistent as you set yourself apart.',
        backgroundImage: 'aerial-photo-of-boat-on-sea-1655166.jpg',
        icon: 'mdi-dna',
      }],
    };
  }
});
</script>
