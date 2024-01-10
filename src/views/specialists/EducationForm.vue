<template>
  <div class="education">
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <input type="email" v-model="email" required>
  
      <label>Password:</label>
      <input type="password" v-model="password" required>
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
  
  
      <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept terms and conditions</label>
      </div>
  
      <div class="submit">
        <button>Create an Account</button>
      </div>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        role: 'developer',
        terms: false,
        skills: [],
        tempSkill: '',
        passwordError: null,
      }
    },
    methods: {
      handleSubmit() {
        // validate password
        this.passwordError = this.password.length > 5 ?
          '' : 'Password must be at least 6 characters long'
  
        if (!this.passwordError) {
          // make request to database to save user
          console.log('email: ', this.email)
          console.log('password: ', this.password)
          console.log('role: ', this.role)
          console.log('skills: ', this.skills)
          console.log('terms accepted: ', this.terms)
        }
      }
    }
  }
  </script>
  
  <style>
    
.education form {
      max-width: 420px;
      margin: 30px 0 30px 0;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
    }

    .education label {
      font-family: var(--plain-text-font);
      color: var(--text-accent-color2);
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 400;
    }
    
    .education input, select {
      display: block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
    }
    .education input[type="checkbox"] {
      display: inline-block;
      width: 16px;
      margin: 0 10px 0 0;
      position: relative;
      top: 2px;
    }
    .education .pill {
      display: inline-block;
      margin: 20px 10px 0 0;
      padding: 6px 12px;
      background: #eee;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
      color: #777;
      cursor: pointer;
    }
    .education button {
      background: #0b6dff;
      border: 0;
      padding: 10px 20px;
      margin-top: 20px;
      color: white;
      border-radius: 20px;
    }
    .education .submit {
      text-align: center;
    }
    .education .error {
      color: #ff0062;
      margin-top: 10px;
      font-size: 0.8em;
      font-weight: bold;
    }
  </style>