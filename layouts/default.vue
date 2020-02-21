
<template>
  <v-app-bar app v-scroll="onScroll" :color="isTransparent ? 'transparent' : '#F5F5F5'" flat>
    <core-view />

    <core-footer />
  </v-app-bar>
</template>

<script>
export default {
  components: {
    CoreFooter: () => import("@/components/core/Footer"),

    CoreView: () => import("@/components/core/View")
  }
};
</script>