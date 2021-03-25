var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);


auth.onAuthStateChanged(user => {
    console.log('https://youtu.be/dQw4w9WgXcQ')
    if (user) {
      console.log('Utente autenticato: ', user);
      if(location.pathname != "/dashboard/")
        window.location.href = "/dashboard/"
    } else {
      console.log('Utente non autenticato');
      if(location.pathname != "/")
        window.location.href = '/';
    }
})