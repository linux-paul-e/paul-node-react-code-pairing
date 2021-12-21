import { ApolloProvider } from '@apollo/client';
import '../styles/antd.less';
import '../styles/global.css';
import { getClient } from './../util/makeApolloClient';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={getClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
