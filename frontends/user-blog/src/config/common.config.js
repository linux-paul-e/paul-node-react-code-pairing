const commonConfig = {
  BUILD_NUMBER: process.env.NEXT_PUBLIC_REACT_APP_BUILD_NUMBER || '0',
  BUILD_COMMIT: process.env.NEXT_PUBLIC_REACT_APP_BUILD_COMMIT || '0',
  STAGE: process.env.NEXT_PUBLIC_REACT_APP_ACG_ENV,
  GRAPHQL_API_ENDPOINT: 'http://localhost:4000/graphql',
};

export { commonConfig };
