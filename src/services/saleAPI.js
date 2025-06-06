const URL_API = "http://localhost";

export function listSales(token) {
  var response = fetch(URL_API + "/api/sales", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });

  return response;
}

/*export function getSales(token, id) {
  var response = fetch(URL_API + "/api/sales/" + id, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });
  return response;
}*/

export function postSales(token, venda, id) {
  var request = {
    method: id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(venda, (id ? id : null)),
  };
  var response = fetch(URL_API + "/api/sales" + (id ? `/${id}` : ""), request);
  return response;
}

export function salesMetrics(token) {
    var response = fetch(URL_API + "/api/sales/metrics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    });
  
    return response;
}

export function salesExport(token) {
    var response = fetch(URL_API + "/api/sales/export", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
    });   

    return response;
}  

