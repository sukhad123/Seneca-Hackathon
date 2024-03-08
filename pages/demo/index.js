// components/JobList.js

import { useEffect, useState } from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/jobs');
                const data = await response.json();
                setJobs(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            {}
        </div>
    );
};

export default JobList;
