<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png" /><br />
    <h1>Que voulez vous faire?</h1>
    <!-- <button @click="onSuppliersListClick()">
      Consulter la liste des fournisseurs
    </button>
    <button @click="onMapClick()">Voir la carte</button><br /> -->
    <router-link to="/">Home</router-link> |
    <router-link to="/SuppliersList">SuppliersList</router-link> |
    <router-link to="/SuppliersMap">SuppliersMap</router-link> |
    <router-link to="/supplier">Supplier</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    onSuppliersListClick() {
      alert("SuppliersList");
    },
    onMapClick() {
      alert("SuppliersMap");
    },
  },
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
</style>
