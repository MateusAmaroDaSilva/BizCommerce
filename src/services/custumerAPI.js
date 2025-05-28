const URL_API = "http://localhost";

export function listCustomers(token) {
  var response = fetch(URL_API + "/api/customers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });

  return response;
}

export function postCustomers(token, cliente) {
  var request = {
    method: cliente.id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(cliente),
  };
  var response = fetch(URL_API + "/api/customers", request);
  return response;
}


