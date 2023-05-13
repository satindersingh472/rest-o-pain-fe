<template>
  <div>
    <v-container fluid class="pa-0">
      <v-img
        :src="`${image_online}`"
        style="max-width: 100%"
        height="100vh"
        max-width="100%"
        alt="woman getting a physiotherapy"
        class="background_image"
        gradient="156deg, rgba(234,255,250,0.45689250700280112) 100%, rgba(226,183,199,.34534255) 0%"
      >
        <div
          class="text-center mt-10"
          style="display: grid; place-items: center; row-gap: 2vh"
        >
          <div>
            <p class="secondary_text text-h4 text-md-h3 font-weight-bold">
              We are opening soon...
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
            <p class="secondary_text text-h5 text-md-h4 mt-5 font-weight-bold">
              Our location...
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
import RegisterEmail from "@/components/registerEmail/RegisterEmail";
export default {
  components: {
    RegisterEmail,
  },

  data() {
    return {
      image: require("@/assets/images/homepage.jpg"),
      image_online:
        "https://media.istockphoto.com/id/1246919734/photo/kinesiology-taping-treatment-with-blue-and-pink-tape-on-athlete-patient-injured-arm.jpg?s=612x612&w=is&k=20&c=PgbB4eLRbQp5iWpFr9vYdJXww2ikV-TtZHIzY6zk_sY=",
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
.background_image {
  width: 100%;
}
</style>
