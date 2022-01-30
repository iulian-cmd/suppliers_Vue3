<template>
 
		<table class="table table-dark table-striped mt-5 mb-1">
			<thead>
				<tr>
          <th>Supplier</th>
          <th>Stock Status</th>
          <th>Checked at</th>
        </tr>
      </thead>
      <tbody>
    <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :name="supplier.name"
      :status="supplier.status"
      :checkedAt="supplier.checkedAt"
    />
</tbody>
</table>
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
