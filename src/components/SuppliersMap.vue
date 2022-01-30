<template>

 <div class="container-fluid my-5 border border-3">  

 <div id="map" class="my-5">  
 <Markers 
      v-for="marker in markers"
      :key="marker.id"
      :longitude="marker.latitude"
      :latitude="marker.longitude"
 />
</div>
</div>
</template>

<script>
import leaflet from "leaflet";
import { onMounted } from "@vue/runtime-core";
import Markers from "./Markers.vue";
import axios from "axios"

export default {
  name: 'SuppliersMap',
  components: {
    Markers,
  },
  data() {
    return {
      markers: []
    }
  },
  async mounted () {
    await axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
      // .get('https://api-suppliers.herokuapp.com/api/suppliers')
      .then(response => (this.markers = response.data))
      
  },  

  setup() {
    let mymap;
    onMounted(() => {
      mymap = leaflet.map('map').setView([45.64080539261331, 5.874018113832485], 14);
      leaflet.marker([45.64080539261331, 5.874018113832485]).addTo(mymap);

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmx5c3RlZWwiLCJhIjoiY2t2YWhkZjByMmJ6ZDJybHVvcGk5dGVkNiJ9.av_gL3YCSSYoJ-_fx1yYJw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/%22%3EMapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmx5c3RlZWwiLCJhIjoiY2t2YWhkZjByMmJ6ZDJybHVvcGk5dGVkNiJ9.av_gL3YCSSYoJ-_fx1yYJw'
      }).addTo(mymap);
    })
    // // return marker
    // var map = leaflet.map('map').setView([50.84673, 4.35247], 12);

    // var popup = marker.bindPopup('<b>Hello world!</b><br />I am a popup.');
    // popup.openPopup();
    // map.addLayer(marker);
    // console.log(map);
  },
//   data() {
//       data: "data"
//   },
} 
</script>



<style scoped>
#map { height: 90vh; }
</style>