<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Sensors</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
    </v-toolbar>
    <v-data-table :headers="headers" :items="sensors" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.bedNo }}</td>
        <td>{{ props.item.createdAt.toDate() }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  name: "Sensors",
  data() {
    return {
      sensors: [],
      headers: [
        { text: "Sensor", value: "id" },
        { text: "Bed", value: "bed" },
        { text: "Added At", value: "createdAt" }
      ]
    };
  },
  firestore() {
    return {
      sensors: {
        ref: db.collection("sensors")
      }
    };
  }
};
</script>
