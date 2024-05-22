import { Card } from './Card'
import { Text } from '../text'

const meta = {
  title: 'WaterBear/Base components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  args: {
    children: <Text variant="header">WaterBear Token Dispenser</Text>,
  },
}
