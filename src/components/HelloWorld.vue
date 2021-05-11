<template>
    <div class="hello">
        <h1>Na hallo: {{ msg }}</h1>
        <p>{{ text }}</p>
        <!-- hier Text-Component plazieren -->
        <Test title="das ist die Test-Komponente" />
    </div>
</template>

<script>
import Test from "./Test";
export default {
    name: 'HelloWorld',
    components: {Test},
    props: ['msg','text'],
    /*
      props: {
        msg: String
      }
    */
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
