<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Previous Alerts</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
    </v-toolbar>
    <v-data-table :headers="headers" :items="alerts" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.bed }}</td>
        <td>{{ props.item.humidity }}</td>
        <td>{{ props.item.gas }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  name: "Previous",
  data() {
    return {
      alerts: [],
      headers: [
        { text: "Bed", value: "bed" },
        { text: "Humidity", value: "humidity" },
        { text: "Gas", value: "gas" }
      ]
    };
  },
  firebase: {
    alerts: db.ref("alerts")
  }
};
</script>
