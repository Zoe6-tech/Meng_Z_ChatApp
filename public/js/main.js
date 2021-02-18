import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    //load socket library and make a connection 
     const socket = io();


     //messager service event handling -> incoming from the manager
     function setUserId({sID, message}) {
        console.log('connected', sID, message);
        vm.socketID = sID;
     }
     

     function appendMessage(message){
         vm.messages.push(message);
     }
     
    
     const vm = new Vue({
         data:{//singular=send. plural=receive
            messages: [],//message income from server
            username: "",//username we type in 
            socketID: "",
            message: "",
            users:[],// message we type in 

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
                    sID: this.socketID,
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
     socket.addEventListener('disconnect', appendMessage);
     socket.addEventListener('message', appendMessage);


})();