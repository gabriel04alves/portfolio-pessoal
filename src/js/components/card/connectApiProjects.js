async function getData() {
  const connect = await fetch(
    "https://gabriel04alves.github.io/json-portfolio/db.json"
  );
  const connectionJSON = await connect.json();
  return connectionJSON;
}

export const connectApi = {
  getData,
};
