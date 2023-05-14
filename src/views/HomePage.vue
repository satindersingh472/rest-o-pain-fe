<template>
  <div style="height: 100%; display: grid; width: 100%">
    <v-layout row wrap justify-center align-center class="grey lighten-5 pa-5">
      <v-flex text-center align-self-center xs12 md5 class="pa-0">
        <v-flex>
          <h1 class="secondary_text font-weight-regular">Opening Soon...</h1>

          <h1 class="text-h3 text-md-h2 ma-5 font-weight-medium primary_text">
            Rest-O-Pain
          </h1>
          <h1 class="text-h3 text-md-h2 mt-5 font-weight-medium primary_text">
            Physiotherapy
          </h1>
        </v-flex>
        <v-flex align-self-start class="mt-2">
          <h1 class="secondary_text mt-5 pa-0 text-h5 font-weight-regular">
            Our Location
          </h1>
          <h1 class="text-subtitle-1 mt-1 primary_text">
            #200, 6830 Ellerslie road sw,
          </h1>
          <h1 class="text-subtitle-1 primary_text">Edmonton, AB, T6X 1A3</h1>
          <h1 class="text-subtitle-1 primary_text">+1 780-280-1001</h1>
        </v-flex>
      </v-flex>

      <v-flex text-center xs11 class="mt-5" sm8 md5>
        <v-img width="100%" :src="`${image_assets}`"></v-img>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center class="grey lighten-5">
      <v-flex xs8 md7 lg4 class="mt-5 mb-5">
        <register-email></register-email>
      </v-flex>
      <v-flex xs7 md10>
        <footer-basic></footer-basic>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import FooterBasic from "@/components/footer/footerBasic.vue";
import RegisterEmail from "@/components/registerEmail/RegisterEmail.vue";
export default {
  components: {
    FooterBasic,
    RegisterEmail,
  },
  data() {
    return {
      image_assets: require("@/assets/images/homepage.jpg"),
      image_online:
        "https://media.istockphoto.com/id/1143400985/photo/female-massage-therapist-massaging-patients-back.jpg?s=612x612&w=is&k=20&c=qzrYGeHGHBzJREo_rWKSw0qVp_lpruEr9cdT0ssOv34=",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.secondary_text {
  color: $secondary-color;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.primary_text {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif !important  ;
  padding: 0px;
}
</style>
