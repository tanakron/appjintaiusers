<template>
<v-card>
   <v-timeline>
    <v-timeline-item>timeline item</v-timeline-item>
    <v-timeline-item></v-timeline-item>
    <v-timeline-item>timeline item</v-timeline-item>
    <v-timeline-item></v-timeline-item>
      <v-timeline-item>timeline item</v-timeline-item>
    <v-timeline-item></v-timeline-item>
  </v-timeline>
</v-card>
 
  
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
};
</script>

<style></style>
