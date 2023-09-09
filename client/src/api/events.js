export const getUpcomingEvents=async(type)=>{
    const accessKey=`${import.meta.env.VITE_API_ACCESS}`
    const method="GET"
    const headers={
        'X-Access-Key': accessKey
      }
    return fetch(`${import.meta.env.VITE_SERVER}/events/${type}`,{headers,method})
      .then(data=> data.json())
      // .then(data=> console.log(data))
      .then(data=> data.events)
}
export const registration=async(attendee, event)=>{
  console.log({attendee, event})
  const accessKey=`${import.meta.env.VITE_API_ACCESS}`
  const method="GET"
  const headers={
      'X-Access-Key': accessKey
    }
  return fetch(`${import.meta.env.VITE_SERVER}/events/add/${event}/${attendee}`,{headers,method})
    .then(data=> data.json())
    // .then(data=> console.log(data))
}
export const hearAboutUs=async(attendeeId,evevntId,answer)=>{
  const accessKey=`${import.meta.env.VITE_API_ACCESS}`
  const method="GET"
  const headers={
      'X-Access-Key': accessKey
    }
  return fetch(`${import.meta.env.VITE_SERVER}/events/answer/${evevntId}/${attendeeId}/${answer}`,{headers,method})
    .then(data=> data.json())
    // .then(data=> console.log(data))
}