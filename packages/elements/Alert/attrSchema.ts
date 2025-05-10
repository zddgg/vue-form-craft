import type { FormSchema } from '@vue-form-craft/types'

export default {
  items: [
    { label: '唯一标识', component: 'Input', name: 'name' },
    { label: '隐藏字段', component: 'Switch', name: 'hidden' },
    { label: '隐藏标签', component: 'Switch', name: 'hideLabel', initialValue: true },
    { label: '标题', component: 'Input', name: 'props.title', initialValue: '提示信息' },
    {
      label: '描述',
      component: 'TextArea',
      name: 'props.description',
      initialValue: '这是一个描述'
    },
    { label: '是否可关闭', component: 'Switch', name: 'props.closable', initialValue: true },
    { label: '显示图标', component: 'Switch', name: 'props.show-icon', initialValue: true },
    {
      label: '类型',
      component: 'Radio',
      name: 'props.type',
      props: {
        mode: 'static',
        options: [
          { label: '默认', value: 'default' },
          { label: '信息', value: 'info' },
          { label: '成功', value: 'success' },
          { label: '警告', value: 'warning' },
          { label: '错误', value: 'error' }
        ]
      },
      initialValue: 'default'
    },
    {
      label: '是否显示边框',
      component: 'Switch',
      name: 'props.bordered',
      initialValue: true
    },
    {
      label: '跑马灯效果',
      component: 'Switch',
      name: 'props.marquee',
      initialValue: false
    }
  ]
} satisfies FormSchema
