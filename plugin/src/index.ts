import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

type SKAdNetworks = string[];

export const createSKAdNetworkItems = (networks: string[]) => {
  const items = networks.length ? networks : [];
  return items.map((id) => ({ SKAdNetworkIdentifier: id }));
};

const withSKAdNetworks: ConfigPlugin<{ skadnetworks: SKAdNetworks }> = (
  config,
  { skadnetworks = [] }
) => {
  config = withInfoPlist(config, (infoPlistConfig) => {
    infoPlistConfig.modResults.SKAdNetworkItems =
      createSKAdNetworkItems(skadnetworks);
    return infoPlistConfig;
  });
  return config;
};

export default withSKAdNetworks;
