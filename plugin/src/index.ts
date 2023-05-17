import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

type SKAdNetworks = string[];

const withSKAdNetworks: ConfigPlugin<{ skadnetworks: SKAdNetworks }> = (
  config,
  { skadnetworks = [] }
) => {
  config = withInfoPlist(config, (infoPlistConfig) => {
    infoPlistConfig.modResults.SKAdNetworkItems = skadnetworks.map(
      (SKAdNetworkIdentifier) => ({ SKAdNetworkIdentifier })
    );
    return infoPlistConfig;
  });
  return config;
};

export default withSKAdNetworks;
