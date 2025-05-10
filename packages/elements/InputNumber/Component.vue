<template>
  <div v-if="formInstance.read">{{ value }}</div>
  <n-input-number v-else v-bind="$attrs" v-model:value="value" />
</template>

<script setup lang="ts">
import { useFormInstance } from '@vue-form-craft/hooks'

const value = defineModel<number>()

const formInstance = useFormInstance()
</script>
