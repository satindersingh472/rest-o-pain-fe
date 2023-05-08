<template>
  <div>
    <v-form>
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field
            color="#7F878A"
            class="text-h6 heading_text"
            background-color="#7F878A"
            full-width
            label="Register email for updates"
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-btn class="primary" @click="send_request">Send</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      details: undefined,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.secondary_text {
  color: $secondary-color;
}
.heading_text {
  color: $primary-color;
}
</style>
