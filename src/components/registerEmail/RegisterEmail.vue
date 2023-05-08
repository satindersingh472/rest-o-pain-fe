<template>
  <div>
    <v-form>
      <v-row justify="center" no-gutters>
        <v-col cols="12">
          <v-text-field
            color="#7F878A"
            class="text-h6 heading_text"
            background-color="#dde5e8"
            full-width
            label="Register email for updates"
            outlined
            v-model="email"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <template>
            <div class="text-center ma-2">
              <v-btn
                class="primary"
                :disabled="disable"
                @click="
                  snackbar = true;
                  send_request();
                  disable = true;
                "
              >
                Send
              </v-btn>
              <v-snackbar
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
                      disable = false;
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
          setTimeout(() => {
            this.disable = false;
          }, 2000);
        })
        .catch((error) => {
          this.text = error["response"]["data"];
          setTimeout(() => {
            this.disable = false;
          }, 2000);
        });
    },
  },

  data() {
    return {
      email: undefined,
      snackbar: false,
      text: undefined,
      disable: false,
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
