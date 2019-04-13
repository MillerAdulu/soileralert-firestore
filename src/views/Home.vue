<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Soiler Alerts</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
    </v-toolbar>
    <v-data-table :headers="headers" :items="alerts" class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.bed }}</td>
        <td>{{ props.item.humidity }}</td>
        <td>{{ props.item.temp }}</td>
        <td>{{ props.item.time.toDate() }}</td>
        <td>
          <v-btn @click="handled(props.item)" color="green" class="white--text"
            >Handled!</v-btn
          >
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  name: "Home",
  data() {
    return {
      alerts: [],
      headers: [
        { text: "Bed", value: "bed" },
        { text: "Humidity", value: "humidity" },
        { text: "Temperature", value: "temp" },
        { text: "Time", value: "time" },
        { text: "Actons", value: "action" }
      ]
    };
  },
  firestore() {
    return {
      alerts: {
        ref: db.collection("alerts").where("handled", "==", false)
      }
    };
  },
  methods: {
    handled(alert) {
      db.collection("alerts")
        .doc(alert.id)
        .update({
          handled: true
        });
    }
  }
};
</script>
