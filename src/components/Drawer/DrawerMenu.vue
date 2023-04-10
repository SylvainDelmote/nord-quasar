
<script setup>
const props = defineProps({
  menuItems: Array,
  isMobile: {
    type: Boolean,
    default: false
  }

})

</script>

<template>
 <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; ">
    <q-item
    v-for=" item in props.menuItems"
    clickable
    :to="item.link"
    :key="item.title"
    class="text-secondary"
  >
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon"  />
    </q-item-section>

    <q-item-section v-if="!props.isMobile">
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label class="text-secondary text-weight-light" caption>{{ item.caption }}</q-item-label>
    </q-item-section>
  </q-item>

 </q-scroll-area>

</template>
