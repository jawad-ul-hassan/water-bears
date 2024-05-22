import { RadixNetworkConfig } from '@radixdlt/radix-dapp-toolkit';

const network = RadixNetworkConfig["Stokenet"];

if (!network) throw new Error('Invalid network')

const networkConfig = {
  Mainnet: {
    dAppDefinitionAddress:
      'account_rdx12x2n7jr3cg5dduen9e9sshlkw7uz962jr05erlcxp56pkt04rzv476',
    addresses: {
      waterBearComponent:
        'component_rdx1cz8sufk6wunsnnnh5ckrhrn3n6stl4ve6dctrphaa8zf3q06kle6hv',
      stakePoolComponent:
        'component_rdx1cz8sufk6wunsnnnh5ckrhrn3n6stl4ve6dctrphaa8zf3q06kle6hv',
      waterBearResource:
        'resource_rdx1ngzqt45zkhrrhetevsuhhnp09fvh6sa86gfskx7wekme7qntg87yrm',
    },
  },
  Stokenet: {
    dAppDefinitionAddress:
      'account_tdx_2_129nx5lgkk3fz9gqf3clppeljkezeyyymqqejzp97tpk0r8els7hg3j',
    addresses: {
      waterBearComponent:
        'component_tdx_2_1cp5a2n5y9h2neapph95t86d6g5tmvjshzk6vze0a47zkl5wuk7zq0v',
      stakePoolComponent:
        'component_tdx_2_1crsautj4ktwsw42ve6703ruer4v946krxsqq70nsd2spmexd9svtsd',
      waterBearResource:
        'resource_tdx_2_1ntvqksstn4hkte96sys62hkal5g5nv6hfvc4tj5mu9pl8g74echdh8',
    },
  },
}[network.networkName]

if (!networkConfig)
  throw new Error(
    `Could not find addresses for network: ${network.networkName}`
  )

export const config = {
  network,
  ...networkConfig,
}

console.log(JSON.stringify(config, null, 2))
