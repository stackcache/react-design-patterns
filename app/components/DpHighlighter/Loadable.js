/**
 *
 * Asynchronously loads the component for DpHighlighter
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
