async function getData() {
    const connect = await fetch('https://api.lspr.dev/api/galves');
    const connectionJSON = await connect.json()
    return connectionJSON
}

export const connectApi = {
    getData
}