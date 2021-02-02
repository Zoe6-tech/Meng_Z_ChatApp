import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    //load socket library and make a connection 
     const socket = io();

     //messager service event handling -> incoming from the manager
     function setUserId({sID, message}) {
         //incoming connected event with data
        
        //   debugger;
        vm.socketID = sID;
     }
     
     function appendMessage(message){
         vm.messages.push(message);
     }

     const vm = new Vue({
         data:{//singular=send. plural=receive
            messages: [],
            nickname: "",
            username: "",
            socketID: "",
            message: ""
          },

          created: function(){
               console.log("its alive!!!");
          },

          methods: {
            dispatchMessage() {
                debugger;
                socket.emit('chatmessage', {content: this.message, name: this.nickname || 'Anonymous'})
            }
          },

          components: {
              newmessage: ChatMessage
          }
           
     }).$mount("#app");

     socket.addEventListener("connected", setUserId);
     socket.addEventListener('message', appendMessage);

})();