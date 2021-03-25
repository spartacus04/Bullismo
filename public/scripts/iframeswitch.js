function switchiframe(url){
    const current = document.getElementsByClassName("current")[0];
    current.classList.remove("current");

    iframe.src = '/dashboard/' + url + '.html';
    document.getElementById(url).classList.add("current");
    window.history.replaceState(null, null, `?page=${url}`);
}