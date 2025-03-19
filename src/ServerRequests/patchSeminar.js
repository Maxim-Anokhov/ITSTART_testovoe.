export default  async function patchgeSeminar(inputValue,currentTitle){
 
   const description={description: inputValue}
   
    const urlFind='http://localhost:3001/seminars'
    
    const requestFind = await fetch(urlFind)
    const response = await requestFind.json()
    const targetSeminar=response.find(i=>i.title===currentTitle)
    const urlPatch = `http://localhost:3001/seminars/${targetSeminar.id}`
    const body=JSON.stringify(description)
   

const request= await fetch(urlPatch,{
    method: "PATCH",
    body:body ,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }

}).then(data=> data.json()).then(data=>console.log(data))

}