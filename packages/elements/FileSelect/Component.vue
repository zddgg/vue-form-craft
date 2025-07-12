<template>
  <el-upload
    v-model:file-list="fileList"
    :action
    :multiple
    :limit
    :drag
    :name
    :listType
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-exceed="handleExceed"
    :auto-upload="false"
    :accept="accept?.join(', ')"
    @change="handleChange"
    style="width: 100%;"
  >
    <template v-if="listType === 'text'">
      <template v-if="drag">
        <div style="min-width: 300px">
          <Icon class="el-icon--upload" name="upload" />
          <div class="el-upload__text">
            拖拽文件到此处上传 <br />
            或<em>点击上传</em>
          </div>
        </div>
      </template>

      <el-button v-else type="primary">{{ btnText }}</el-button>
    </template>

    <template v-if="listType === 'picture-card'">
      <Icon name="add" />
    </template>

    <template #tip v-if="tip">
      <div class="el-upload__tip">{{ tip }}</div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
import Icon from '@vue-form-craft/icons'

interface Props {
  action: string
  multiple?: boolean
  btnText?: string
  tip?: string
  limit?: number
  drag?: boolean
  name?: string
  listType?: 'text' | 'picture-card'
  accept?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  btnText: '点击上传',
  limit: 3,
  name: 'file',
  listType: 'text'
})

const fileList = defineModel<(UploadUserFile & { path?: string })[]>({
  default: () => []
})

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(`文件数量超出限制，最多可选择 ${props.limit} 个文件`)
}

const handleChange: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
  fileList.value = uploadFiles.map(file => {
    const customFile = file
    if (window.electron && customFile.raw) {
      customFile.path = window.electron.getPathForFile(customFile.raw)
    }
    return customFile
  })
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(uploadFile.name, `确定移除文件？`).then(
    () => true,
    () => false
  )
}
</script>
