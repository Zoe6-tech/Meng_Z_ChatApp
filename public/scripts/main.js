(() => {
    console.log('fired');

    //load socket library and make a connection 
     const socket = io();

     const vm = new Vue({
          data:{
              message: [ ],
              nickname: " ",
              username: " "
          },

          created: function(){
               console.log("its alive!!!");
          },

          methods: {

          }

     }).$mount("#app");

})();