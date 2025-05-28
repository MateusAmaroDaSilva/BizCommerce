const URL_API = "http://localhost";

export function listCategorias(token) {
  var response = fetch(URL_API + "/api/categorias", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });

  return response;
}

export function getCategoria(token, id) {
  var response = fetch(URL_API + "/api/categorias/" + id, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    }
  });
  return response;
}

export function postCategorias(token, categorias) {
  var request = {
    method: categorias.id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(categorias),
  };
  var response = fetch(URL_API + "/api/categorias", request);
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
  var response = fetch(URL_API + "/api/categorias/" + id, request);
  return response;
}

export function categoriasExport(token) {
    var response = fetch(URL_API + "/api/categorias/export/cvs", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
    });   

    return response;
}  

export function categoriaStatus(token, id) {
    var response = fetch(URL_API + "/api/categorias/" + id + "/toggle-status", {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    });
    return response;
  }
  