<script setup>
import { ref } from 'vue'
const props = defineProps({
  height: {
    type: Number,
    default: 150
  },
  isMobile: {
    type: Boolean,
    default: false
  }
})

const avatar = ref('https://cdn.quasar.dev/img/boy-avatar.png')

</script>

<template>
  <RouterLink to="/options">
    <div v-if="props.isMobile" class="absolute-bottom  cursor-pointer  q-pa-md panel-wrapper flex items-center q-gutter-md">
    <q-avatar v-if=avatar size="36px" class="q-ma-sm">
      <img :src=avatar >
    </q-avatar>

    </div>

    <div  v-else  class="absolute-bottom  cursor-pointer  q-pa-md panel-wrapper flex items-center q-gutter-md">
    <q-avatar v-if=avatar size="56px" class="q-mb-sm">
      <img :src=avatar >
    </q-avatar>
    <div>
      <div class="text-weight-bold">Razvan Stoenescu</div>
      <div>@rstoenescu</div>
    </div>
    </div>
</RouterLink>
</template>

<style >
.panel-wrapper{
  height: v-bind( "` ${ props.height}px ` ");
  cursor: pointer;
}
</style>
