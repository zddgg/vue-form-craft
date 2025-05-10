<template>
  <n-modal v-model:show="visible" :on-after-leave="() => (formValues = {})">
    <n-card
      style="width: 70%; margin-top: 10vh"
      :title="locale.actions.previewForm"
      :bordered="false"
      :closable="true"
      :header-style="{ textAlign: 'center', paddingTop: '16px', paddingBottom: '16px' }"
      @close="visible = false"
    >
      <n-tabs v-model:value="tabKey" type="line" animated>
        <n-tab-pane tab="编辑模式" name="edit" display-directive="show:lazy">
          <FormRender
            v-model="formValues"
            :schema="designInstance.schema"
            ref="formRef"
            :schemaContext="designInstance.schemaContext"
            :style="{ minHeight: '200px', padding: '20px' }"
          />
          <div style="text-align: center">
            <el-button @click="handleSubmit" type="primary">模拟提交</el-button>
            <el-button @click="handleReset" type="primary" plain>重置</el-button>
          </div>
        </n-tab-pane>

        <n-tab-pane tab="阅读模式" name="read" display-directive="show:lazy">
          <FormRender
            v-model="formValues"
            :schema="{ ...designInstance.schema, labelSuffix: ':' }"
            :schemaContext="designInstance.schemaContext"
            :style="{ minHeight: '200px', padding: '20px' }"
            read
          />
        </n-tab-pane>

        <n-tab-pane tab="联动变量" name="context" display-directive="show:lazy">
          <p>实时预览的联动变量，在JsonSchema中可以通过双大括号模版语法使用，用于触发各种联动</p>
          <JsonEdit.render v-model="context" style="height: 60vh" :key="tabKey" />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FormRender from '@vue-form-craft/form-render'
import type { FormInstance } from '@vue-form-craft/types'
import { useDesignInstance, useElements, useLocale } from '@vue-form-craft/hooks'

const designInstance = useDesignInstance()

const { JsonEdit } = useElements()

const tabKey = ref('edit')

const formRef = ref<FormInstance>()

const formValues = ref({})

const visible = defineModel<boolean>()

const context = computed(() => formRef.value?.context)

const locale = useLocale()

const handleSubmit = async () => {
  await formRef.value?.validate()

  alert(JSON.stringify(formValues.value, null, 2))
}

const handleReset = async () => {
  formRef.value?.resetFields()
}
</script>

<style scoped lang="scss">
.formDesign-actions {
  /* padding: 10px; */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .formDesign-actions-left,
  .formDesign-actions-right {
    button {
      margin-bottom: 10px;
    }
  }

  .vueCode {
    height: 60vh;
  }
}
</style>
