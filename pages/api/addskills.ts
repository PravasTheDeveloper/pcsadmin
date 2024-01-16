import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prismadb';

type SkillData = {
  id: string;
  title: string;
  image: string;
};

type Data = {
  message: string;
  skillData?: SkillData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'POST') {
      const { title, image } = req.body;
      if (!title || !image) {
        res.status(401).json({ message: 'Please fill all the fields' });
      } else {
        await prisma.$connect();

        const findSkills = await prisma.skilldata.findFirst({ where: { title: title } })

        if (findSkills) {
          res.status(200).json({ message: "This skill already added" });
        } else {
          const createdSkill: SkillData = await prisma.skilldata.create({
            data: { title, image },
          });

          if (createdSkill) {
            res.status(200).json({ message: 'Skill created successfully' });
          }
        }
      }
    } else {
      res.status(400).json({ message: 'Not Recognized' });
    }
  } catch (err) {

    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {

    await prisma.$disconnect();
  }
}
