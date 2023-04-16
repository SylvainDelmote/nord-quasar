
<script setup>
import TheDrawer from 'src/components/Layout/TheDrawer.vue'
import TheHeader from 'src/components/Layout/TheHeader.vue'
import { drawerLinkList } from 'src/components/Layout/DrawerLinkList'
</script>

<template>
  <q-layout view="lHh lpR lFf" >
    <TheHeader />
    <TheDrawer  :drawerLinkList = 'drawerLinkList' />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
