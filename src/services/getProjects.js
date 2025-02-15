export async function fetchProjects() {
  try {
    const response = await fetch(
      "https://gabriel04alves.github.io/json-portfolio/db.json"
    );
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
