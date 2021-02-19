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
     

     function appendMessage(msg){
         vm.messages.push(msg);
     }
     
    
     const vm = new Vue({
         data:{//singular=send. plural=receive
            messages: [],//message income from server
            username: "",//username we type in 
            socketID: "",
            message: "",
            //defualt typing and connection
            typing: false,
            connections:0,

          },

          created(){
            
            socket.on('typing', username => {
                this.typing = username;
            });
    
          
            socket.on('stopTyping', () => {
                this.typing = false;
            });

            socket.on('connections', (data) => {
                this.connections = data;
            });
           
        },
               //console.log("its alive!!!");
         
        watch: {
                message(value) {
                    value ? socket.emit('typing', this.username || "anonymous") : socket.emit('stopTyping')
                }
        },

          methods: {

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
          },


           
     }).$mount("#app");

     socket.addEventListener("connected", setUserId);
     socket.addEventListener('message', appendMessage);


})();