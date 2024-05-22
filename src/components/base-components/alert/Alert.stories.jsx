import { Alert } from './Alert'
import { Button } from '../button'

const meta = {
  title: 'WaterBear/Base components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  render: (args) => (
    <div style={{ width: 864 }}>
      <Alert {...args} />
    </div>
  ),

  args: {
    variant: 'info',
    title: 'Uh oh!',
    onClose: () => {},
    text: `You don’t have any XRD tokens in any of the accounts you shared. XRD
  tokens are required to pay the transaction fee for all transactions on the
  Radix Network.`,
    button: <Button icon="external-link">Get some XRD</Button>,
  },
}
