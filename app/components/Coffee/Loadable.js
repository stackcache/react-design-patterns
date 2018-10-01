/**
 *
 * Asynchronously loads the component for Coffee
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
