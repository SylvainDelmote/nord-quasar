<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import * as Drawer from 'components/Drawer/drawer'
const drawerOpen = ref(true)
const $q = useQuasar()

const props = defineProps({
  drawerLinkList: Array
})

const isMobile = computed(() => {
  return $q.screen.lt.md
})

const headerHeight = 100
const userPanelHeight = 100

</script>

<template>
<q-drawer  id="drawer" v-model="drawerOpen" :mini="isMobile"
  persistent behavior="desktop"  >
  <Drawer.Header :height=headerHeight   :isMobile="isMobile"/>
  <Drawer.Menu :top_height="headerHeight" :bottom_height=userPanelHeight :menuItems = props.drawerLinkList  :isMobile="isMobile" />
  <Drawer.UserPanel :height=userPanelHeight  :isMobile="isMobile" />
</q-drawer>
</template>

<style  lang="scss">

#drawer{
background-image: url('assets/drawer_bg.svg');
background-repeat: no-repeat;
background-position: center;
background-size: 120%;
}

</style>
