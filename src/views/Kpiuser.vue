<template>

  <div id="Kpiuser">

    <v-main class="blue lighten-3">
      
      <v-container>
        <v-row>
       
          <v-col cols="12" sm="12">
            <v-sheet min-height="70vh" rounded="lg">
              <div class="text-center">
                <v-btn rounded color="primary ma-4" dark> STATUS KPI </v-btn>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  :items-per-page="5"
                  item-key="name"
                  class="elevation-1"
                  :footer-props="{
                    showFirstLastPage: true,
                    firstIcon: 'mdi-arrow-collapse-left',
                    lastIcon: 'mdi-arrow-collapse-right',
                    prevIcon: 'mdi-minus',
                    nextIcon: 'mdi-plus',
                  }"
                ></v-data-table>
              </div>
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
    return {
      components:{

      },
      headers: [
        {
          text: "รายละเอียด",
          align: "start",
          value: "name",
        },
        { text: "วันที่", value: "date" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          date: "22/12/2020",
        },
        {
          name: "Ice cream sandwich",
          date: "22/12/2020",
        },
        {
          name: "Eclair",
          date: "22/12/2020",
        },
      ],
    };
  },
};
</script>

<style></style>
