import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
        firstName,
        lastName,
        nid,
        phone,
        email,
        password,
      } = req.body;

      const formData = {'json':{
        firstName,
        lastName,
        nid,
        phone,
        email,
        password,
      }};

    const multichainConfig = {
      host: '127.0.0.1',
      port: 9560,
      rpcuser: 'multichainrpc',
      rpcpassword: 'Tb7NRpdciy5s8Hb7YXM5QacNK8XkdsZG9yBaguVEcug',
    };

    const streamName = '555';

    try {
      const publishResponse = await fetch(`http://${multichainConfig.host}:${multichainConfig.port}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + Buffer.from(`${multichainConfig.rpcuser}:${multichainConfig.rpcpassword}`).toString('base64'),
        },
        body: JSON.stringify({
          method: 'publish',
          params: [streamName, 'lala', formData],
        }),
      });

      const publishData = await publishResponse.json();

      if (publishData && publishData.error) {
        console.error('Error publishing data:', publishData.error);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        console.log('Data published to stream:', streamName);
        res.status(201).json({ message: 'Form submitted successfully' });
      }
    } catch (error) {
      console.error('Error interacting with Multichain:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
