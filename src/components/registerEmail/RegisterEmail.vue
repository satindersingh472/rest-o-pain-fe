<template>
  <div>
    <v-form ref="form" @submit.prevent="submit">
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field
            color="#7F878A"
            class="text-h6 heading_text"
            background-color="#b7bee2"
            full-width
            label="Register email for updates"
            outlined
            v-model="email"
            :rules="emailRules"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <template>
            <div class="text-center ma-2">
              <v-btn
                class="primary"
                :disabled="disable"
                type="submit"
                :loading="loading"
                @click="validate_email(email, event)"
              >
                Send
              </v-btn>
              <v-snackbar
                v-if="text !== undefined"
                persistent
                v-model="snackbar"
                elevation="10"
                timeout="2000"
              >
                {{ text }}
                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="primary"
                    text
                    v-bind="attrs"
                    @click="
                      snackbar = false;
                      enable_button();
                    "
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>
          </template>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},

  methods: {
    revert_all() {
      this.$refs.form.reset();
      this.disable = false;
      setTimeout(() => {
        this.text = undefined;
      }, 2000);
    },

    disable_button() {
      this.disable = true;
    },

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
          this.text = response["data"];
          this.revert_all();
        })
        .catch((error) => {
          this.text = error["response"]["data"];
          this.revert_all();
        });
    },
    validate_email(email) {
      this.loading = true;

      setTimeout(() => {
        this.snackbar = true;
        this.loading = false;
      }, 1500);
      axios
        .request({
          url: "https://emailvalidation.abstractapi.com/v1",
          params: {
            api_key: process.env.VUE_APP_API_KEY,
            email: email,
          },
        })
        .then((response) => {
          if (response["data"]["deliverability"] === "DELIVERABLE") {
            this.send_request();
          } else {
            this.text = "Please enter a valid email";
            this.revert_all();
          }
        })
        .catch(() => {
          this.text = "Please enter a valid email";
          this.revert_all();
        });
    },
  },

  data() {
    return {
      email: undefined,
      snackbar: false,
      text: undefined,
      disable: false,
      valid_email: false,
      loading: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
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
