<template>
  <div class="contact">
	<h1>{{ msg }}</h1>
	<h1>{{ num }}</h1>
	<h1>{{ yrd }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  props: {
    msg: String,
	num: String,
	yrd: String
  }
}
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
</style>
