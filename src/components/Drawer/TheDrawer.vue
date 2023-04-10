<script setup>
import { ref } from 'vue'
import * as Drawer from 'components/Drawer/drawer'
const drawerOpen = ref(true)

const props = defineProps({
  menuItems: Array

})

</script>

<template>
<q-drawer v-model="drawerOpen" bordered>
  <Drawer.Header />
  <Drawer.Menu :menuItems = props.menuItems />
  <Drawer.UserPanel />

</q-drawer>

</template>
