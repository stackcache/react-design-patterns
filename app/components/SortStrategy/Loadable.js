/**
 *
 * Asynchronously loads the component for SortStrategy
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
