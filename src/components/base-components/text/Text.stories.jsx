import { Text } from './Text'

const meta = {
  title: 'WaterBear/Base components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Title = {
  args: {
    children: `Welcome, Matt!`,
    variant: 'title',
  },
}

export const Subtitle = {
  args: {
    children: `A toy Web3 dApp on the Radix Network where the transactions with the Radix Wallet are real, but the tokens have no value`,
    variant: 'subtitle',
  },
}

export const Header = {
  args: {
    children: `WaterBear Token Dispenser`,
    variant: 'header',
  },
}

export const Paragraph = {
  args: {
    children: `Use GC Tokens to buy bags of candies! How many you get in each bag depends on the market price of sugar.`,
    variant: 'paragraph',
  },
}
