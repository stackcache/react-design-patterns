/**
 *
 * Asynchronously loads the component for AfricanLion
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
