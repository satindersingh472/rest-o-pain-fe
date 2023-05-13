<template>
  <div>
    <v-layout row wrap justify-center align-content-center fill-height>
      <v-form v-model="valid" ref="form">
        <v-flex align-self-center>
          <v-card width="450px" class="text-center pa-5" flat>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              outlined
            ></v-text-field>
            <v-checkbox
              class="text-caption text-center"
              v-model="checkbox"
              :rules="[(v) => !!v || 'You must agree to continue!']"
              label="Yes, I want to get notified by E-mail."
              required
            ></v-checkbox>
            <v-btn class="primary">Get Notified!</v-btn>
          </v-card>
        </v-flex>
      </v-form>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    send_request() {
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/email-post`,
          method: "POST",
          data: {
            email: this.email,
          },
        })
        .then((response) => {
          response;
        })
        .catch((error) => {
          error;
        });
    },
  },

  data() {
    return {
      valid: true,
      email: undefined,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
