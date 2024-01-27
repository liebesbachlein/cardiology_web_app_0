<template>
  <div class="education">
    <form @submit.prevent="handleSubmit">
        <label>ФИО</label>
        <input :readonly="submitSuccess" class="form-input" type="text" v-model="name" required>
        <label class="error-label" v-if="errorName">Обязательное поле</label>

        <label>Email</label>
        <input :readonly="submitSuccess" class="form-input" :class="errorEmail  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="email" v-model="email" required>
        <label  class="error-label" v-if="errorEmail">Обязательное поле</label>

        <label>Контактный телефон</label>
        <input :readonly="submitSuccess" class="form-input" :class="errorPhoneNumber  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="tel" v-model="phoneNumber" required>
        <label class="error-label" v-if="errorPhoneNumber">Обязательное поле</label>

        <label>Специальность</label>
        <input :readonly="submitSuccess" class="form-input" :class="errorSpeciality  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="text" v-model="speciality" required>
        <label  class="error-label" v-if="errorSpeciality">Обязательное поле</label>

        <label>Город</label>
        <input :readonly="submitSuccess" class="form-input" :class="errorCity  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="text" v-model="city" required>
        <label   class="error-label" v-if="errorCity">Обязательное поле</label>

        <label>Место работы</label>
        <input :readonly="submitSuccess" class="form-input" :class="errorJobPlace  ? 'error-input' : submitSuccess ? 'success-input' : ''" type="text" v-model="jobPlace" required>
        <label  class="error-label" v-if="errorJobPlace">Обязательное поле</label>

<!--
      <div class="picks-box">
        
        <p class="regular-p">Выберете предпочтительный месяц для занятий</p>

        <input :disabled="submitSuccess" type="radio" value="Апрель" v-model="pickedMonth" required>
        <label :style="{color: submitSuccess? '#A7ACBC': ''}">Апрель</label>


        <div class="checkbox-adjust">
          <input :disabled="submitSuccess" type="radio" id="may" name="month" value="Май" v-model="pickedMonth" required>
          <label :style="{color: submitSuccess? '#A7ACBC': ''}">Май</label>
        </div>

        <p class="error-p" v-if="errorTime">Выберете предпочтительное время для занятий!</p>
        <p>Выберете предпочтительное время для занятий</p>
        
        <div class="checkbox-adjust">
          <label  :style="{color: submitSuccess? '#A7ACBC': ''}">В первой половине дня</label>
          <input :disabled="submitSuccess" type="radio" value="В первой половине дня" v-model="pickedTime" required>          
        </div>

        <input :disabled="submitSuccess" type="radio" value="Во второй половине дня" v-model="pickedTime" required>
        <label v-if="submitSuccess" style="margin-left: 0.75rem; color: #A7ACBC" >Во второй половине дня</label>
        <label v-else style="margin-left: 0.75rem;">Во второй половине дня</label><br>
    </div>

    <div class="consent">
        <input :disabled="submitSuccess" type="checkbox" v-model="terms" required>
        <label class="error-label" v-if="errorTerms">Принимаю условия политики конфиденциальности</label>
        <label  class="regular-label" v-else :style="{color: submitSuccess? '#A7ACBC': ''}">Принимаю условия политики конфиденциальности</label>
    </div>

    <div class="submit">
      <div class="blue-button" style="background-color: #FFF; margin: 1rem 0 0 0; border: 1px solid #5cb85c" v-if="submitSuccess"><h4 style="color: #5cb85c; font-weight: 500;">Заявка успешно отправлена!</h4></div>
      <div v-else class="blue-button" style="background-color: var(--component-accent-color1); margin: 1rem 0 0 0;" @click="handleSubmit"><h4>Отправить заявку</h4></div>
    </div>
-->
    </form>
  </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        name: null,
        email: null,
        phoneNumber: null,
        speciality: null,
        city: null,
        jobPlace: null,
        terms: null,
        pickedTime: null,
        pickedMonth: null,
        submitSuccess: false
    }
  },
  computed: {
    errorPhoneNumber: function() {
      if(this.phoneNumber != null) {
        return this.phoneNumber.length == 0
      } else {
        return false
      }
    }, 
    errorName: function() {
      if(this.name != null) {
        return this.name.length == 0
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
    errorSpeciality: function() {
      if(this.speciality != null) {
        return this.speciality.length == 0
      } else {
        return false
      }
    }, 
    errorCity: function() {
      if(this.city != null) {
        return this.city.length == 0
      } else {
        return false
      }
    }, 
    errorJobPlace: function() {
      if(this.jobPlace != null) {
        return this.jobPlace.length == 0
      } else {
        return false
      }
    }, 
    errorTime: function() {
      if(this.pickedTime != null) {
        return this.pickedTime.length == 0
      } else {
        return false
      }
    }, 
    errorMonth: function() {
      if(this.pickedMonth != null) {
        return this.pickedMonth.length == 0
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
       
        if(this.name && this.email && this.phoneNumber && this.speciality && this.city && this.jobPlace && 
        this.terms && this.pickedMonth && this.pickedTime) {
          this.submitSuccess= true
        console.log('ФИО: ', this.name)
        console.log('Email: ', this.email)
        console.log('Контактный телефон: ', this.phoneNumber)
        console.log('Специальность: ', this.speciality)
        console.log('Город: ', this.city)
        console.log('Место работы: ', this.jobPlace)
        console.log('Предпочтительный месяц: ', this.pickedMonth)
        console.log('Предпочтительное время: ', this.pickedTime)
        console.log('Условия подписаны: ', this.terms? "Да" : "Нет")
        } 

        if(!this.terms) {
          this.terms = ''
          console.log(this.errorTerms)
        }

        if(!this.pickedMonth) {
          this.pickedMonth = ''
        }

        if(!this.pickedTime) {
          this.pickedTime = ''
        }

        if(!this.name) {
          this.name = ''
        }

        if(!this.email) {
          this.email = ''
        }

        if(!this.phoneNumber) {
          this.phoneNumber = ''
        }

        if(!this.city) {
          this.city = ''
        }

        if(!this.speciality) {
          this.speciality = ''
        }

        if(!this.jobPlace) {
          this.jobPlace = ''
        }

        
        
        
    }
  }
}
  </script>
  
<style>
/*
@media only screen and (max-width: 768px) {

.education .success-input {
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

.education form {
    margin: 0 0 30px 0;
    background-color: #FFF;
    text-align: left;
    padding: 40px 0;
    border-radius: 10px;
}

.education {
  max-width: 100%;
}

.education .regular-label {
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.education .error-label {
  color: var(--text-accent-color2);
  font-weight: 500;

  font-family: var(--sans-serif-font);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
}    

.education .success-label {
  font-family: var(--sans-serif-font);
  color: #A7ACBC;
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}


.education input:focus {
  border: 1px solid #000;
  outline: none;
}

.education .regular-input {
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

.education .error-input {
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

.education .success-input {
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

.education .picks-box {
  margin-top: 3rem;
}

.education .picks-box label {
  font-family: var(--plain-text-font);
  color: #000;
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.0625rem;
  font-weight: 400;
}

.education .picks-box .checkbox-adjust label {
  font-family: var(--plain-text-font);
  color: #000;
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0.7rem;
  font-size: 1.0625rem;
  font-weight: 400;
}

.education .picks-box .error-p {
  color: var(--text-accent-color1);
  font-weight: 500;
}

.education .picks-box .success-p {
  color: #A7ACBC;
  font-weight: 400;
}

.education .picks-box .checkbox-adjust {
  position: relative;
  right: 0.5rem;
}


.education .consent {
  display: flex;
  max-width: 100%;
}
    
.education .consent .regular-label {
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.education .consent .error-label { 
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color1);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}


.education .consent input[type="checkbox"] {
  display: inline-block;
  width: 1rem;
  margin: 0 1rem 0 0;
  position: relative;
  top: 2px;
}

}

@media only screen and (min-width: 1024px) {


.education form {
    margin: 30px 0 30px 0;
    background-color: #FFF;
    text-align: left;
    padding: 40px 0;
    border: 1px solid red
}

.education input {
   width: 50%; 
}

.regular-label, .error-label, .success-label {
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.education .error-label {
  color: var(--text-accent-color1);
}    

.education .success-label {
  color: #A7ACBC;
}


.education input:focus {
  border: 1px solid #000;
  outline: none;
}

.education .error-label, .success-input {
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

.education .error-input {
  border: 1px solid var(--component-accent-color1);
}

.education .success-input {
  border: 1px solid #A7ACBC;
  color: #A7ACBC;
}

.education .picks-box {
  margin-top: 3rem;
}

.education .picks-box label {
  font-family: var(--plain-text-font);
  color: #000;
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.0625rem;
  font-weight: 400;
}

.education .picks-box .checkbox-adjust label {
  font-family: var(--plain-text-font);
  color: #000;
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0.7rem;
  font-size: 1.0625rem;
  font-weight: 400;
}

.education .picks-box .error-p {
  color: var(--text-accent-color1);
  font-weight: 500;
}

.education .picks-box .success-p {
  color: #A7ACBC;
  font-weight: 400;
}

.education .picks-box .checkbox-adjust {
  position: relative;
  right: 0.5rem;
}


.education .consent {
  display: flex;
  max-width: 50%;
}
    
.education .consent .regular-label {
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color2);
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.education .consent .error-label { 
  font-family: var(--sans-serif-font);
  color: var(--text-accent-color1);
  display: inline-block;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
}

.education .consent input[type="checkbox"] {
  display: inline-block;
  width: 1rem;
  margin: 0 1rem 0 0;
  position: relative;
  top: 2px;
}

}*/
</style>