<template>
  <div class="site-content greyback">
        <div class="site-content-in">
            <div class="breadcrumbs-box" style="margin-top: 3rem;">
                    <div class="breadcrumb-past">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <ChevronRight color="grey"/>
                    <div class="breadcrumb-now">
                        <router-link to="/specialists/">Специалистам</router-link>
                    </div>
                    <ChevronRight color="grey"/>
                    <div class="breadcrumb-now">
                      <router-link :to="/membership-request/">Обучение</router-link>
                    </div>
              </div>
        
      <form @submit.prevent="handleSubmit" :class="{'success-form' : submitSuccess}" autocomplete="on">
        
        <div class="subpage-title" style="text-align: center;">Заяка на обучение</div>
          <label>Фамилия <span>*</span></label>
          <input  :readonly="submitSuccess" type="text" v-model="lastName" id="lastName" :class="{'invalid' : errorLastName}" required>

          <label>Имя <span>*</span></label>
          <input :readonly="submitSuccess" type="text" v-model="firstName" id="firstName"  :class="{'invalid' : errorFirstName}" required>
    

          <label>Отчество</label>
          <input :readonly="submitSuccess" type="text" v-model="patroName" id="patroName" required>
  
  
          <label>Email <span>*</span></label>
          <input :readonly="submitSuccess" :class="{'invalid' : errorEmail}" type="email" id="email"   v-model="email" @blur="validateEmail" required>
      
          <label>Контактный телефон <span>*</span></label>
          <input id="phoneNumber" @paste="pasteNum($event)" @keydown="isNumber($event)" placeholder="+7 (___) ___ - __ - __" :readonly="submitSuccess" :class="{'invalid' : errorPhoneNumber}" type="tel" v-model="phoneNumber" required>
  
          <label>Специальность <span>*</span></label>
          <input :readonly="submitSuccess" type="text" v-model="speciality" id="speciality"  :class="{'invalid' : errorSpeciality}" required>
 
          <label>Адрес места жительства <span>*</span></label>
          <input :readonly="submitSuccess"  type="text" v-model="city" id="city" :class="{'invalid' : errorCity}" required>
  
          <label>Адрес места работы <span>*</span></label>
          <input :readonly="submitSuccess" type="text" v-model="jobPlace" id="jobPlace"  :class="{'invalid' : errorJobPlace}" required>
          
          <div class="picks-box">
        
            <label>Выберете предпочтительный месяц для занятий <span>*</span></label>
            <div class="options">
              <div class="options-item">
                <div class="option-input">
                  <input :disabled="submitSuccess" type="radio" value="Апрель" v-model="pickedMonth" required>
                </div>
                <label>Апрель</label>
              </div>

              <div class="checkbox-adjust">
                <div class="option-input">
                <input :disabled="submitSuccess" type="radio" id="may" name="month" value="Май" v-model="pickedMonth" required>
                </div><label>Май</label>
              </div>
            </div>

            <label>Выберете предпочтительное время для занятий <span>*</span></label>
            <div class="options">
              <div class="checkbox-adjust">
                <div class="option-input">
                 <input :disabled="submitSuccess" type="radio" id="first" value="В первой половине дня" v-model="pickedTime" required>          
              </div><label>1-я половина дня</label>
              </div>

              <div class="options-item">
                <div class="option-input">
                <input :disabled="submitSuccess" type="radio" id="second" value="Во второй половине дня" v-model="pickedTime" required>
                </div><label >2-я половина дня</label><!--style="margin-left: 0.75rem;"-->
              </div>
            </div>
          </div>

          <div class="consent">
            <label class="checkbox-container">
              <input :disabled="submitSuccess" type="checkbox" v-model="terms" required>
              <span class="checkmark"></span>
            </label>
            <label class="consent-label" :style="{color: submitSuccess? '#A7ACBC': ''}">Принимаю <span @click.prevent="download">Условия политики конфиденциальности</span></label>
          </div>
          
    
        <div class="submit">
          <input :disabled="!enableSubmit" class="long-blue-button" @click="handleSubmit" value="Отправить заявку">
        </div>
  
      </form>
      <div class="long-blue-button" style="background-color: #FFF; margin: 1rem 0 0 0; border: 1px solid #5cb85c" v-if="submitSuccess">
        "Заявка успешно отправлена!"
      </div>

  
          </div>
          <Footer/>
        </div>
  
  
  
  </template>
  
<script>
import ChevronRight from '@/components/ChevronRight.vue';
import Footer from '@/components/Footer.vue';
import Axios from 'axios'

export default {
    name: 'MembershipRequest',
    components: {ChevronRight, Footer}, 
    data() {
      return {
        firstName: null,
        lastName: null,
        patroName: null,
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
    enableSubmit: function() {
      return this.name && this.email && this.phoneNumber && this.speciality && this.city && this.jobPlace && 
        this.terms && this.pickedMonth && this.pickedTime
    },
    errorPhoneNumber: function() {
      if(this.phoneNumber != null) {
        if (this.phoneNumber.length == 0) {
          return true
        } else if (this.phoneNumber.length < 18) {
          return true
        }
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
        return !this.validateEmail()
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
    }
  },
    methods: {
      formatNum: function(number) {
        if(!number) {
          return ''
        } else if (number === '+') {
          return '+'
        } else if (number === '7') {
          return '+7'
        } else if (number != '+' && number != '7' && number.length == 1) {
          return '+7 ( ' + number
        } else { 
        let chars = []
        const arr = ['+', '7', ' ', '(', '_', '_', '_', ')', ' ', '_', '_', '_', '–', '_', '_', '–', '_', '_']
        const pos = [1, 4, 5, 6, 9, 10, 11, 13, 14, 16, 17]
        for (let i = 0; i < number.length; i++) {
          if(chars.length == 11) {
            break
          } 
          if(/^[0-9]$/.test(number.charAt(i))) {
            chars.push(number.charAt(i))
          }
        }

        let output = []
        for (let i = 0; i < chars.length; i++) {
          arr[pos[i]] = chars[i]
        }
        for (let i = 0; i <= pos[chars.length - 1]; i++) {
          output.push(arr[i])
        }

        return output.join('')
      }
      },
      pasteNum: function(e) {
        let value = e.clipboardData.getData('text/plain')
        e.preventDefault()
        if(this.phoneNumber == null) {
          this.phoneNumber = this.formatNum(value)
        } else {
        let curPos = document.getElementById("phoneNumber").selectionStart; 
        this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos) + value + this.phoneNumber.slice(curPos))
        }

      },
      isNumber: function (e) {    
    
        if (e.key) {
          if(e.key.toLowerCase() === 'backspace' || e.key.toLowerCase() === 'delete') {
            this.eraseNum(e)
            return
          } 
        }
          let curPos = document.getElementById("phoneNumber").selectionStart;  
          let curPosEnd = document.getElementById("phoneNumber").selectionEnd;  
          let char = e.key
          if (/[0-9+]/.test(char)) {
            if (this.phoneNumber == null) {
              if(char == '7') {
                this.phoneNumber = '+'
              } else if (char != '+') {
                this.phoneNumber = '+7 ('
              }
            } else {
              if (char == '+') {
                //this.phoneNumber = this.formatNum(this.phoneNumber)
                this.phoneNumber = this.nextNum(this.phoneNumber)
                e.preventDefault()
              } else if (this.phoneNumber.length == 0) {
                  if (char == '7') {
                    this.phoneNumber = '+'
                  } else {
                    this.phoneNumber = '+7 ('
                  }
              } else if (this.phoneNumber == '+' && char != '7' ) {
                //let number = this.formatNum(this.phoneNumber.slice(0, curPos) + char + this.phoneNumber.slice(curPos))
                this.phoneNumber = '+7 ('
              } else if (this.phoneNumber == '+7' || this.phoneNumber == '+7 ' || this.phoneNumber == '+7 (' ) {
                this.phoneNumber = '+7 ('
              } else {
                if(curPos == curPosEnd) {
                  let lenStart = this.phoneNumber.length
                  this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos) + char + this.phoneNumber.slice(curPos))
                  
                  e.preventDefault()
                  let lenEnd = this.phoneNumber.length
                  let dif = lenEnd - lenStart
                  window.setTimeout(function() {
                    document.getElementById("phoneNumber").setSelectionRange(curPos + dif, curPos + dif);
                  }, 0)
                } else {
                  let lenStart = this.phoneNumber.length
                  this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos) + char + this.phoneNumber.slice(curPosEnd))
                
                  e.preventDefault()
                  let lenEnd = this.phoneNumber.length
                  let dif = lenEnd - lenStart
                  window.setTimeout(function() {
                    document.getElementById("phoneNumber").setSelectionRange(lenEnd, lenEnd);
                  }, 0)
                }
                
              }
            }
          } else {
              //let lenStart = this.phoneNumber? this.phoneNumber.length : 0
              if(e.key) {
                if(e.key.toLowerCase() === 'arrowright' || e.key.toLowerCase() === 'arrowleft') {
                  return
                } 
              }
              this.phoneNumber = this.nextNum(this.phoneNumber)
              e.preventDefault()
              let lenStart = this.phoneNumber? this.phoneNumber.length : 0
              /*let lenEnd = this.phoneNumber.length
              let dif = lenEnd - lenStart == 0 ? 1 : lenEnd - lenStart
              window.setTimeout(function() {
                document.getElementById("phoneNumber").setSelectionRange(curPos + dif, curPos + dif);
              }, 0)*/
              window.setTimeout(function() {
                document.getElementById("phoneNumber").setSelectionRange(lenStart, lenStart);
              }, 0)
          }
      },
      eraseNum: function(e) {
        const pos = [2, 3, 7, 8, 12, 15]
        let curPos = document.getElementById("phoneNumber").selectionStart; 
        let curPosEnd = document.getElementById("phoneNumber").selectionEnd;
        if (e.key) {
          if(e.key.toLowerCase() === 'backspace' && this.phoneNumber) {/////////////////
            if(curPos == curPosEnd) {
              
              let flag = false
              pos.forEach((x) => {
                if (curPos - 1 == x) {
                  e.preventDefault()
                  window.setTimeout(function() {
                    document.getElementById("phoneNumber").setSelectionRange(curPos - 1, curPos - 1);
                    }, 0)
                    flag=true
                }
              })
           
              if(flag) {
                return true
              }

              let lenStart = this.phoneNumber.length
              this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos - 1) + this.phoneNumber.slice(curPos))
              //this.phoneNumber = this.nextNum(this.phoneNumber)
              e.preventDefault()
              let lenEnd = this.phoneNumber.length
              let dif = lenEnd - lenStart
              window.setTimeout(function() {
                  document.getElementById("phoneNumber").setSelectionRange(curPos + dif, curPos + dif);
                }, 0)

            } else {
              this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos) + this.phoneNumber.slice(curPosEnd))
              //this.phoneNumber = this.nextNum(this.phoneNumber)
              e.preventDefault()
              let lenEnd = this.phoneNumber.length
              window.setTimeout(function() {
                document.getElementById("phoneNumber").setSelectionRange(lenEnd, lenEnd);
              }, 0)
            }
        } else if(e.key.toLowerCase() === 'delete' && this.phoneNumber) {///////////////
            if(curPos == curPosEnd) {
              let lenStart = this.phoneNumber.length
              this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos) + this.phoneNumber.slice(curPos + 1))
              //this.phoneNumber = this.nextNum(this.phoneNumber)
              e.preventDefault()
              let lenEnd = this.phoneNumber.length
              let dif = lenEnd - lenStart
              window.setTimeout(function() {
                document.getElementById("phoneNumber").setSelectionRange(curPos, curPos);
                }, 0) }
            else {
              this.phoneNumber = this.formatNum(this.phoneNumber.slice(0, curPos) + this.phoneNumber.slice(curPosEnd))
              //this.phoneNumber = this.nextNum(this.phoneNumber)
              e.preventDefault()
              let lenEnd = this.phoneNumber.length
              window.setTimeout(function() {
                document.getElementById("phoneNumber").setSelectionRange(lenEnd, lenEnd);
              }, 0)
            }
        } 
      }
      },
      nextNum: function(number) {
        if (!number) {
            return '+'
        } else if (number.length >= 18) {
          return number
        } else { 
        const arr = ['+', '7', ' ', '(', '_', '_', '_', ')', ' ', '_', '_', '_', '–', '_', '_', '–', '_', '_']
        const pos = [0, 1, 2, 3, 7, 8, 12, 15]
        
        for (let i = 0; i < pos.length; i++) {
          if(number.length == pos[i]) {
            return number + arr[pos[i]]
          }
        }

        return number
      }
      },
      validateEmail: function() {
        
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
          return true
        } else {
          return false
        }
      },
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
   }, 
    download: function () {
            Axios.get('/policy.pdf', { responseType: 'blob' })
                .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'policy.pdf';
                link.click();
                URL.revokeObjectURL(link.href);
            }).catch(console.error);
        }
}
}

</script>


<style>

.picks-box label {
  display: block;
  margin: 2rem 0 1rem 0;
  
  color: #818698;
}

.picks-box .options {
  display: flex;
  align-items: center;
}

.picks-box .options label {
  display: inline;
  margin: 0 0 0 1rem;
  padding: 0;
  color: #454545;

}

.picks-box .options>div {
  display: flex;
  width: 14rem;
  align-items: center;
}


.picks-box .options .option-input {
  display: inline-flex;
  
  align-items: center;
  justify-content: center;
}

.picks-box input {
  width: 0.875rem;
  height: 0.875rem;
  margin: 0;
  padding: 0;
}

.picks-box input:focus {
  outline: none;
  border: none;
}

.checkbox-adjust input {
  margin: 0;
  padding: 0;
  position: relative;
  right: 5px;
}

.options-item .option-input {
  margin-right: 5px;
}

@media only screen and (max-width: 768px) { 
  .picks-box .options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.picks-box .options>div {
  height: 2rem;
}
}


@media only screen and (max-width: 1023px) and (min-width: 769px) { 
  .picks-box .options {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.picks-box .options>div {
  height: 2rem;
}
}

@media only screen and (min-width: 1024px) { 
  .picks-box .options {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.picks-box .options>div {
  display: flex;
  width: 14rem;
  align-items: center;
}
}

</style>