export default{
    props:['msg','socketid'],

    template:
    `
    <article class="new-message" :class="{'my-message' : matchedID}">
       <h3 class="hidden">This is a message</h3>
       <h4>{{msg.message.name}} says:</h4>
       <p>{{msg.message.content}}</p>
    </article>
    `,

    data: function(){
        return{
            matchedID: this.socketid == this.msg.id // is it my message or somebody else message?
        }
    }
}