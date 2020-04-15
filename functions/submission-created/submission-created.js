const { MAILGUN_API_KEY, MAILGUN_DOMAIN, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const { payload: { data } } = JSON.parse(event.body)
  const { name, email, message } = data
  if (!message || !name || !email) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': email,
    subject: `New contact from ${name}`,
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`
  }

  return mailgun.messages()
    .send(mailgunData)
    .then(() => ({
      statusCode: 200,
      body: 'Your message was sent successfully!'
    }))
    .catch(error => ({
      statusCode: 422,
      body: JSON.stringify(error)
    }))
}
