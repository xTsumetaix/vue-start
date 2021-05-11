<template>
    <div>
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
export default {
    name: "Default",
    props: {
        msg: {
            type: String,
            default: "Route kenn ich nicht"
        }
    },
}
</script>

<style scoped>

</style>
