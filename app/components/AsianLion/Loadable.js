/**
 *
 * Asynchronously loads the component for AsianLion
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
