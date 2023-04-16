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

</script>

<template>
  <q-list class="menu-container" >
    <q-expansion-item
      v-for=" item in props.menuItems"
      clickable
      :key="item.title"
      :label=" props.isMobile? '' : item.title "
      :label-lines="1"
      :caption=" props.isMobile? '' : item.caption "
      :caption-lines="1"
      :content-inset-level="1"
       :icon="item.icon"
      :expand-icon="item.sousmenu ? '':'null' "
      :to= "item.sousmenu ? '':item.link "
      active-class="active-class"
      :popup="props.isMobile "
      >
      <div v-if="item.sousmenu">
        <q-item v-for="it in item.sousmenu"
          :key="it.title"
          clickable
          :to="it.link"
          class= "active-class"
          >
          <q-item-section avatar >
            <q-icon :name="it.icon" />
          </q-item-section>
          <q-item-section side >
            {{ it.title   }}
          </q-item-section>
        </q-item>
      </div>

    </q-expansion-item>
  </q-list>

</template>

<style scoped lang="scss">

  $margin-top: v-bind( "` ${ props.top_height}px ` ");
  $margin-bottom: v-bind( "` ${ props.bottom_height}px ` ");
 .menu-container{
  height: calc(100% -  #{$margin-top} -  #{$margin-bottom} );
  margin-top:  #{$margin-top} ;
  margin-bottom: #{$margin-bottom} ;
  border-right: 1px solid var( --nord3)  ;
  overflow: scroll;
 }
 .active-class{
  color: inherit;
 }
</style>
