require('dotenv').config();
const axios = require('axios');

const instanceId = process.env.INSTANCE_ID;
const token = process.env.TOKEN;

const sendMessage = async (to, message) => {
  try {
    const response = await axios.post(`https://api.ultramsg.com/${instanceId}/messages/chat?token=${token}`, {
      to: `+${to}`, // Include country code
      body: message,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
  }
};

// Example usage
sendMessage('8608036495', '🚀 Hello from my futuristic website with the correct token!');
