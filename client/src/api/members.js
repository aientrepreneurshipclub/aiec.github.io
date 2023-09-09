export const getAllMembers=async()=>{
    const accessKey=`${import.meta.env.VITE_API_ACCESS}`
    const method="GET"
    const headers={
        'X-Access-Key': accessKey,
        'Content-Type': 'application/json'
      }
    return fetch(`${import.meta.env.VITE_SERVER}/members/getAll`,{headers,method})
      .then(data=> data.json())
      .then(data=> data.members)
      // .then(data=> console.log(data))
}