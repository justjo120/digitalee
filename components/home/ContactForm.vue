<template>
  <v-card>
    <v-card-title>
      <span class="headline">Get in Touch!</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="First name*" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Last name*" required />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email*" required />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="[
                'Web Development',
                'Digital Strategy/Marketing',
                'Branding',
                'Other'
              ]"
              label="I'm interested in..."
              multiple
            />
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="blue darken-1" text @click="closeDialog">
        Close
      </v-btn>
      <v-btn color="blue darken-1" text @click="closeDialog">
        Submit
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
  data: () => {},
  methods: {
    closeDialog (): void {
      this.$store.commit('quote/setDisplay', false);
    }
  }
});
</script>
