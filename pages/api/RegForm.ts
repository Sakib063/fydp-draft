import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      nid,
      gender,
      age,
      phone,
      email,
      password,
    } = req.body;

    const multichainConfig = {
      host: process.env.HOST,
      port: process.env.RPCPORT,
      rpcuser: process.env.RPCUSER,
      rpcpassword: process.env.RPCPASSWORD,
    };

    const streamName = nid.toString();

    const formData = {'json':{
      firstName,
      lastName,
      nid,
      gender,
      age,
      phone,
      email,
      password,
    }};

    fetch(`http://${multichainConfig.host}:${multichainConfig.port}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`${multichainConfig.rpcuser}:${multichainConfig.rpcpassword}`).toString('base64'),
      },
      body: JSON.stringify({
        method: 'create',
        params: ['stream', streamName, true],
      }),
    })
      .then((response) => response.json())
      .then((createStreamData) => {
        if (createStreamData && createStreamData.error) {
          console.error('Error creating stream:', createStreamData.error);
          res.status(500).json({ message: 'Internal Server Error' });
          return Promise.reject('Internal Server Error');
        }

        return fetch(`http://${multichainConfig.host}:${multichainConfig.port}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + Buffer.from(`${multichainConfig.rpcuser}:${multichainConfig.rpcpassword}`).toString('base64'),
          },
          body: JSON.stringify({
            method: 'publish',
            params: [streamName,'patientinfo',formData],
          }),
        });
      })
      .then((publishResponse) => publishResponse.json())
      .then((publishData) => {
        if (publishData && publishData.error) {
          console.error('Error publishing data:', publishData.error);
          res.status(500).json({ message: 'Internal Server Error' });
          return Promise.reject('Internal Server Error');
        }
        res.status(201).send();
      })
      .catch((error) => {
        console.error('Error interacting with Multichain:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      });
  } 
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
