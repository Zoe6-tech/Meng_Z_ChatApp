import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    //load socket library and make a connection 
     const socket = io();

     //messager service event handling -> incoming from the manager
     function setUserId({sID}) {
         //incoming connected event with data
        
        //   debugger;
        vm.socketID = sID;
     }



     function appendMessage(message){
        // debugger;
         vm.messages.push(message);
     }

     const vm = new Vue({
         data:{//singular=send. plural=receive
            messages: [],//message income from server
            username: "",//username we type in 
            socketID: "",
            message: "",// message we type in 

          },

          created(){
         },
               //console.log("its alive!!!");
         

          methods: {
            // addUser() {
            //     this.ready = true;
            //     socket.emit('joined', this.username)
            // },

            dispatchMessage() {
                //debugger;
                socket.emit('chatmessage', {
                    content: this.message, 
                     name: this.username || 'Anonymous'
                }); // if this.nickName is not set, put "anonymous"
                this.message =null;//clear message after sent
            }
          },

          components: {
              newmessage: ChatMessage
          }
           
     }).$mount("#app");

     socket.addEventListener("connected", setUserId);
     socket.addEventListener('message', appendMessage);
    

})();