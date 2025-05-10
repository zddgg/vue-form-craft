import type { FormSchema } from '@vue-form-craft/types'

export default {
  items: [
    {
      label: 'label宽度',
      component: 'InputNumber',
      name: 'labelWidth',
      props: {
        min: 60,
        unit: 'px',
        step: 10
      },
      initialValue: 150
    },
    {
      label: 'label对齐方式',
      component: 'Radio',
      name: 'labelAlign',
      props: {
        mode: 'static',
        options: [
          { label: '左对齐', value: 'left' },
          { label: '右对齐', value: 'right' }
        ]
      },
      initialValue: 'left'
    },
    {
      label: 'label显示位置',
      component: 'Radio',
      name: 'labelPlacement',
      props: {
        mode: 'static',
        options: [
          { label: '左置', value: 'left' },
          { label: '上置', value: 'top' }
        ]
      },
      initialValue: 'top'
    },
    {
      label: 'label后缀',
      component: 'Input',
      name: 'labelSuffix'
    },
    {
      label: '表单组件尺寸',
      component: 'Radio',
      name: 'size',
      props: {
        mode: 'static',
        options: [
          { label: '默认', value: 'default' },
          { label: '较小', value: 'small' },
          { label: '中等', value: 'medium' },
          { label: '较大', value: 'large' }
        ]
      },
      initialValue: 'medium'
    },
    {
      label: '禁用整个表单',
      component: 'Switch',
      name: 'disabled'
    },
    {
      label: '隐藏必填星号',
      component: 'Switch',
      name: 'hideRequiredAsterisk'
    },
    { label: 'label加粗', component: 'Switch', name: 'labelBold' },
    {
      label: '自动滚动到校验失败的第一项',
      component: 'Switch',
      name: 'scrollToError'
    }
  ]
} satisfies FormSchema
