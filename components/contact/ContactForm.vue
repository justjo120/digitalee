<template>
  <v-card flat>
    <v-card-title class="d-flex justify-center">
      <div>
        <span class="title text-uppercase">Get in Touch</span>
      </div>
    </v-card-title>
    <v-card-subtitle class="pt-5 pb-0 d-flex flex-column justify-center text-center">
      <p>
        Our email service is currently under construction.
      </p>
      <p>
        Please contact me directly at
        <a href="mailto:johanna@digitalee.dev">
          johanna@digitalee.dev
        </a>
      </p>
    </v-card-subtitle>
    <v-card-text>
      <v-form v-model="validForm">
        <v-row class="d-flex flex-column align-center">
          <v-col cols="6">
            <v-text-field
              v-model="contactData.firstName"
              :disabled="isDisabled"
              :rules="formRules.firstName"
              color="white"
              label="First name*"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="contactData.lastName"
              :disabled="isDisabled"
              :rules="formRules.lastName"
              color="white"
              label="Last name*"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="contactData.email"
              :disabled="isDisabled"
              :rules="formRules.email"
              color="white"
              label="Email*"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-autocomplete
              v-model="contactData.selections"
              :disabled="isDisabled"
              :items="selectionItems"
              :rules="formRules.selections"
              label="I'm interested in hiring you for..."
              multiple
              color="white"
            />
          </v-col>
          <v-col cols="6" class="d-flex justify-center align-content-center">
            <div class="font-italic">
              *indicates required field
            </div>
            <v-spacer />
            <v-btn :disabled="isDisabled" elevation="5" color="white" text @click="sendEmail">
              Send
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      |
    </v-card-text>
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
    return {
      validForm: false,
      isDisabled: true,
      selectionItems: [
        'Web Development',
        'Digital Strategy/Marketing',
        'Branding',
        'Other'
      ],
      contactData: {
        firstName: null,
        lastName: null,
        email: null,
        selections: [],
      },
      formRules: {
        firstName: [
          (v: string | undefined) => !!v || 'First name is required',
        ],
        lastName: [
          (v: string | undefined) => !!v || 'Last name is required',
        ],
        email: [
          (v: string | undefined) => !!v || 'Email is required',
        ],
        selections: [
          (selections: string[]) => !!selections.length || 'Must select at least one'
        ]
      }
    };
  },
  methods: {
    sendEmail () {
      return '';
    }
  }
});
</script>
