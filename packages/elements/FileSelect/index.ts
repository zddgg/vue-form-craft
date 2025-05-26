import Icon from '@vue-form-craft/icons'
import { defineAsyncComponent, h } from 'vue'
import type { FormElement } from '@vue-form-craft/types'
import attrSchema from './attrSchema'

export default {
  title: '文本选择',
  component: 'FileSelect',
  render: defineAsyncComponent(() => import('./Component.vue')),
  icon: h(Icon, { name: 'upload' }),
  type: 'business',
  order: 10,
  attrSchema
} satisfies FormElement
