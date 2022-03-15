<template>
  <v-footer
    dark
    padless
 
  >
    <v-card
      class="indigo lighten-1 flex "
     
      flat
      tile
    >
      <v-card-title class="teal primary lighten-1 pa-1" >
        <strong class=" "> JINTAI CHITUAN 
</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in $store.state.iconsfooter"
          :key="icon.icons"
          class="mx-4"
          dark
          icon
           :to="icon.to"
        >
          <v-icon size="24px">
            {{icon.icons }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
  <strong>JINTAI APP </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
