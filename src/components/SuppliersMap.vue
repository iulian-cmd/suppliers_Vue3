<template>
  <div class="supp">
    <h1>La carte des fournisseurs</h1>
    <LMap class="map" ref="map" :zoom="zoom" :center="center">
      <LTileLayer :url="url"></LTileLayer>
      <!-- <LMarker :lat-lng="markerLatLng"></LMarker> -->
    </LMap>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";


export default {
  // name: "SuppliersMap",
  component: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 6,
      center: [51.505, -0.159],
      bounds: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.supp {
  position: relative;
}
.map {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: aquamarine; */
  /* overflow: hidden; */
  border: 2px solid black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
