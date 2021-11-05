<template>
  <div class="list_supp">
    <table class="table table-striped table-bordered">
    <thead>
        <tr>
          <th class="cell">Supplier</th>
          <th class="cell">Stock Status</th>
          <th class="cell">Checked at</th>
        </tr>
      </thead>
    </table>
    <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :name="supplier.name"
      :checkedAt="supplier.checkedAt"
      :status="supplier.status"
    />
  </div>
</template>

<script>
import Supplier from "./Supplier.vue";
import axios from "axios"

export default {
  name: "SuppliersList",
  components: {
    Supplier,
  },
  data () {
    return {
      suppliers: []
    }
  },
  async mounted () {
    await axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
      // .get('https://api-suppliers.herokuapp.com/api/suppliers')
      .then(response => (this.suppliers = response.data))
      
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

.list_supp {
  background-color: #5aa9e6;
}

.cell{
  width: 33%;
}
</style>
