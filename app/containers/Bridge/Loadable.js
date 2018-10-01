/**
 *
 * Asynchronously loads the component for Bridge
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
