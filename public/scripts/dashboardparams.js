const urlParams = new URLSearchParams(window.location.search);

const iframe = document.getElementById("dashiframe");

const url = urlParams.get('page');



if(urlParams.has('page')){
    const current = document.getElementsByClassName("current")

    for (let i = 0; i < current.length; i++) {
        const element = current[i];
        element.classList.remove("current");
    }

    iframe.src = '/dashboard/' + url + '.html';

    document.getElementById(url).classList.add("current");
    window.history.replaceState(null, null, `?page=${url}`);
}