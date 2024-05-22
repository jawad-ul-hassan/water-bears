import { Input } from './Input'

const meta = {
  title: 'WaterBear/Base components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const WithTokens = {
  args: {
    value: 0,
    children: 'GC Tokens',
    tokenBalance: '100',
  },
}

export const WithoutTokens = {
  args: {
    value: 0,
    children: 'GC Tokens',
  },
}

export const Disabled = {
  args: {
    value: 0,
    children: 'GC Tokens',
    disabled: true,
    tokenBalance: '100',
  },
}

export const Error = {
  args: {
    value: 200,
    children: 'GC Tokens',
    disabled: false,
    tokenBalance: '100',
    error: 'Not enough Tokens in account',
  },
}

export const Hint = {
  args: {
    value: 200,
    children: 'GC Tokens',
    disabled: false,
    hint: 'Includes 50% GC Member Card discount',
  },
}

export const ComplexLabel = {
  args: {
    value: 200,
    children: (
      <div>
        Candies
        <div>
          <strong>Estimated</strong> at market price
        </div>
      </div>
    ),
    disabled: false,
    hint: 'Includes 50% GC Member Card discount',
  },
}
