/**
 *
 * Asynchronously loads the component for Proxy
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
