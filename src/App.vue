<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <SuppliersList/>
  <SuppliersMap/>
  <button @click="onSuppliersListClick()">click Suppliers</button>
  <button @click="onMapClick()">click Map</button>
</template>

<script>
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  name: 'App',
  components: {
    SuppliersList,
    SuppliersMap
  },
  methods:{
    onSuppliersListClick(){
    alert("SuppliersList")
  },
  onMapClick(){
    alert("SuppliersMap")
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
