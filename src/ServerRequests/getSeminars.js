


const url = "http://localhost:3001/seminars/title";

const seminars = [];

async function getSeminars() {

  const request = await fetch(url);

  const response = await request.json();
  console.log(response)
 
  //  response.forEach(item => seminars.push(item));
}
getSeminars()

export { seminars, getSeminars}