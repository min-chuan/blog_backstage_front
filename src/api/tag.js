import Network from './network';

export const addTag = (data) => Network.post('/api/v1/tag', data);

export default {
  addTag,
};
