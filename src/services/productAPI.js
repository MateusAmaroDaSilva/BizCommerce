const URL_API = "http://localhost";

export function listProduct(token) {
  var response = fetch(URL_API + "/api/produtos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });

  return response;
}

export function getProduct(token, id) {
  var response = fetch(URL_API + "/api/produtos/" + id, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });
  return response;
}

export function postProduct(token, produto, id) {
  var request = {
    method: id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(produto, (id ? id : null)),
  };
  var response = fetch(URL_API + "/api/produtos" + (id ? `/${id}` : ""), request);
  return response;
}

export function postProductEan(token, ean) {
  var request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(ean),
  };
  var response = fetch(URL_API + "/api/produto", request);
  return response;
}

export function deleteProduct(token, id) {
  var request = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  };
  var response = fetch(URL_API + "/api/produtos/" + id, request);
  return response;
}
