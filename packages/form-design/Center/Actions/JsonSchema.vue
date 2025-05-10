<template>
  <n-modal v-model:show="visible" :on-after-leave="() => (formValues = {})">
    <n-card
      style="width: 70%; margin-top: 10vh"
      :title="locale.actions.previewJson"
      :bordered="false"
      :closable="true"
      :header-style="{ textAlign: 'center', paddingTop: '16px', paddingBottom: '16px' }"
      @close="visible = false"
    >
      <n-tabs default-value="edit" type="line" animated class="demo-tabs">
        <n-tab-pane tab="在线编辑" name="edit">
          <JsonEditor v-model="json" style="height: 70vh" @blur="onBlur" />
        </n-tab-pane>
        <n-tab-pane tab="生成ts文件" name="ts">
          <CodeHighLight style="height: 70vh" language="ts" :code="tsJsonSchema(json)" />
        </n-tab-pane>
        <n-tab-pane tab="生成js文件" name="js">
          <CodeHighLight style="height: 70vh" language="js" :code="jsJsonSchema(json)" />
        </n-tab-pane>
        <n-tab-pane tab="帮助" name="help">
          <CodeHighLight style="height: 70vh" language="json" :code="schemaHelp" />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { CodeHighLight } from '@vue-form-craft/components'
import { changeItems } from '@vue-form-craft/utils'
import { schemaHelp, tsJsonSchema, jsJsonSchema } from './config'
import { useDesignInstance, useElements, useLocale } from '@vue-form-craft/hooks'

const designInstance = useDesignInstance()

const locale = useLocale()

const elements = useElements()

const JsonEditor = elements.JsonEdit?.render

const json = computed({
  get() {
    return designInstance.schema
  },
  set(value) {
    if (value.items) {
      designInstance.updateSchema(value)
    }
  }
})

const formValues = ref({})

const visible = defineModel<boolean>()

const onBlur = (editor: any) => {
  designInstance.updateSchema({
    ...designInstance.schema,
    items: changeItems(designInstance.schema.items)
  })
  editor.repair()
}
</script>
