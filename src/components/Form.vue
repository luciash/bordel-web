<template>
  <div>
    <hr>
    <div class="row">
      <div class="three columns">
        <h2>
          How to join?
        </h2>
        <p>
          Fill out the form or just show up to say hi!
          We'll get back to you asap with an assigned member id & membership fee payment information.
        </p>
      </div>
      <div class="nine columns">
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="row">
            <label>Name</label>
            <input type="text" name="user_name">
            <label>Email</label>
            <input type="email" name="user_email">
            <label> When do you want to visit us? </label>
            <textarea name="message"></textarea>
            <input type="submit" :value="this.submitTxt" :disabled="this.formSent">
          </div>
        </form>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com';

  export default {
    name: 'Form',
    data() {
      return {
        formSent: false,
        submitTxt: 'SEND'
      };
    },
    props: {

    },
    methods: {
      sendEmail(e) {
        this.formSent = true;
        emailjs.sendForm('sendgrid', 'bordel', e.target, 'user_yp7nwFFITxZGqJNNYO8vr')
          .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            this.formSent = true;
            this.submitTxt = 'SUCCESS! SEE YOU SOON!'
          }, (error) => {
            this.formSent = false;
            console.log('FAILED...', error);
            this.submitTxt = 'OOPS, PLEASE TRY AGAIN!'
          });
      }
    }
  }
</script>

<style scoped>


  p {
    text-align: justify;
  }

  form > label {
    color: white;
  }

  input, textarea {
    color: black;
  }

  input, textarea {
    width: 80%;
  }

  textarea {
    min-height: 115px;
    max-width: 80%;
    min-width: 80%;
  }

  input[type=submit] {
    color: #000;
    background-color: rgba(0, 255, 0, 0.85);
    border-color: rgba(0, 255, 0, 0.85);
  }

  input[type=submit]:hover {
    color: #000;
    background-color: rgba(0, 255, 0, 1);
    border-color: rgba(0, 255, 0, 1);
  }

</style>
