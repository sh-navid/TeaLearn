let ask = (url, fn) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => (xhr.status === 200) ?
        fn(JSON.parse(xhr.response), 200) :
        fn(null, xhr.status);
    xhr.send();
};

let g = document.getElementById("graph"),
    r = document.getElementById("result");

let clean = (str) => {
    return str.split("\n").join("").split("<br/>").join("");
}

g.addEventListener("input", function () {
    ask('gql/' + clean(g.innerText), (res) => {
        r.innerHTML = JSON.stringify(res);
    });
}, false);
