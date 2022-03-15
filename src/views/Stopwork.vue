<template>
  <div id="Stopwork">
    |
    <v-main class="blue lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">รายการลางาน</th>
                      <th class="text-left">วันที่</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="4">
            <v-sheet rounded="lg" min-height="268">
              <div class="text-center">
                <v-btn rounded color="primary ma-4" dark> Status ลางาน </v-btn>
              </div>
            </v-sheet>
            <v-menu bottom origin="center center" transition="scale-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  x-large
                  fab
                  class="text-center ma-6"
                >
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="workbuttoms in $store.state.workbuttom"
                  :key="workbuttoms.title"
                >
                  <v-list-item-title>{{ workbuttoms.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>

<style></style>
