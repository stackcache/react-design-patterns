/**
 *
 * Asynchronously loads the component for Iterator
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
