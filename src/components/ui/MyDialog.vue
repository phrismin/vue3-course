<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixins from "@/mixins/toggleMixins";

export default {
  name: "MyDialog",
  mixins: [toggleMixins]
}
</script>

<style scoped>

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: #ffffff;
  border-radius: 12px;
  min-height: 150px;
  min-width: 400px;
  padding: 20px;
}

</style>