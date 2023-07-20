//PROXY FOR NAV STATE TO CAMERA
import { proxy } from 'valtio';

const state = proxy({
  nav: 'Home',
});

// eslint-disable-next-line import/prefer-default-export
export { state };
