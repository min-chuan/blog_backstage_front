import Network from './network';

export const addTag = (data) => Network.post('/api/v1/tag', data);
export const getTagList = () => Network.get('/api/v1/tag');

export default {
  addTag,
  getTagList,
};
