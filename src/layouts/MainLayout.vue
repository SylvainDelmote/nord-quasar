
<script setup>
import DarkModeSwitch from 'src/components/Global/DarkModeSwitch.vue'
import TheDrawer from 'src/components/Drawer/TheDrawer.vue'
const menuItems = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/index'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    sousmenu: {
      title: 'Github',
      caption: 'github.com/quasarframework',
      icon: 'code',
      link: '/index'
    }
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/index'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: '/index'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/index'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: '/index'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/index'
  }
]

</script>

<template>
  <q-layout view="lHh lpR lFf" >
    <q-header class="flex justify-end" >
        <DarkModeSwitch/>
    </q-header>

  <TheDrawer  :menuItems = 'menuItems' />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
