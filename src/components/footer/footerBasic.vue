<template>
  <div>
    <v-layout justify-center align-content-end class="mt-2"
      ><v-flex>
        <p class="text-center">
          &copy; {{ year }} Rest-O-Pain. All Rights Reserved.
        </p>
      </v-flex></v-layout
    >
  </div>
</template>

<script>
export default {
  mounted() {
    this.year = new Date().getFullYear();
  },
  data() {
    return {
      year: undefined,
    };
  },
};
</script>

<style lang="scss" scoped></style>
