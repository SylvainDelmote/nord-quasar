<script setup>
import { useQuasar } from 'quasar'
import { ref, watch } from 'vue'

const $q = useQuasar()
const pluginIsEnabled = Boolean($q.dark.mode)
const isDark = ref($q.dark.isActive)

const toggleDarkMode = () => {
  $q.dark.toggle()
}

watch(isDark, toggleDarkMode)

</script>

<template>
  <q-toggle
  v-model="isDark"
  color="accent"
  keep-color
  checked-icon="dark_mode"
  unchecked-icon="light_mode"
  :disable = !pluginIsEnabled
  >
  <q-tooltip >
    {{ isDark ? "Dark Mode" :" Light Mode"}}
  </q-tooltip>
  </q-toggle>
</template>
