<template>
  <n-card v-bind="$attrs">
    <FormItemGroup :list="children" />
  </n-card>
</template>

<script setup lang="ts">
import { FormItemGroup } from '@vue-form-craft/components'
import type { FormItemType } from '@vue-form-craft/types'

defineProps<{
  children: FormItemType[]
}>()
 
</script>