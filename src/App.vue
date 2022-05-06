<template>
  <div class="app">
    <form>
      <h4>Создание поста</h4>
      <input
          class="input"
          type="text"
          name="name"
          placeholder="Название">
      <input
          class="input"
          type="text"
          name="description"
          placeholder="Описание">
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'JavaScript1', body: 'Oписание поста'},
        {id: 2, title: 'JavaScrip2', body: 'Oписание поста'},
        {id: 3, title: 'JavaScript3', body: 'Oписание поста'},
        {id: 4, title: 'JavaScrip4', body: 'Oписание поста'}
      ],
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {

    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
}

.app {
  padding: 20px;
}

.post {
  padding: 15px;
  border: 2px solid greenyellow;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 1px solid darkgreen;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn {
  margin-top: 10px;
  padding: 10px;
  align-self: flex-end;
  background: none;
  color: teal;
  border: 2px solid teal;
}
</style>