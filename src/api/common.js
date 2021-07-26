import Network from './network';

export const getCaptcha = (data) =>
  Network.post('/api/v1/common/captcha', data);

export default {
  getCaptcha,
};
