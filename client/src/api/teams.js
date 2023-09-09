export const createTeam=async(eventId, teamName, teamProposal, attendeeEmails)=>{
    const accessKey=`${import.meta.env.VITE_API_ACCESS}`
    const method="POST"
    const body=JSON.stringify({eventId, teamName, teamProposal, attendeeEmails})
    const headers={
        'X-Access-Key': accessKey,
        'Content-Type': 'application/json'
      }
    return fetch(`${import.meta.env.VITE_SERVER}/teams/create`,{headers,method,body})
      .then(data=> data.json())
      // .then(data=> console.log(data))
}
export const updateTeam=async(teamId, teamName, teamProposal, attendeeEmails)=>{
  const accessKey=`${import.meta.env.VITE_API_ACCESS}`
  const method="POST"
  const body=JSON.stringify({teamId, teamName, teamProposal, attendeeEmails})
  const headers={
      'X-Access-Key': accessKey,
      'Content-Type': 'application/json'
    }
  return fetch(`${import.meta.env.VITE_SERVER}/teams/update`,{headers,method,body})
    .then(data=> data.json())
    // .then(data=> console.log(data))
}