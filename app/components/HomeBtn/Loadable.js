/**
 *
 * Asynchronously loads the component for BackBtn
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
