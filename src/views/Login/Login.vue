<template>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    center
    width="1200"
    height="800"
    ><v-container>
      <v-col cols="12" class="mx-auto pa-6">
        <v-card class="mx-auto pa-6">
          <span class="mr-10">
            <v-img
              src="@/assets/download.png"
              width="150"
              class="mx-auto pa-6"
            ></v-img>
          </span>
          <v-col cols="12">
            <v-col cols="12">
              <v-form actions="" methods="POST">
                <v-text-field
                  v-model="usersname"
                  label="รหัสพนักงาน"
                  v-on:keyup.enter="nextPlease"
                  solo
                  class="mx-auto"
                  maxlength="6"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="password"
                  solo
                  id="input2"
                  class="mx-auto"
                >
                </v-text-field>
                <v-btn
                  rounded
                  color="primary"
                  @click.prevent="submit"
                  class="mx-auto pa-6 ma-5"
                  dark
                >
                  เข้าสู่ระบบ
                </v-btn>
              </v-form>
              <span class="mx-auto ma-6">
                <v-chip
                  color="blue darken-1"
                  class="mb-3"
                  text-color="white"
                  to="/register"
                  >ลงทะเบียน</v-chip
                >
              </span>
            </v-col>
          </v-col>
        </v-card>
      </v-col>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      usersname: "",
      password: "",
    };
  },
  computed: {
    userNamelogin() {
      return `user  ${this.usersname}   ${this.password}`;
    },
  },
  methods: {
    nextPlease: function (event) {
      document.getElementById("input2").focus();
    },
  },
};
</script>

<style></style>
