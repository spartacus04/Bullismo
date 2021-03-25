//Sign in
const login = document.querySelector('#loginBtn');
login.addEventListener('click', (e) => {
  const email = document.getElementsByClassName('Username')[0].value;
  const password = document.getElementsByClassName('Password')[0].value;

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      window.location.href = "/dashboard";
    }).catch((e) => {
      const userlbl = document.getElementById("namelbl");
      const passlbl = document.getElementById("passlbl");

      userlbl.classList.add('omrs-input-danger');
      passlbl.classList.add('omrs-input-danger');
    })
  })
})
