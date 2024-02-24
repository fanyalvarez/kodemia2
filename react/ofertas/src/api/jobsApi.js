const postJob = async (job) => {
    const response = await fetch(
        "https://jobs-9eb61-default-rtdb.firebaseio.com/jobs/.json",
        {
            method: "POST",
            body: JSON.stringify(job),
        }
    );
    const data = response.json();
    
    // const formattedData = Object.keys(data).map((key)=>{ return {key,...data[key]} })
    const formattedData = Object.keys(data).map(key => ({ key, ...data[key] }));
    console.log(formattedData,"forma")
    return formattedData;
};



const getJobs = async () => {
    const resp = await fetch(
        "https://jobs-9eb61-default-rtdb.firebaseio.com/jobs/.json"
    )
    const data = await resp.json()
    return data
}


export { postJob, getJobs } 