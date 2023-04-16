
<script setup>
const props = defineProps({
  menuItems: Array,
  isMobile: {
    type: Boolean,
    default: false
  },
  top_height: {
    type: Number,
    default: 100
  },
  bottom_height: {
    type: Number,
    default: 150
  }

})

props.menuItems.forEach(element => {
  console.log(' Menu Item : ', element)
})

</script>

<template>
 <q-scroll-area class="menu-container" >
  <q-list>
    <q-item
      v-for=" item in props.menuItems"
      clickable
      :to="item.link"
      :key="item.title"
      class="text-secondary q-py-md"
      >
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon"  />
    </q-item-section>

    <q-item-section v-if="!props.isMobile">
      <q-item-label>{{ item.title }}</q-item-label>
      <q-item-label class="text-secondary text-weight-light" caption>{{ item.caption }}</q-item-label>
    </q-item-section>
    </q-item>

  </q-list>
 </q-scroll-area>
≈
</template>

<style scoped lang="scss">

  $margin-top: v-bind( "` ${ props.top_height}px ` ");
  $margin-bottom: v-bind( "` ${ props.bottom_height}px ` ");
 .menu-container{
  height: calc(100% -  #{$margin-top} -  #{$margin-bottom} );
  margin-top:  #{$margin-top} ;
  margin-bottom: #{$margin-bottom} ;
  border-right: 1px solid var( --nord3)  ;
 }
 .my-expended-item{
  background-color: red;
  width: 30vw;
 }

</style>
