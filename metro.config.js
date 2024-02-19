const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName === 'ioc') {
        const ico = process.env.IOC;
        return {
          filePath: path.resolve(__dirname, path.join('src', 'ioc', ico ?? 'default', 'index.ts')),
          type: 'sourceFile',
        };
      }
      // Chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    }
  }
};
