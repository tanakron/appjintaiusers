<template>
  <div id="Accoutuser">
    <sitebar-manu />
    <v-main class="blue lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-sheet rounded="lg" min-height="268">
              <useraccount-left />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <useraccount />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    "sitebar-manu": require("@/components/Sitebarmanu/Sitebarmanu.vue").default,
    useraccount: require("@/components/User/User_account.vue").default,
    "useraccount-left": require("@/components/User/User_account_lef.vue")
      .default,
  },
};
</script>

<style></style>
