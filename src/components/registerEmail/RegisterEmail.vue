<template>
  <div>
    <v-layout row wrap justify-center align-content-center fill-height>
      <v-form v-model="valid" ref="form">
        <v-flex align-self-center>
          <v-card width="375px" class="text-center pa-5" flat>
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
            <v-btn class="primary" :disabled="!checkbox" @click="send_request"
              >Get Notified!</v-btn
            >
            <v-snackbar v-model="snackbar" :timeout="2000">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="blue"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
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
      this.text = undefined;
      axios
        .request({
          url: `${process.env.VUE_APP_BASE_DOMAIN}/api/email-post`,
          method: "POST",
          data: {
            email: this.email,
          },
        })
        .then((response) => {
          this.text = response["data"];
          this.snackbar = true;
          this.$refs.form.reset();
        })
        .catch((error) => {
          this.text = error["response"]["data"];
          this.snackbar = true;
          this.$refs.form.reset();
        });
    },
  },

  data() {
    return {
      checkbox: false,
      snackbar: false,
      text: undefined,
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
