<template>
    <div class="pt-ask">
        <div class="subpage-title">
            Обратиться к специалисту
        </div>

        <form>
            
            <label>Фамилия <span>*</span></label>
          <input  :readonly="submitSuccess" type="text" v-model="name" id="name" :class="{'invalid' : errorName}" required>

          <label>Email <span>*</span></label>
          <input :readonly="submitSuccess" :class="{'invalid' : errorEmail}" type="email" id="email"   v-model="email" @blur="validateEmail" required>
      
          <label>Обращение <span>*</span></label>
          <textarea :readonly="submitSuccess" rows = "10" :class="{'invalid' : errorText}"  v-model="text" required/>
  
          <div class="submit">
          <input :disabled="!enableSubmit" class="long-blue-button" @click="handleSubmit" value="Отправить заявку">
        </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        name: null,
        email: null,
        text: null,   
        submitSuccess: false, 
    }
  },
  computed: {
    enableSubmit: function() {
      return this.name && this.email && this.text
    },
    
    errorName: function() {
      if(this.name != null) {
        return this.name.length == 0
      } else {
        return false
      }
    }, 

    errorText: function() {
      if(this.text != null) {
        return this.text.length == 0
      } else {
        return false
      }
    }, 
    
    errorEmail: function() {
      if(this.email != null) {
        return !this.validateEmail()
      } else {
        return false
      }
    }, 
  },
    methods: {
      validateEmail: function() {
        
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
          return true
        } else {
          return false
        }
      },
      handleSubmit: function () {

        if(this.name && this.email && this.text) {
        console.log('ФИО: ', this.name)
        console.log('Email: ', this.email)
        console.log('Образование: ', this.text)
        this.submitSuccess = true
        } else {
          console.log('Incomplete form!')
        }

        if(!this.text) {
          this.text = ''
        }

        if(!this.firstName) {
          this.name = ''
        }

        if(!this.email) {
          this.email = ''
        }
        
    }
}
}

</script>

<style>

.pt-ask form {

    width: 100%;
    margin: 3rem 0 6rem 0;
    padding: 0 3rem 0 0;
}

</style>