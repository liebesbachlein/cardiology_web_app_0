<template>
<div class="site-content">
      <div class="site-content-in">
        <div class="contacts">
          <div class="breadcrumbs-box">
                      <div class="breadcrumb-past">
                          <router-link to="/">Главная</router-link>
                      </div>
                      <ChevronRight color="blue"/>
                      <div class="breadcrumb-now">
                        <router-link :to="/membership-request/">Членство</router-link>
                      </div>
            </div>

                <div class="membership">
                    
    <form @submit.prevent="handleSubmit">
      <div class="upper-form">
        <label class="error-label" v-if="errorLastName">Введите фамилию</label>
        <label class="success-label" v-else-if="submitSuccess">Фамилия</label>
        <label class="regular-label" v-else>Фамилия*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="lastName" :class="errorLastName  ? 'error-input' : submitSuccess ? 'success-input' : ''" required>


        <label class="error-label" v-if="errorFirstName">Введите имя</label>
        <label class="success-label" v-else-if="submitSuccess">Имя</label>
        <label class="regular-label" v-else>Имя*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="firstName" :class="errorFirstName  ? 'error-input' : submitSuccess ? 'success-input' : ''" required>

        <label class="success-label" v-if="submitSuccess">Отчество</label>
        <label class="regular-label" v-else>Отчество</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="patroName" :class="{'success-input' : submitSuccess}">

        
        <label  class="error-label" v-if="errorEmail">Введите email</label>
        <label class="success-label" v-else-if="submitSuccess">Email</label>
        <label class="regular-label" v-else>Email*</label>
        <input :readonly="submitSuccess" class="regular-input" :class="errorEmail  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="email" v-model="email" required>

        <label class="error-label" v-if="errorPhoneNumber">Введите контактный телефон</label>
        <label class="success-label" v-else-if="submitSuccess">Контактный телефон</label>
        <label class="regular-label" v-else>Контактный телефон*</label>
        <input :readonly="submitSuccess" class="regular-input" :class="errorPhoneNumber  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="tel" v-model="phoneNumber" required>
      

       <label  class="error-label" v-if="errorDateBirth">Введите дату рождения</label>
       <label class="success-label" v-else-if="submitSuccess">Дата рождения</label>
        <label  class="regular-label" v-else>Дата рождения*</label>
        <input :readonly="submitSuccess" class="regular-input" :class="errorDateBirth  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="text" v-model="dateBirth" required>

        <label class="error-label" v-if="errorPlaceBirth">Введите место рождения</label>
        <label class="success-label" v-else-if="submitSuccess">Место рождения</label>
        <label class="regular-label" v-else>Место рождения*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="placeBirth" :class="errorPlaceBirth  ? 'error-input' : submitSuccess ? 'success-input' : ''" required>

        <label class="error-label" v-if="errorAddress">Введите адрес места жительства</label>
        <label class="success-label" v-else-if="submitSuccess">Адрес места жительства</label>
        <label class="regular-label" v-else>Адрес места жительства*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="address" :class="errorAddress  ? 'error-input' : submitSuccess ? 'success-input' : ''" required>
        
        <label class="error-label" v-if="errorIdDoc">Введите номер/серию удостоверения личности</label>
        <label class="success-label" v-else-if="submitSuccess">Номер/серия удостоверения личности</label>
        <label class="regular-label" v-else>Номер/серия удостоверения личности*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="idDoc" :class="errorIdDoc  ? 'error-input' : submitSuccess ? 'success-input' : ''" required>

        <label class="error-label" v-if="errorDateDoc">Введите дату выдачи удостоверения личности</label>
        <label class="success-label" v-else-if="submitSuccess">Дата выдачи удостоверения личности</label>
        <label class="regular-label" v-else>Дата выдачи удостоверения личности*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="dateDoc" :class="errorDateDoc  ? 'error-input' : submitSuccess ? 'success-input' : ''" required>

        <label class="error-label" v-if="errorPlaceDoc">Введите орган выдачи удостоверения личности</label>
        <label class="success-label" v-else-if="submitSuccess">Орган выдачи удостоверения личности</label>
        <label class="regular-label" v-else>Орган выдачи удостоверения личности*</label>
        <input :readonly="submitSuccess" class="regular-input" type="text" v-model="placeDoc" :class="errorPlaceDoc ? 'error-input' : submitSuccess ? 'success-input' : ''" required>
  
        <label class="error-label" v-if="errorEducation">Введите образование (учебное заведение, специальность, дата окончания)</label>
        <label class="success-label" v-else-if="submitSuccess">Образование (учебное заведение, специальность, дата окончания)</label>
        <label class="regular-label" v-else>Образование (учебное заведение, специальность, дата окончания)*</label>
        <textarea :readonly="submitSuccess" rows = "10" :class="errorEducation ? 'error-textarea' : submitSuccess ? 'success-textarea' : ''"  v-model="education" required/>
   

        <label class="success-label" v-if="submitSuccess">Дополнительное образование</label>
        <label class="regular-label" v-else>Дополнительное образование</label>
        <textarea :readonly="submitSuccess" rows = "10" :class="{'success-textarea' : submitSuccess}" v-model="addEducation" required/>
   
        <label class="success-label" v-if="submitSuccess">Интересы и увлечения</label>
        <label class="regular-label" v-else>Интересы и увлечения</label>
        <textarea :readonly="submitSuccess" rows = "10" :class="{'success-textarea' : submitSuccess}" v-model="interests" required/>
   
        <label class="success-label" v-if="submitSuccess">Опыт работы</label>
        <label class="regular-label" v-else>Опыт работы</label>
        <textarea :readonly="submitSuccess" rows = "10" :class="{'success-textarea' : submitSuccess}" v-model="experience" required/>
   
     </div>

    <div class="lower-form">
        <input :disabled="submitSuccess" type="checkbox" v-model="terms" required>
        <label class="error-label" v-if="errorTerms">Я согласен (-сна) на обработку и хранение моих персональных данных, ознакомлен (-а) с политикой конфиденциальности</label>
        <label class="regular-label" v-else-if="submitSuccess" style="color: #A7ACBC">Я согласен (-сна) на обработку и хранение моих персональных данных, ознакомлен (-а) с политикой конфиденциальности</label>
        <label class="regular-label" v-else>Я согласен (-сна) на обработку и хранение моих персональных данных, ознакомлен (-а) с политикой конфиденциальности</label>
    </div>

      <br>
  
      <div class="submit">
        <div class="blue-button" style="background-color: #FFF; margin: 1rem 0 0 0; border: 1px solid #5cb85c" v-if="submitSuccess"><h4 style="color: #5cb85c; font-weight: 500;">Заявка успешно отправлена!</h4></div>
        <div v-else class="blue-button" style="background-color: var(--component-accent-color1); margin: 1rem 0 0 0;" @click="handleSubmit"><h4>Отправить заявку</h4></div>
      </div>

    </form>
  </div>

        </div>
      </div>


</div>

</template>

<script>
import ChevronRight from '@/components/ChevronRight.vue';

export default {
    name: 'MembershipRequest',
    components: {ChevronRight}, 
    data() {
      return {
        firstName: null,
        lastName: null,
        patroName: null,
        email: null,
        phoneNumber: null,
        idDoc: null,
        dateDoc: null,
        placeDoc: null,
        dateBirth: null,
        placeBirth: null,
        address: null,
        terms: null,
        education: null,
        submitSuccess: false, 
        addEducation: null,
        interests: null,
        experience: null

    }
  },
  computed: {
    errorEducation: function() {
      if(this.education != null) {
        return this.education.length == 0
      } else {
        return false
      }
    },
    errorPhoneNumber: function() {
      if(this.phoneNumber != null) {
        return this.phoneNumber.length == 0
      } else {
        return false
      }
    }, 
    errorFirstName: function() {
      if(this.firstName != null) {
        return this.firstName.length == 0
      } else {
        return false
      }
    }, 
    errorLastName: function() {
      if(this.lastName != null) {
        return this.lastName.length == 0
      } else {
        return false
      }
    },
    errorEmail: function() {
      if(this.email != null) {
        return this.email.length == 0
      } else {
        return false
      }
    }, 
    errorIdDoc: function() {
      if(this.idDoc != null) {
        return this.idDoc.length == 0
      } else {
        return false
      }
    }, 
    errorPlaceDoc: function() {
      if(this.placeDoc != null) {
        return this.placeDoc.length == 0
      } else {
        return false
      }
    }, 
    errorDateDoc: function() {
      if(this.dateDoc != null) {
        return this.dateDoc.length == 0
      } else {
        return false
      }
    }, 
    errorDateBirth: function() {
      if(this.dateBirth != null) {
        return this.dateBirth.length == 0
      } else {
        return false
      }
    }, 
    errorPlaceBirth: function() {
      if(this.placeBirth != null) {
        return this.placeBirth.length == 0
      } else {
        return false
      }
    }, 
    errorAddress: function() {
      if(this.address != null) {
        return this.address.length == 0
      } else {
        return false
      }
    }, 
    errorTerms: function() {
      if(this.terms != null) {
        return this.terms.length == 0
      } else {
        return false
      }
    }, 


  },
    methods: {
      handleSubmit: function () {

        if(this.firstName && this.lastName && this.email && this.phoneNumber && this.address && this.dateBirth && this.placeBirth && 
        this.idDoc && this.dateDoc && this.placeDoc && this.terms && this.education) {
        console.log('Фамилия: ', this.lastName)
        console.log('Имя: ', this.firstName)
        console.log('Отчество: ', this.patroName ? this.patroName : '—')
        console.log('Email: ', this.email)
        console.log('Контактный телефон: ', this.phoneNumber)
        console.log('Дата рождения: ', this.dateBirth)
        console.log('Место рождения: ', this.placeBirth)
        console.log('Адрес: ', this.address)
        console.log('Номер удостоверения личности: ', this.idDoc)
        console.log('Дата выдачи удостоверения личности:: ', this.dateDoc)
        console.log('Орган выдачи удостоверения личности: ', this.placeDoc)
        console.log('Условия подписаны: ', this.terms? "Да" : "Нет")
        console.log('Образование: ', this.education? "Да" : "Нет")
        console.log('Дополнительное бразование: ', this.addEducation ? this.addEducation : '—')
        console.log('Интересы и увлечения: ', this.interests ? this.interests : '—')
        console.log('Опыт работы: ', this.experience ? this.experience : '—')
        this.submitSuccess = true
        } else {
          alert('Заполните все обязательные поля!')
          console.log('Incomplete form!')
        }

        if(!this.terms) {
          this.terms = ''
        }

        if(!this.education) {
          this.education = ''
        }

        if(!this.idDoc) {
          this.idDoc = ''
        }

        if(!this.placeDoc) {
          this.placeDoc = ''
        }

        if(!this.dateDoc) {
          this.dateDoc = ''
        }

        if(!this.firstName) {
          this.firstName = ''
        }

        if(!this.lastName) {
          this.lastName = ''
        }

        if(!this.email) {
          this.email = ''
        }

        if(!this.phoneNumber) {
          this.phoneNumber = ''
        }

        if(!this.address) {
          this.address = ''
        }

        if(!this.dateBirth) {
          this.dateBirth = ''
        }

        if(!this.placeBirth) {
          this.placeBirth = ''
        }
        
    }
}
}

</script>


<style>
.contacts {
    width: 100%;
    margin-top: 100px;
}

.form-box {
    display: block;
    width: 100%;
    margin-top: 3rem;
}

.membership form {
    margin: 30px 0 30px 0;
    background: white;
    text-align: left;
    padding: 40px 0;
    border-radius: 10px;
}

.membership .upper-form {
  max-width: 50%;
}

.membership .upper-form .regular-label {
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.membership .upper-form .error-label {
  color: var(--text-accent-color2);
  font-weight: 500;
  /*text-decoration: underline;*/

  font-family: var(--sans-serif-font);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
}    


.membership .upper-form input:focus {
  border: 1px solid #000;
  outline: none;
}

.membership .upper-form .regular-input {
  font-family: var(--plain-text-font);
  font-size: 1rem;
  font-weight: 400;
  display: block;
  padding: 0.6rem 0 0.25rem 0.5rem;
  width: 100%;
  border: 1px solid #A7ACBC;
  border-radius: 0.25rem;
  color: #000;
}

.membership .upper-form .error-input {
  font-family: var(--plain-text-font);
  font-size: 1rem;
  font-weight: 400;
  display: block;
  padding: 0.6rem 0 0.25rem 0.5rem;
  width: 100%;
  border: 1px solid var(--component-accent-color1);
  border-radius: 0.25rem;
  color: #000;
}

.membership .lower-form {
  display: flex;
  max-width: 50%;
}
    
.membership .lower-form .regular-label {
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.membership .lower-form .error-label { 
  /*text-decoration: underline;*/
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 600;
}


.membership .lower-form input[type="checkbox"] {
  display: inline-block;
  width: 1rem;
  margin: 0 1rem 0 0;
  position: relative;
  top: 2px;
}

.membership textarea {
  resize: none;
  width: 100%;
  border: 1px solid #A7ACBC;
  font-family: var(--plain-text-font);
  font-size: 0.875rem;
  font-weight: 400;
  display: block;
  padding: 0.6rem 0 0.25rem 0.5rem;
  width: 100%;
  border-radius: 0.25rem;
  color: #000;
}

.membership textarea:focus {
  border: 1px solid #000;
  outline: none
}



.membership .upper-form .error-textarea {
  resize: none;
  width: 100%;
  border: 1px solid var(--component-accent-color1);
  font-family: var(--plain-text-font);
  font-size: 0.875rem;
  font-weight: 400;
  display: block;
  padding: 0.6rem 0 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #000;
}

.membership .upper-form .success-textarea {
  resize: none;
  width: 100%;
  border: 1px solid #A7ACBC;
  font-family: var(--plain-text-font);
  font-size: 0.875rem;
  font-weight: 400;
  display: block;
  padding: 0.6rem 0 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: #A7ACBC;
}

.membership .upper-form .success-label {
  font-family: var(--sans-serif-font);
  color: #A7ACBC;
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.membership .upper-form .success-input {
  font-family: var(--plain-text-font);
  font-size: 1rem;
  font-weight: 400;
  display: block;
  padding: 0.6rem 0 0.25rem 0.5rem;
  width: 100%;
  border: 1px solid #A7ACBC;
  border-radius: 0.25rem;
  color: #A7ACBC;
}


</style>