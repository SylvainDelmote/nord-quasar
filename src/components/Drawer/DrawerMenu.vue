
<script setup>
const props = defineProps({
  menuItems: Array
})

</script>

<template>

  <q-item
    v-for=" item in props.menuItems"
    clickable
    :to="item.link"
    :key="item.title"
  >
    <q-item-section
      v-if="item.icon"
      avatar
    >
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label caption>{{ item.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
