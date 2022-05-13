<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>

.btn {
  padding: 10px;
  background: none;
  color: teal;
  border: 2px solid teal;
}

</style>