<template>
  <div class="container">
      <header class="py-5 bg-image-full" style="background-image: url('./assets/unsplashback001.jpg')">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src="./assets/Spirulina_800x365.jpg" alt="..." />
    <div class="routerlink">
      <!-- <button @click="onSuppliersListClick()">
      Consulter la liste des fournisseurs    </button> -->
    
      <!-- <button @click="onMapClick()">Voir la carte</button><br /> -->
      <router-link to="/">Home</router-link> |
      <router-link to="/SuppliersList">SuppliersList</router-link> |
      <router-link to="/SuppliersMap">SuppliersMap</router-link>
      <!-- <router-link to="/supplier">Supplier</router-link> -->
      <router-view />
    </div>
            </div>
        </header>
  </div>
</template>

<script>
import SuppliersMap from "./components/SuppliersMap.vue"


export default {
  name: "App",
  component: {
    SuppliersMap,
  },
  // methods: {
  //   onSuppliersListClick() {
  //     alert("SuppliersList");
  //   },
  //   onMapClick() {
  //     alert("SuppliersMap");
  //   },
  // },
  
  // methods: {
  //   getList() {
  //     this.axios.get(api).then((response) => {
  //       console.log(response.data)
  //     })
    // }
};
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
.router-link-active {
  color: red;
}

.routerlink {
  font: small-caps 1.1em Georgia, large, serif;
}
</style>
