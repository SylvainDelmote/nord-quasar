<script setup>
import { ref } from 'vue'

const showTooltip = ref(false)

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

</script>

<template>
  <RouterLink to="/">
  <div v-if="props.isMobile" class=" header-wrapper  q-py-md">
    <q-avatar text-color="accent">
      <div class="text-h4">     {{ $t('titre').charAt(0)}}  </div>
      <q-tooltip v-model="showTooltip"> {{$t('titre')}} </q-tooltip>
    </q-avatar>
  </div>

    <div  v-else class=" header-wrapper q-pa-md">
      <div class="text-h5">     {{ $t('titre') }}  </div>
      <div class="text-overline">   {{ $t("soustitre") }}  </div>
    </div>
    </RouterLink>
</template>

<style scoped lang="scss">
.header-wrapper{
  height: v-bind( "` ${ props.height}px ` ");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>
