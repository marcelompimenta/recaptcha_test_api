import axios from "axios";
const URL = 'https://www.google.com/recaptcha/api/siteverify'
const secretkey = NODE_ENV

async function validateToken(token) {

  let validToken = ""

  await axios.post(URL, null, {
    params: {
      secret: secretkey,
      response: token
    }
  }).then(response => validToken = response.data)
    .catch(err => validToken = err)
  return validToken
}

export default validateToken
