<template>
  <n-modal v-model:show="visible">
    <n-card
      style="width: 70%; margin-top: 10vh"
      :title="locale.actions.previewVueCode"
      :bordered="false"
      :closable="true"
      :header-style="{ textAlign: 'center', paddingTop: '16px', paddingBottom: '16px' }"
      @close="visible = false"
    >
      <n-tabs default-value="ts" type="line" animated>
        <n-tab-pane tab="Typescript" name="ts">
          <CodeHighLight style="height: 70vh" :code="tsVue(designInstance.schema)" language="vue" />
        </n-tab-pane>
        <n-tab-pane tab="Javascript" name="js">
          <CodeHighLight style="height: 70vh" :code="jsVue(designInstance.schema)" language="vue" />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { CodeHighLight } from '@vue-form-craft/components'
import { tsVue, jsVue } from './config'
import { useDesignInstance, useLocale } from '@vue-form-craft/hooks';

const designInstance = useDesignInstance()

const locale = useLocale()

const visible = defineModel<boolean>()
</script>
