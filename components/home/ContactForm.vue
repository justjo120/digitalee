<template>
  <v-card flat>
    <v-card-title class="d-flex justify-center">
      <div>
        <span class="subheading">Get in Touch!</span>
      </div>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field color="white" label="First name*" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field color="white" label="Last name*" required />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field color="white" label="Email*" required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="[
                'Web Development',
                'Digital Strategy/Marketing',
                'Branding',
                'Other'
              ]"
              label="I'm interested in hiring you for..."
              multiple
              color="white"
            />
          </v-col>
          <div class="font-italic">
            *indicates required field
          </div>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn elevation="5" color="white" text @click="sendEmail">
        Send
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    dialog: {
      type: String,
      default: null,
      required: false,
    }
  },
  data () {
    return {};
  },
  methods: {
  }
});
</script>
