<template>
  <div class="app">

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
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost)
      this.title = ''
      this.body = ''
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

.app {
  padding: 20px;
}


</style>