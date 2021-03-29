//Sign in
const login = document.querySelector('#loginBtn');
login.addEventListener('click', (e) => {
    const email = document.getElementsByClassName('Username')[0].value;
    const password = document.getElementsByClassName('Password')[0].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
    }).catch((e) => {
      const userlbl = document.getElementById("namelbl");
      const passlbl = document.getElementById("passlbl");   
      userlbl.classList.add('omrs-input-danger');
      passlbl.classList.add('omrs-input-danger');
    })
})

const glogin = document.querySelector('#glogin');
glogin.addEventListener('click', (e) => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();
  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    auth.signInWithPopup(provider).then(result => {
      console.log(result);
    }).catch((e) => {
      console.log(e);
    })
  })
})