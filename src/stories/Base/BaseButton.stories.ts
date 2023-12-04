import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'

import BaseButton from '@/components/BaseButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Base/Button',
  component: BaseButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    size: 'md',
    type: 'primary'
  }, // default value
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg']
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/VcFqh8u0Qn4J8U3CVa1IjK/invoice-app?type=design&node-id=0-9067&mode=design&t=OerMHEf3057xZZj3-0'
    }
  }
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

const Template: StoryFn = (args) => ({
  components: { BaseButton },
  setup: () => ({ args }),
  template: `
  <BaseButton v-bind="args" @click="onClick">Button</BaseButton>
    `
})

export const Primary: Story = {
  render: Template,
  args: {
    type: 'primary'
  }
}

export const Secondary: Story = {
  render: Template,
  args: {
    type: 'secondary'
  }
}

export const Small: Story = {
  render: Template,
  args: {
    size: 'sm'
  }
}

export const Medium: Story = {
  render: Template,
  args: {
    size: 'md'
  }
}

export const Large: Story = {
  render: Template,
  args: {
    size: 'lg'
  }
}
