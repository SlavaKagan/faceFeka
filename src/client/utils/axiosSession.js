import axios from 'axios';

import { getFromStorage } from './storageMethods';
import { TokenStorageKey } from './constants';

const { token } = getFromStorage(TokenStorageKey);

export default axios.create({
  headers: {'Authorization': `Bearer ${token}`}
});