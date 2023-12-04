<template>
  <button :class="['storybook-button', ...className]">Button</button>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  type: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'primary',
  size: 'md'
})

const className = computed(() => {
  const type =
    props.type === 'primary' ? 'storybook-button--primary' : 'storybook-button--secondary'

  const size =
    props.size === 'md'
      ? 'storybook-button--medium'
      : props.size === 'sm'
        ? 'storybook-button--small'
        : 'storybook-button--large'

  return [type, size]
})
</script>
<style lang="css" scoped>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}

.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}

.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
