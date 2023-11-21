import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nid, password } = req.body;
    const formData = { 'json': { nid, password } };
    console.log(formData);

    const streamName = nid.toString();
    
    const multichainConfig = {
      host: '127.0.0.1',
      port: 9560,
      rpcuser: 'multichainrpc',
      rpcpassword: 'Tb7NRpdciy5s8Hb7YXM5QacNK8XkdsZG9yBaguVEcug',
      chainName: 'chain1',
    };

    try {
      await subscribeToStream(streamName, multichainConfig);

      const response = await fetch(`http://${multichainConfig.host}:${multichainConfig.port}/rpc/${multichainConfig.chainName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + Buffer.from(`${multichainConfig.rpcuser}:${multichainConfig.rpcpassword}`).toString('base64'),
        },
        body: JSON.stringify({
          method: 'liststreamitems',
          params: [streamName, 0, 1, false],
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('result:', result);
      res.status(201).send();
    } 
    catch (error) {
      console.error('Error fetching Multichain stream items:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

async function subscribeToStream(streamName, multichainConfig) {
  const subscribeResponse = await fetch(`http://${multichainConfig.host}:${multichainConfig.port}/rpc/${multichainConfig.chainName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + Buffer.from(`${multichainConfig.rpcuser}:${multichainConfig.rpcpassword}`).toString('base64'),
    },
    body: JSON.stringify({
      method: 'subscribe',
      params: [streamName],
    }),
  });
  console.log(`http://${multichainConfig.host}:${multichainConfig.port}/rpc/${multichainConfig.chainName}`);

  if (!subscribeResponse.ok) {
    throw new Error(`HTTP error subscribing to stream! Status: ${subscribeResponse.status}`);
  }

  const subscribeResult = await subscribeResponse.json();
  console.log('subscribeResult:', subscribeResult);
}
