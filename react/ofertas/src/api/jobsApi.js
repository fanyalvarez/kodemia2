const postJob = async (job) => {
    const response = await fetch(
      "https://jobs-9eb61-default-rtdb.firebaseio.com/jobs.json",
      {
        method: "POST",
        body: JSON.stringify(job),
      }
    );
    const data = response.json();
    return data;
  };
  

  export{postJob} 