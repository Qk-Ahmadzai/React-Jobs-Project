import { useState, useEffect } from 'react';
import React from 'react'
import JobListing from './JobListing';
import LoadingSpinner from '../components/LoadingSpinner';


const JobListings = ({isHome = false}) => {

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3':'/api/jobs';
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)

      } catch (error) {
        console.log('error fetching data', error)
      }finally{
        setLoading(false)
      }
    }

    fetchJobs();
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         { isHome ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>
         
        {loading ? (<LoadingSpinner loading={loading} />):
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.length > 0 
              ? ( jobs.map((job) => <JobListing key={job.id} job={job}/>)) 
              : ( <p>No jobs available.</p>
            )}
          </div>
        }

       


        
      </div>
    </section>

  )
}
// {jobs.map((job) => ( <JobListing key={job.id} job={job}/> ))}


export default JobListings