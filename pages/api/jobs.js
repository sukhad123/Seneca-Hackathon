// pages/api/scrapeJobs.js
 
import { parse } from 'node-html-parser';
import fetch from 'node-fetch';

export default async function handler(req, res) {
    try {
        const response = await fetch('/submit-post');
       
        const data = await response.json();
       res.status(200).json(data);
    } catch (error) {
        console.error('Error scraping jobs:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// export default function handler(req, res) {
//     res.status(200).json({ message: 'Hello from Next.js!' })
//   }
