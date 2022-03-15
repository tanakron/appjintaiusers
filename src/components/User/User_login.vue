<template>
  <v-app>
    <v-card>
      <v-col cols="8" class="ma-10">
        <v-form action="" method="post">
          <v-label> รหัสพนักงาน</v-label>
        </v-form>
      </v-col>
      <v-col cols="12 ">
        <template>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="password"
                    :rules="nameRules"
                    :counter="10"
                    label="password"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </template>
        <v-btn class="ma-4 block" outlined color="indigo"> เข้าสู่ระบบ </v-btn>
      </v-col>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
};
</script>
