<template>
  <div class="supp">
    qgqgdsg
    <h1>Liste des fournisseurs</h1>
    <h2>{{supplier.name}}</h2>
    <h3 v-if="supplier.status" id="red">A du stock? KO</h3>
    <h3 v-else id="green">A du stock? OK</h3>
    <h5>Date de derniere relevé des stocks: {{supplier.checkedAt}}</h5>
  </div>
</template>
<script>
export default {
  name: "Supplier",
  props: ["supplier"]
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
</style>
