import { Border } from './Border'

const meta = {
  title: 'WaterBear/Base components/Border',
  component: Border,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  args: {},
  render: (args) => (
    <div style={{ width: 325 }}>
      <Border {...args} />
    </div>
  ),
}
