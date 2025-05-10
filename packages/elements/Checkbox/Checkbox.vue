<template>
  <div v-if="formInstance.read">
    {{
      value?.map((item) => currentOptions.find((v) => v[valueKey] === item)?.[labelKey]).join('、')
    }}
  </div>
  <template v-else>
    <div v-if="!currentOptions.length && !loading" style="font-size: 12px">暂无选项</div>

    <n-checkbox-group v-bind="$attrs" v-model:value="value" @update:value="selectChange" v-loading="loading">
      <n-checkbox
        v-for="item in currentOptions"
        :key="item[valueKey]"
        :label="item[labelKey]"
        :value="item[valueKey]"
      />
    </n-checkbox-group>
  </template>
</template>

<script setup lang="ts">
import { type CheckboxGroupValueType } from 'element-plus'
import type { Direction, OptionType, SelectProps } from '@vue-form-craft/types'
import { useFormInstance, useSelect } from '@vue-form-craft/hooks'
import { watch } from 'vue';

const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
  mode: 'static',
  labelKey: 'label',
  valueKey: 'value',
  name: '',
  multiple: true
})

const value = defineModel<CheckboxGroupValueType>()

const formInstance = useFormInstance()

const { currentOptions, selectChange, loading } = useSelect(props)

watch(value, selectChange)
</script>