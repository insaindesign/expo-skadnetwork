import StoreKit
import ExpoModulesCore

public class ExpoSkadnetworkModule: Module {

  public func definition() -> ModuleDefinition {
    Name("ExpoSkadnetworkModule")

    AsyncFunction("updatePostbackConversionValue") { (conversionValue: Int, promise: Promise) in
      if (conversionValue < 0 || conversionValue > 63) {
        promise.reject(NSError(domain: "ExpoSkadnetworkModule", code: 1, userInfo: nil))
        return;
      }

      if #available(iOS 15.4, *) {
        SKAdNetwork.updatePostbackConversionValue(conversionValue, completionHandler: { (error: Error?) in
          if let error {
            promise.reject(error);
          } else {
            promise.resolve(true);
          }
        })
        return;
      }

      if #available(iOS 14.0, *) {
        if (conversionValue == 0) {
          SKAdNetwork.registerAppForAdNetworkAttribution()
          promise.resolve(true);
          return;
        }

        SKAdNetwork.updateConversionValue(conversionValue)
        promise.resolve(true);
        return;
      }

      if #available(iOS 11.3, *) {
        SKAdNetwork.registerAppForAdNetworkAttribution()
        promise.resolve(true);
        return;
      }

      promise.resolve(false);
      return;
    }
  }
}
