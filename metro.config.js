// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname)

// config.resolver.assetExts = [...config.resolver.assetExts, 'lottie']

// Tree shaking by platform
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
  },
})

module.exports = config
