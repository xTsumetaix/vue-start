<template>
    <div class="">
        <h1>{{ title }}</h1>
        <!--p>{{ firstname }} {{ lastname }}</p-->
        <p>{{ name }}</p>
        <p v-if="testVar === 1">Wert ist eins</p>
        <p v-else>Wert ist nicht 1</p>
        <ul>
            <li v-for="(item, index) in persons" :key="index">
                {{ item.firstname }} {{ item.lastname }}
                <b-button class="btn-sm ml-2" @click="removePerson(index)">
                    <font-awesome-icon icon="trash-alt" class="mr-1"/>
                    Löschen
                </b-button>
            </li>
        </ul>
        <b-form>
            <b-input-group class="">
                <label for="text">Vorname: </label>
                <b-input id="text" v-model="firstname"/>
            </b-input-group>
            <b-input-group class="">
                <label for="text">Nachname: </label>
                <b-input id="text" v-model="lastname"/>
            </b-input-group>
            <b-button @click="addPerson(firstname, lastname)">Add Person</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: "Test",
    props: ['title'],
    data() {
        return {
            testVar: "Paul",
            persons: [],
            firstname: "",
            lastname: "",
            person: {
                firstname: "",
                lastname: "",
            }
        }
    },
    computed: {
        // klassisches js
        name: function () {
            return this.firstname + " " + this.lastname
        },
    },
    methods: {
        addPerson(vorname, nachname) {
            this.person = {
                firstname: vorname,
                lastname: nachname,
            }
            console.info(this.person)
            this.persons.push(this.person)
        },
        removePerson(index) {
            this.persons.splice(index, 1)
        }
    }
}
</script>

<style scoped>

</style>
