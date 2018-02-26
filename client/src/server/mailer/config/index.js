import source from './source.json'

const user = 'react.nodemailer@gmail.com'
const refreshToken = '1/g6sR_KH32_xT7olorFyrKEPcPQ01Gf4sbmKEMKZWvnU'
const accessToken = "ya29.GlxqBbe_Xr_lEEr5UkZtWY9PRMTwJ7tJ--02cq8275quDitzu7eee-4Rx55eahAJoSegKfBjpXhcrGwqyhX7XXHejZ_t9EJH1WfV3xVJdNx-wzmLjo2J97lSspFd0g"

export default {
  user,
  clientId: source.web.client_id,
  clientSecret: source.web.client_secret,
  refreshToken,
  accessToken
}
