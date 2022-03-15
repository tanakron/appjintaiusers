<template>
  <v-app id="inspire">
    
    <v-app-bar
      app
      height="80px"
      absolute
      color="white"
      dark
      shrink-on-scroll
      src="https://ak.picdn.net/shutterstock/videos/7733182/thumb/2.jpg"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'blue darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="wite darken-1 ">
        <v-tab v-for="link in $store.state.links" :key="link.tile">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>{{ link.icon }} </v-icon>
              {{ link.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="white darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="blue lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  
  data: () => ({}),
};
</script>
