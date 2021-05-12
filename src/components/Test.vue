<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Name: {{ name }}</p>
    <p v-if="testVar === 1">Wert ist eins</p>
    <p v-else>Wert ist nicht eins </p>
      <ul>
    <li v-for="(item, index) in persons" :key="index">
      {{ item.firstName }} {{ item.lastName }}
      <b-button class="btn-sm" @click="removePerson(index)">
        <font-awesome-icon icon="trash-alt" class="mr-1" />
        Löschen
      </b-button>
    </li>
  </ul>
    <b-form>
      <b-input-group class="col-6">
        <label for="firstName" >Vorname: </label>
        <b-input id="firstName" v-model="firstName" />
      </b-input-group>
      <b-input-group class="col-6">
        <label for="lastName" >Nachname: </label>
        <b-input id="lastName" v-model="lastName" />
      </b-input-group>
      <b-button @click="addPerson(firstName, lastName)">Add Person</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ['title'],
  data() {
    return {
      testVar: 1,
      persons: [],
      firstName: "",
      lastName: "",
      person: {
        firstName: "",
        lastName: ""
      }
    }
  },
  methods: {
    addPerson(vorname, nachname) {
      this.person = {
        firstName: vorname,
        lastName: nachname
      }
      this.persons.push(this.person);
    },
    removePerson(index) {
      this.persons.splice(index, 1);
    },
  },
  computed: {
     name: function () {
      return this.firstName + " " + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>
