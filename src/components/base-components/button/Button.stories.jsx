import { Button } from './Button'

const meta = {
  title: 'WaterBear/Base components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  args: {
    children: 'Send to the Radix Wallet',
    disabled: false,
    icon: 'external-link',
  },
}

export const Disabled = {
  args: {
    children: 'Send to the Radix Wallet',
    disabled: true,
    icon: 'external-link',
  },
}

export const WithoutIcon = {
  args: {
    children: 'Send to the Radix Wallet',
    disabled: false,
    icon: 'none',
  },
}
