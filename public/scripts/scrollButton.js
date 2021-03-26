let currentPage = 1;

function scrollBtn(){
    if(currentPage == pages){
        scrollTo(0, 0);
        currentPage = 1
        document.getElementById('arrow').setAttribute("src", "/resources/arrowDown.png")
    }
    else if(currentPage == pages - 1){
        document.getElementById('arrow').setAttribute("src", "/resources/arrowUp.png")
        currentPage++;
        window.location.href = "#";
        window.location.href = `#paragraph${currentPage}`;
    }
    else{
        document.getElementById('arrow').setAttribute("src", "/resources/arrowDown.png")
        currentPage++;
        window.location.href = "#";
        window.location.href = `#paragraph${currentPage}`;
    }
}