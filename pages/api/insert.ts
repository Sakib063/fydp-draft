import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { nid, firstname, lastname, phone, email, password } = req.body;

    try {
      const user = await prisma.reg.create({
        data: {
          nid: parseInt(nid, 10),
          firstname,
          lastname,
          phone,
          email,
          password,
        },
      });

      console.log('User created:', user);

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
