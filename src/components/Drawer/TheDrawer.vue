<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import * as Drawer from 'components/Drawer/drawer'
const drawerOpen = ref(true)

const $q = useQuasar()
const props = defineProps({
  menuItems: Array
})

const isMobile = computed(() => {
  return $q.screen.lt.md
})

</script>

<template>
<q-drawer v-model="drawerOpen" :mini="isMobile"  persistent behavior="desktop" bordered>
  <Drawer.Header :height=150   :isMobile="isMobile"/>
  <Drawer.Menu :menuItems = props.menuItems  :isMobile="isMobile" />
  <Drawer.UserPanel :height=150  :isMobile="isMobile" />

</q-drawer>

</template>
