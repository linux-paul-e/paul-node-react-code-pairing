import { getConfigForEnvironment } from './get-config-for-environment';
// allow either to be set
const CONFIG_ENV = process.env.NEXT_PUBLIC_REACT_APP_ACG_ENV || process.env.NEXT_PUBLIC_ACG_ENV;

let config;

const getConfig = () => {
  if (config) {
    return config;
  }

  if (!CONFIG_ENV) {
    throw new Error('NEXT_PUBLIC_REACT_APP_ACG_ENV / NEXT_PUBLIC_ACG_ENV is required');
  }

  config = getConfigForEnvironment(CONFIG_ENV);

  return config;
};

export { getConfig };
