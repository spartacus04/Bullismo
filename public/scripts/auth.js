auth.onAuthStateChanged(user => {
    console.log('https://youtu.be/dQw4w9WgXcQ')
    if (user) {
      console.log('Utente autenticato: ', user);
      if(location.pathname != "/app/chat.html")
        window.location.href = "/app/chat.html";
    } else {
      console.log('Utente non autenticato');
      if(location.pathname == "/app/chat.html")
        window.location.href = "/dashboard/supporto.html"
    }
})