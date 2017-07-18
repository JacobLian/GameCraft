select jobs.job, jobDescription.description, jobs.role from jobs
join jobDescription
on jobDescription.jobname = jobs.job