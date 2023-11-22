import { NextApiRequest, NextApiResponse } from 'next';
// import multichainConfig from './multichainConfig';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nid, password } = req.body;
    const formData = { 'json': { nid, password } };
    const form_nid=nid.toString();
    const form_password=password.toString();

    const streamName = form_nid;
    
    const multichainConfig = {
      host: '127.0.0.1',
      port: 9560,
      rpcuser: 'multichainrpc',
      rpcpassword: 'Tb7NRpdciy5s8Hb7YXM5QacNK8XkdsZG9yBaguVEcug',
    };

    try {
      await subscribeToStream(streamName, multichainConfig);

      const response = await fetch(`http://${multichainConfig.host}:${multichainConfig.port}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + Buffer.from(`${multichainConfig.rpcuser}:${multichainConfig.rpcpassword}`).toString('base64'),
        },
        body: JSON.stringify({
          method: 'liststreamitems',
          params: [streamName],
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const chain_response = await response.json();
      const chain_nid=JSON.stringify(chain_response.result[0].data.json.nid).replace(/^"|"$/g, '');
      const chain_password=JSON.stringify(chain_response.result[0].data.json.password).replace(/^"|"$/g, '');

      if(chain_nid===form_nid&&chain_password===form_password){
        console.log('test');
        res.status(201).send();
      }
    } 
    catch (error) {
      console.error('Error fetching Multichain stream items:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

async function subscribeToStream(streamName, multichainConfig) {
  const subscribeResponse = await fetch(`http://${multichainConfig.host}:${multichainConfig.port}`, {
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
  if (!subscribeResponse.ok) {
    throw new Error(`HTTP error subscribing to stream! Status: ${subscribeResponse.status}`);
  }
}
