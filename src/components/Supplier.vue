<template>
  <div class="container main_supp">
    <div class="supp">
      this is from suplier's component
      <h1>Liste des fournisseurs</h1>
      <h2>{{ supplier.name }}</h2>
      <h3 v-if="supplier.status" id="red">A du stock? KO</h3>
      <h3 v-else id="green">A du stock? OK</h3>
      <h5>
        Date de derniere relevé des stocks:
        {{ timeFormat(supplier.checkedAt) }}
      </h5>
    </div>
  </div>
</template>
<script>
import { format } from "timeago.js";

export default {
  name: "Supplier",
  props: ["supplier"],

  // meta:{
  //   title:"Suppliers"
  // }
  computed: {
    // a computed getter
    timeFormat() {
      return format(this.supplier.checkedAt); //je l'utilise dans le template en haut
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#green {
  color: green;
}
#red {
  color: red;
}
.main_supp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.supp {
  margin: 10px;
  border: thick double #f9f9f9;
  background-color: #7fc8f8;
  width: 320;
}
</style>
