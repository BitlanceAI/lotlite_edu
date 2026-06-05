require('dotenv').config();

const register = async () => {
  const messagesUrl = process.env.WHATSAPP_API_URL;
  const token = process.env.WHATSAPP_API_TOKEN;
  const registerUrl = messagesUrl.replace('/messages', '/register');

  console.log(`Sending registration request to: ${registerUrl}`);

  try {
    const { default: fetch } = await import('node-fetch');
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        pin: '123456'
      })
    });

    const data = await response.json();
    console.log('Registration Response:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error during registration:', error);
  }
};

register();
