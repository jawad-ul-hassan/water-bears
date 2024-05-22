import { Tooltip } from './Tooltip'

const meta = {
  title: 'WaterBear/Base components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  args: {
    children: `You have a transaction waiting! Open your 
  Radix Wallet mobile app to review and approve.`,
  },
  render: (args) => (
    <div style={{ width: 417 }}>
      <Tooltip {...args} />
    </div>
  ),
}
