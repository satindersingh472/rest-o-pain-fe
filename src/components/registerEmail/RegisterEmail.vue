<template>
  <div>
    <v-form ref="form" @submit.prevent="submit">
      <v-row no-gutters justify="start">
        <v-col cols="12">
          <v-text-field
            color="#7F878A"
            class="text-body1 heading_text"
            background-color="#b7bee2"
            full-width
            label="Register to get notified"
            outlined
            v-model="email"
            :rules="emailRules"
            rounded
          >
          </v-text-field>
          <v-col>
            <v-checkbox
              class="pa-0 ma-0"
              label="I would like to recieve updates via e-mail."
              v-model="disable"
              @click="$refs.form.validate()"
            >
            </v-checkbox>
          </v-col>
        </v-col>
        <v-col>
          <template>
            <div class="text-center ma-2">
              <v-btn
                class="primary"
                :disabled="!disable"
                type="submit"
                :loading="loading"
                @click="send_request()"
              >
                Notify
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
          this.$refs.form.reset();
          this.snackbar = true;
        })
        .catch((error) => {
          this.text = error["response"]["data"];
          this.$refs.form.reset();
          this.snackbar = true;
        });
    },
  },

  data() {
    return {
      email: undefined,
      snackbar: false,
      text: undefined,
      disable: false,
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
* {
  padding: 0px;
  margin: 0px;
}

.secondary_text {
  color: $secondary-color;
}
.heading_text {
  color: $primary-color;
}
</style>
