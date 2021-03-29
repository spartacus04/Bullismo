auth.onAuthStateChanged(user => {
    console.log('https://youtu.be/dQw4w9WgXcQ')
    if (user) {
      console.log('Utente autenticato: ', user);
      if(location.pathname != "/app/chat.html"){
        window.location.href = "/app/chat.html";
      }
      else{
        firestore.collection('chats').doc(user.uid).get().then(docSnapshot => {
          if(!docSnapshot.exists) {
            firestore.collection('chats').doc(user.uid).set({uid: user.uid});
          }
        })
        const observer = firestore.collection('chats').doc(auth.currentUser.uid).onSnapshot(docSnapshot => {
          const data = docSnapshot.data();
          document.getElementsByClassName('msger-chat')[0].innerHTML = '<main class="msger-chat"><div class="msg left-msg"><div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"></div><div class="msg-bubble"><div class="msg-info"><div class="msg-info-name">BOT</div><div class="msg-info-time">12:45</div></div><div class="msg-text">Benvenuto in "Contrastare il bullismo", scrivendo un messaggio qui potrai contattare un gestore del sito</div></div></div></main>'
          var keys = Object.keys(data);
          keys.sort();
          for(var i=0; i<keys.length; i++){
            console.log(keys);
            if(keys[i] != 'uid')
            {
              const element = data[keys[i]];
              console.log(element);
              const messageType = element.split('§')[0];
              if(messageType == 'Dev'){
                appendMessage("Andrea", "/resources/me.svg", 'left', element.split('§')[1]);
              }
              else{
                appendMessage("Tu", "https://image.flaticon.com/icons/svg/145/145867.svg", 'right', element.split('§')[1]);
              }
            }
          }
      })
      }
    } else {
      console.log('Utente non autenticato');
      if(location.pathname == "/app/chat.html")
        window.location.href = "/dashboard/supporto.html"
    }
})