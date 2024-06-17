async function getData() {
    const connect = await fetch('http://localhost:3000/projects');
    const connectionJSON = await connect.json()
    return connectionJSON
}

export const connectApi = {
    getData
}