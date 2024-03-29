import axios from "axios";
const URL = 'https://www.google.com/recaptcha/api/siteverify'
const secretkey = "6LcLAFsoAAAAALwhlwNigVgCKY7f28CBLR3k5ZuA"

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

//secret site key = 6LcLAFsoAAAAALwhlwNigVgCKY7f28CBLR3k5ZuA