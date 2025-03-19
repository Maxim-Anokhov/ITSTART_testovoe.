
export default async function delSeminar(currentTitle) {


    const urlFind = 'http://localhost:3001/seminars'

    const request = await fetch(urlFind)

    const response = await request.json()

    const tarrgetSeminar = response.find(i => i.title === currentTitle)

    const urlDelete = `http://localhost:3001/seminars/${tarrgetSeminar.id}`


    await fetch(urlDelete, {

        method: "DELETE",

    }).then(response => response.json()).catch((error) => console.log(error.message));


}