const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");


// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "/resources/me.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "Andrea";
const PERSON_NAME = "Tu";

msgerForm.addEventListener("submit", event => {
    event.preventDefault();

    const msgText = msgerInput.value;

    firestore.collection('chats').doc(auth.currentUser.uid).get().then(eData => {
        const data = eData.data();
        var newData = data;
        var messages = 0;
        for(const doc in data){
          messages++;
        }
        newData["message" + messages] = "User§" + msgText;
        firestore.collection('chats').doc(auth.currentUser.uid).set(newData);
      })

    if (!msgText) return;
        appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.value = "";
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}


function get(selector, root = document) {
  return root.querySelector(selector);
}

