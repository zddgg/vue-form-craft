<template>
  <n-alert v-bind="$attrs" style="width: 100%">
    <template v-if="!$attrs.marquee">
      {{ $attrs.description }}
    </template>
    <template v-else>
      <n-marquee>
        {{ $attrs.description }}
      </n-marquee>
    </template>
  </n-alert>
</template>
