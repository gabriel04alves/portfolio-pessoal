export async function fetchProjects() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/gabriel04alves/json-portfolio/refs/heads/dev/db.json?token=GHSAT0AAAAAACWQNOMZGH56KVSYYSEVDRBIZ5JGL6Q"
    );
    const data = await response.json();
    return data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
