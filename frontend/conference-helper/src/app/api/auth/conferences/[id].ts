import { NextApiRequest, NextApiResponse } from 'next';  
  
const conferences = [  
  // Example conference data  
  {  
    id: '1',  
    name: 'Tech Conference 2023',  
    startDate: '2023-04-15',  
    endDate: '2023-04-17',  
    location: 'San Francisco, CA',  
    attendees: 200,  
    speakers: ['Speaker 1', 'Speaker 2'],  
    status: 'active',  
  },  
  // Add more conference data as needed  
];  
  
export default function handler(req: NextApiRequest, res: NextApiResponse) {  
  const { id } = req.query;  
  
  switch (req.method) {  
    case 'GET':  
      const conference = conferences.find((conf) => conf.id === id);  
      if (conference) {  
        res.status(200).json(conference);  
      } else {  
        res.status(404).json({ message: 'Conference not found' });  
      }  
      break;  
    case 'PUT':  
      const index = conferences.findIndex((conf) => conf.id === id);  
      if (index !== -1) {  
        conferences[index] = { ...conferences[index], ...req.body };  
        res.status(200).json(conferences[index]);  
      } else {  
        res.status(404).json({ message: 'Conference not found' });  
      }  
      break;  
    default:  
      res.setHeader('Allow', ['GET', 'PUT']);  
      res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  
}  
