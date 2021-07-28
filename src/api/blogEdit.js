import Network from './network';

export const releaseArticle = (data) =>
  Network.post('/api/v1/blogEdit/release', data);

export default {
  releaseArticle,
};
