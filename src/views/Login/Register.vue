<template>
  <v-app>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      center
      width="1200"
      height="800"
    >
      <v-container class="md-6">
        <v-card class="ma-6">
          <v-img
            src="@/assets/download.png"
            width="150"
            class="mx-auto pa-6"
          ></v-img>
          <form
            class="mx-auto pa-6"
            actions="http://localhost:3000/auth/register"
          >
            <v-text-field
              v-model="name"
              class="mx-auto pa-1"
              label="ชื่อ"
              :rules="nameRules"
              solo
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              label="E-mail"
              :rules="emailRules"
              class="mx-auto pa-1"
              required
              solo
            ></v-text-field>
            <v-select
              v-model="select"
              :items="items"
              solo
              label="ออฟฟิต"
              class="mx-auto pa-1"
              required
            ></v-select>

            <v-btn
              class="mx-auto pa-6 ma-5"
              color="primary"
              rounded
              to="/register"
            >
              ลงทะเบียน
            </v-btn>
            <span class="mx-auto ma-6">
              <v-chip
                color="blue darken-1"
                class="ma-3"
                text-color="white"
                to="/login"
                >เข้าสู่ระบบ</v-chip
              >
            </span>
          </form>
        </v-card>
      </v-container>
    </v-parallax>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["พนักงานโรงงาน", "ออฟฟิต"],
    email: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>

<style></style>
