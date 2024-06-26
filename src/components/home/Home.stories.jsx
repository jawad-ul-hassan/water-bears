import { RadixDappToolkit } from "@radixdlt/radix-dapp-toolkit";

import { Home } from "./Home";
import { RadixProvider } from "@/app/radix/RadixProvider";

const rdt = RadixDappToolkit({
  networkId: 34,
  dAppDefinitionAddress:
    "account_tdx_22_12xejltztnaqmzzr8elu4ac7rhkwq30my85gh0ftv0prtmx2zn599l7",
});

const meta = {
  title: "WaterBear/Pages/Home",
  component: Home,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
};

export default meta;

export const NotConnected = {
  render: () => (
    <RadixProvider value={rdt}>
      <div style={{ width: "100vw", padding: 25 }}>
        <Home />
      </div>
    </RadixProvider>
  ),
  args: {},
};
