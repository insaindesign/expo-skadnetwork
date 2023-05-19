package expo.modules.skadnetwork

import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoSkadnetworkModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoSkadnetworkModule")

    AsyncFunction("updatePostbackConversionValue") { value: Int, promise: Promise ->
      promise.resolve(false);
    }
  }
}
