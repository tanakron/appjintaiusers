<template>
  <v-app>
    <v-main class="blue lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2"> </v-col>

          <v-col cols="12" sm="8">
            <v-carousel hide-delimiters>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>

            <v-sheet min-height="100" rounded="lg">
              <v-card
                class="mx-auto text-center ma-3"
                color="blue darken-2"
                dark
                max-width="800"
              >
                <v-card-text>
                  <v-sheet color="blue darken-2">
                    <v-sparkline
                      :value="value"
                      color="rgba(255, 255, 255, .7)"
                      height="100"
                      padding="24"
                      stroke-linecap="round"
                      smooth
                    >
                      <template v-slot:label="item">
                        สาย{{ item.value }}
                      </template>
                    </v-sparkline>
                  </v-sheet>
                </v-card-text>

                <v-card-text>
                  <div class="text-h4 font-weight-thin">ขาดลามาสาย</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                  <v-btn block text> Go to Report </v-btn>
                </v-card-actions>
              </v-card>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2"> </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: [1, 30, 80, 105],
      items: [
        {
          src: "https://thaigifts.or.th/wp-content/uploads/2019/09/Jintai-03-1.jpg",
        },
        {
          src: "https://thaigifts.or.th/wp-content/uploads/2019/09/Jintai-02-1.jpg",
        },
        {
          src: "https://thaigifts.or.th/wp-content/uploads/2019/09/Jintai-02-1.jpg",
        },
        {
          src: "https://thaigifts.or.th/wp-content/uploads/2019/09/Jintai-02-1.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
