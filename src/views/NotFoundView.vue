<script>
export default {
    name: 'NotFoundView'
}
</script>
<template>
    <div>

        <h1>Error 404 | Not Found</h1>

        <router-link :to="{ name: 'home' }">Now, back to HomePage 🔃</router-link>
    </div>
</template>

<style lang="scss" scoped></style>