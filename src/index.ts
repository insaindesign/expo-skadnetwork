import ExpoSkadnetworkModule from "./ExpoSkadnetworkModule";

export function updatePostbackConversionValue(value: number): Promise<boolean> {
  return ExpoSkadnetworkModule.updatePostbackConversionValue(value);
}
