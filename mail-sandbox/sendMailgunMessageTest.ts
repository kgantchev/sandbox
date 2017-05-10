import * as https from 'https';

const mail = {
    from: 'ping@mail.com',
    to: `pong@mail.com`,
    subject: encodeURIComponent(`Test sending mailgun message ${new Date()}`),
    text: encodeURIComponent('This is a mailgun message test!'),
  };

const apiKey = ''; // mailgun API key

const sendMail = () => {
  const auth = new Buffer(`api:${apiKey}`).toString('base64');
  const params = `from=${mail.from}&to=${mail.to}&subject=${mail.subject}&text=${mail.text}`;
  const options = {
    protocol: 'https:',
    host: `api.mailgun.net`,
    path: `/v3/yourDomain.com/messages?${params}`,
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  };

  const req = https.request(options)
    .on('response', (response) => {
      response.setEncoding('utf8');
      response.on('data', (data) => console.log(data));
    })
    .on('error', (error) => console.error(error));
  req.end();
};