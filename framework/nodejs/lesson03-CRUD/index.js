let ajax = (type, url, data, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open(/* GET */type, url, true/* ASYNC */);
    xhr.onload = () => callback(xhr.status === 200 ? JSON.parse(xhr.response).res : xhr.status);
    xhr.setRequestHeader('Content-Type', 'application/json');

    if (type === "POST" || type === "GET")
        xhr.send(JSON.stringify(data));
    else
        xhr.send();//PUT - PATCH - DELETE
}