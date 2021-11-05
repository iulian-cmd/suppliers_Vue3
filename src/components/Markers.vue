<template>
<div>
 
  </div>
</template>
<script>

export default {
  name: "Markers",
  props: ["latitude","longitude"],
 
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
