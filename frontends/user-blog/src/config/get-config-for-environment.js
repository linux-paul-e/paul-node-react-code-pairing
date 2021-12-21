import { commonConfig } from './common.config';
import { devConfig } from './dev.config';
import { testConfig } from './test.config';
import { productionConfig } from './production.config';

const configs = {
  dev: devConfig,
  local: devConfig,
  cypress: {
    ...devConfig,
    CYPRESS: true,
  },
  test: testConfig,
  production: productionConfig,
};

const getConfigForEnvironment = (environment) => {
  const currentConfig = configs[environment];

  if (!currentConfig) {
    throw new Error('Could not find config file');
  }

  const config = { ...commonConfig, ...currentConfig };

  return config;
};

export { getConfigForEnvironment };
