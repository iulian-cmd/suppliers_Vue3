<template>
  <div class="supp">
    <h1>{{ name }}</h1>
    <h3 v-if="status" id="red">A du stock? KO</h3>
    <h3 v-else id="green">A du stock? OK</h3>
    <h5>
      Date de derniere relevé des stocks: {{ checkedAt.toLocaleString() }}
    </h5>
  </div>
</template>
<script>
export default {
  name: "SuppliersList",
  data() {
    return {
      name: "Mon fournisseur",
      status: false, // est ce qu'il y a du stock
      checkedAt: new Date(), // date de la dernière mise à jour du stock
    };
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
</style>
