// VueJS





// ----------------- components -----------------------------
// components should be defined first before the main Vue() 

Vue.component('message', {
  
  props: ["title", "body"]
  
  ,
  
  data() 
  {
    return { showBox: true }
  }
              
  ,
              
  template: 
  `
      <article class="message" v-show="showBox">
        <div class="message-header">
          <p>{{ title }}</p>
          <button class="delete" @click="hideMessage"></button>
        </div>
        <div class="message-body">
          {{ body }}
        </div>
      </article>
  `
  ,
  
  methods: 
  {
  
    hideMessage: function() {
      this.showBox = false;       // don't forget .this !!!!
    }
  }
  
})





// ------------------ Main Vue --------------------------
var myapp = new Vue({ 
    
    el: '#myapp'
    
})






