const URL_API = "http://localhost";

export function getUser() {

    var response = fetch(URL_API + "/api/user");
    return response;
}

export function postRegister(registro) {

    var request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(registro)
    }
    var response =
        fetch(URL_API + "/api/register", request)
    return response;
}


export function postLogin(login) {

    var request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
    }
    
    var response = fetch(URL_API + "/api/login", request);

    return response;
}