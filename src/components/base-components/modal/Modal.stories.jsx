import { Modal } from './Modal'
import { Text } from '../text'

const meta = {
  title: 'WaterBear/Base components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Primary = {
  args: {
    show: true,
    children: (
      <>
        <Text variant="header" className="mb-1">
          You bought a WaterBear!
        </Text>
        <Text variant="paragraph">
          The WaterBear is an NFT - take a look in your Radix Wallet in the
          NFT section of “Main Main Account”.
        </Text>
      </>
    ),
  },
}
