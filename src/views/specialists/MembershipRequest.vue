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
                      <router-link :to="/membership-request/">Членство</router-link>
                    </div>
              </div>
        
      <form @submit.prevent="handleSubmit" :class="{'success-form' : submitSuccess}" autocomplete="on">
        
        <div class="subpage-title" style="text-align: center;">Заяка на членство</div>
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

          <label>Дата рождения <span>*</span></label>
          <input :readonly="submitSuccess"  :class="{'invalid' : errorDateBirth}" type="date" v-model="dateBirth" id="dateBirth"  required>
  
          <label>Место рождения <span>*</span></label>
          <input :readonly="submitSuccess" type="text" v-model="placeBirth" id="placeBirth" :class="{'invalid' : errorPlaceBirth}" required>
  
          <label>Адрес места жительства <span>*</span></label>
          <input :readonly="submitSuccess"  type="tel" v-model="address" id="address" :class="{'invalid' : errorAddress}" required>
  
          <label>Номер/серия удостоверения личности <span>*</span></label>
          <input placeholder="123456789" :readonly="submitSuccess" type="text" v-model="idDoc" id="idDoc"  :class="{'invalid' : errorIdDoc}" required>
  
          <label>Дата выдачи удостоверения личности <span>*</span></label>
          <input :readonly="submitSuccess" type="date" v-model="dateDoc" id="dateDoc" :class="{'invalid' : errorDateDoc}" required>
  
          <label>Орган выдачи удостоверения личности <span>*</span></label>
          <input :readonly="submitSuccess" type="text" v-model="placeDoc" id="placeDoc"  :class="{'invalid' : errorPlaceDoc}" required>
  
          <label>Образование (учебное заведение, специальность, дата окончания) <span>*</span></label>
          <textarea :readonly="submitSuccess" rows = "10" :class="{'invalid' : errorEducation}"  v-model="education" required/>
  
          <label>Дополнительное образование</label>
          <textarea :readonly="submitSuccess" rows = "10" v-model="addEducation"/>
     
          <label>Интересы и увлечения</label>
          <textarea :readonly="submitSuccess" rows = "10" v-model="interests"/>
     
          <label>Опыт работы</label>
          <textarea :readonly="submitSuccess" rows = "10" v-model="experience"/>
     
          <label>Прошу принять в члены ОО «Общество специалистов по артериальной гипертонии и кардиоваскулярной профилактике» на добровольной основе с <span>*</span></label>
          <input :readonly="submitSuccess" type="date" v-model="dateMember" id="dateMember" :class="{'invalid' : errorDateMember}" required>
  
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
        experience: null, 
        dateMember: null
    }
  },
  computed: {
    enableSubmit: function() {
      return this.firstName && this.lastName && this.email && this.phoneNumber && this.address && this.dateBirth && this.placeBirth && 
        this.idDoc && this.dateDoc && this.placeDoc && this.terms && this.education
    },
    errorEducation: function() {
      if(this.education != null) {
        return this.education.length == 0
      } else {
        return false
      }
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
    errorIdDoc: function() {
      if(this.idDoc != null) {
        if(/[0-9]{9}/.test(this.idDoc)) {
          return false
        } else {
          return true
        }
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
        if(/^[0-3][0-9]\/[0-1][0-9]\/[12][09][0-9][0-9]$/.test(this.dateDoc)) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    }, 
    errorDateBirth: function() {
      if(this.dateBirth != null) {
        if(/^[0-3][0-9]\/[0-1][0-9]\/[12][09][0-9][0-9]$/.test(this.dateDoc)) {
          return false
        } else {
          return true
        }
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
    errorDateMember: function() {
      if(this.dateMember != null) {
        if(/^[0-3][0-9]\/[0-1][0-9]\/[12][09][0-9][0-9]$/.test(this.dateDoc)) {
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    }, 
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
      isBirthDate: function (e) {
        let char = String.fromCharCode(e.keyCode);
        e.preventDefault()
        if (/^[0-9/.-]$/.test(char)) {
          if (this.dateBirth == null && !/^[/.-]$/.test(char)) {
            this.dateBirth = char
          } else {
            if(this.dateBirth.length == 0 && !/^[/.-]$/.test(char)) {
              this.dateBirth = char
            } else if (this.dateBirth.length == 1) {
              if(/^[/.-]$/.test(char)) {
                this.dateBirth = '0' + this.dateBirth + '/'
              } else {
                this.dateBirth = this.dateBirth + char + '/'
              }
            } else if (this.dateBirth.length == 4) {
              if(/^[/.-]$/.test(char)) {
                this.dateBirth = this.dateBirth.slice(0, 3) +  '0' + this.dateBirth[3] + '/'
              } else {
                this.dateBirth = this.dateBirth + char + '/'
              }
            } else {
              if (this.dateBirth.length < 10 && !/^[/.-]$/.test(char)) {
                this.dateBirth = this.dateBirth + char
              }
            }
          }
        }
      },
      isIdDocDate: function (e) {
        let char = String.fromCharCode(e.keyCode);
        e.preventDefault()
        if (/^[0-9/.-]$/.test(char)) {
          if (this.dateDoc == null && !/^[/.-]$/.test(char)) {
            this.dateDoc = char
          } else {
            if(this.dateDoc.length == 0 && !/^[/.-]$/.test(char)) {
              this.dateDoc = char
            } else if (this.dateDoc.length == 1) {
              if(/^[/.-]$/.test(char)) {
                this.dateDoc = '0' + this.dateDoc + '/'
              } else {
                this.dateDoc = this.dateDoc + char + '/'
              }
            } else if (this.dateDoc.length == 4) {
              if(/^[/.-]$/.test(char)) {
                this.dateDoc = this.dateDoc.slice(0, 3) +  '0' + this.dateDoc[3] + '/'
              } else {
                this.dateDoc = this.dateDoc + char + '/'
              }
            } else {
              if (this.dateDoc.length < 10 && !/^[/.-]$/.test(char)) {
                this.dateDoc = this.dateDoc + char
              }
            }
          }
        }
      },
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

@media only screen and (max-width: 768px) {
.contacts {
    width: 100%;
    margin-top: 3rem;
    padding: 0 1rem;
}

.membership {
  width: 100%;
}

.membership form {
  margin: 1rem 1rem;
  background: #FFF;
  text-align: left;
  padding: 1rem 0;
  border-radius: 10px;
}

.membership .upper-form {
  max-width: 100%;
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
  max-width: 100%;
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
}


@media only screen and (min-width: 1024px) {

.greyback {
  background-color: var(--component-grey-color);
 } 


form {
    display: block;
    width: 75%;
    margin: 3rem auto 6rem auto;
    background: #FFF;
    text-align: left;
    padding: 3rem 10%;
    border-radius: 0.5rem;
}

form * {
  transition: all 0.1s ease;
}

form.success-form span, label, form.success-form input, form.success-form textarea{
  color: #818698;
}

form.success-forminput:focus {
  border: 1px solid #C4DAE5;
  outline: none;
}

form span {
  font-family: var(--plain-text-font);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-accent-color1);
}

label {
  display: inline-block;
  font-family: var(--plain-text-font);
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem; 
}   

input:focus {
  border: 1px solid #FFF;
  outline: 1px solid #454545;
}

input, textarea {
  width: 100%;
  border: 1px solid #C4DAE5;
  border-radius: 0.25rem;
  color: #454545;
  margin-bottom: 1.5rem;
  font-family: var(--plain-text-font);
  padding: 14px 14px 12px 14px;
  font-weight: 400;
  display: block;
  font-size: 1rem;
}

input {
  height: 48px;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  padding: 0;
}

input[type="checkbox"]:focus {
  border: none;
  outline: none
}

textarea {
  resize: none;
}

textarea:focus {
  border: 1px solid #454545;
  outline: 1px solid #454545;
}

.invalid {
  border: 1px solid var(--component-accent-color1);
  outline: none;
}

.consent {
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.consent-label {
  margin: 0 0 0 2rem;
}

.consent-label span {
  cursor: pointer;
}

.checkbox-container {
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 22px;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 20px;
  width: 20px;
  background-color: #FFF;
  border: 1px solid #C4DAE5;
  border-radius: 0.25rem;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: var(--component-accent-color2);
  border: 1px solid var(--component-accent-color2);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

}
</style>