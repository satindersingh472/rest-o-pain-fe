<template>
  <div>
    <v-container fluid>
      <v-img :src="`${imag}`" height="100vh">
        <div
          class="text-center mt-10"
          style="display: grid; place-items: center; row-gap: 2vh"
        >
          <div>
            <p class="secondary_text text-h4 text-md-h3 font-weight-bold">
              Coming Soon...
            </p>
            <p
              class="heading_text text-h3 text-md-h2 text-lg-h1 font-weight-bold"
            >
              Rest-O-Pain
            </p>
            <p
              class="heading_text text-h4 text-md-h2 text-lg-h1 font-weight-bold"
            >
              Physiotherapy
            </p>
          </div>
          <register-email />
          <div>
            <p class="secondary_text text-h5 text-md-h3 mt-5">
              We Are Located At...
            </p>
            <p class="heading_text text-h6 text-sm-h4 font-weight-bold">
              #201-6830 Ellerslie Rd SW <br />
              Edmonton, AB T6X 1A3
            </p>
          </div>
        </div>
      </v-img>
    </v-container>
  </div>
</template>

<script>
import RegisterEmail from "@/components/RegisterEmail";
export default {
  components: {
    RegisterEmail,
  },

  data() {
    return {
      image: require("@/assets/images/homepage.jpg"),
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
