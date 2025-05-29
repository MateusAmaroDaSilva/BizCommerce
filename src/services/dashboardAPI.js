const URL_API = "http://localhost";


export function getDashboard(token) {
  var response = fetch(URL_API + "/api/dashboard", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });

  return response;
}