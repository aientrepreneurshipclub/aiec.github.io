export const getAttendeeObj=async(token)=>{
    const accessKey=`${import.meta.env.VITE_API_ACCESS}`
    const method="POST"
    const headers={
        'X-Access-Key': accessKey,
        'Content-Type': 'application/json'
      }
    const body=JSON.stringify({token})
    return fetch(`${import.meta.env.VITE_SERVER}/attendees/get`,{headers,method,body})
        .then(data=> data.json())
        .then(data=> data.attendee)
}
export const createAttendeef=async(attendee)=>{
  const accessKey = `${import.meta.env.VITE_API_ACCESS}`;
  const method = "POST";
  const headers = { "X-Access-Key": accessKey,'Content-Type': 'application/json' };
  return fetch(`${import.meta.env.VITE_SERVER}/attendees/create`, {
    headers,
    method,
    body: JSON.stringify({...attendee}),
  })
    .then((data) => data.json())
}
export const activateAttendee=async(activateCode)=>{
  const accessKey = `${import.meta.env.VITE_API_ACCESS}`;
  const method = "POST";
  const headers = { "X-Access-Key": accessKey,'Content-Type': 'application/json' };
  return fetch(`${import.meta.env.VITE_SERVER}/attendees/activate`, {
    headers,
    method,
    body: JSON.stringify({activateCode}),
  })
    .then((data) => data.json())
}
export const logIn=async(email,password)=>{
  const accessKey = `${import.meta.env.VITE_API_ACCESS}`;
  const method = "GET";
  const headers = { "X-Access-Key": accessKey,'Content-Type': 'application/json' };
  return fetch(`${import.meta.env.VITE_SERVER}/attendees/get/${email}/${password}`, {
    headers,
    method
  })
    .then((data) => data.json())
    // .then((data) => console.log(data))
}
export const getEmails=async()=>{
  const accessKey = `${import.meta.env.VITE_API_ACCESS}`;
  const method = "GET";
  const headers = { "X-Access-Key": accessKey };
  return fetch(`${import.meta.env.VITE_SERVER}/attendees/getEmails`, {
    headers,
    method
  })
    .then((data) => data.json())
    .then((data) => data.emails)
}