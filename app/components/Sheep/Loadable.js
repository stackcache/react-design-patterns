/**
 *
 * Asynchronously loads the component for Sheep
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
