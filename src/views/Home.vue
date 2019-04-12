<template>
  <div>
    <div v-for="(alert, id) in alerts" :key="id">
      <p>Humidity: {{ alert.humidity }}</p>
      <p>Temp: {{ alert.temp }}</p>
      <p>Time: {{ alert.time.toDate() }}</p>
      <!-- <p>Sensor: {{ alert.sensorId }}</p> -->
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";

export default {
  name: "Home",
  data() {
    return {
      alerts: []
    };
  },
  // methods: {
  firestore() {
    return {
      alerts: {
        ref: db.collection("alerts").orderBy("time"),
        // objects: true,
        resolve: data => {
          console.log(data);
        },
        reject: err => {
          console.log(err);
        }
      }
    };
  }
  // },
  // created() {
  //   this.firestore();
  // }
};
</script>
