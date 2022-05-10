<template>
  <div class="post" v-for="post in posts">
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "PostList"
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid greenyellow;
  margin-top: 15px;
}

</style>