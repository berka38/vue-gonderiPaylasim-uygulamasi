<style>
    body{
    background-color: black;
    }

    .page404{
    text-align: center;
    color: white;
    }

    .page404_title{
    font-size: 10rem;
    opacity: 0.7;
    }
    a{
    color: white;
    }
    .nav{
    position: relative;
    border: 1px solid black;
    background-color: blue;
    list-style-type: none;
    height:10rem;
    }

    .flex{
    display: flex;
    flex-direction: column;
    }

    .nav-items{
    margin: 1%;
    }

    .nav-item{
    position: relative;
    left: 7%;
    
    color: white;
    border: 10px red solid;
    border-radius: 3px;
    background-color: red;
    z-index: 2;
    }

    .homeMain{
    position: relative;
    border: solid 1px black;
    border-radius: 10px;
    background-color: wheat;
    width: 80%;
    
    margin-left: 10%;
    margin-top: 10%;
    }
    .mainFlex{
    display: flex;
    flex-direction: column;
    }
    .mainCard{
    border: 1px black solid;
    background-color: black;
    margin: auto;
    width: 300px;
    text-align: center;
    color: white;
    
    height: 20rem;
    }

    .login{
    position: relative;
    border: solid 1px black;
    border-radius: 10px;
    background-color: white;
    width: 50%;
    height: 450px;
    margin-left: 30%;
    top: 125px;
    background-color: rgb(50, 50, 50);
    }

    .baslık{
    position: relative;
    left: 10%;
    color: white;
    }

    .butn{
    position: relative;
    border: 1px black;
    top: 120px;
    left: 60%;
    width: 30%;
    height: 50px;
    border-radius: 15px;
    }

    .usr-txt{
    position: relative;
    top: 30%;
    left:10%;
    color: white;
    }

    .usr-inpt{
    position: relative;
    border: 1px black;
    border-radius: 5px;
    width: 80%;
    height: 30px;
    top: 5px;
    left: 10%;
    box-shadow: 5px 5px;
    }

    .psw-txt{
    position: relative;
    top: 2rem;
    left:10%;
    color: white;
    }

    .psw-inpt{
    position: relative;
    border: 1px black;
    border-radius: 5px;
    width: 80%;
    height: 30px;
    top: 5rem;
    right: 4%;
    box-shadow: 5px 5px;
    }

    .kurum-baslık{
    position: relative;
    top: 60px;
    left: 175px;
    color: white;
    opacity: 0.7;
    }

    .kurum-acıklama{
    position: relative;
    top: 70px;
    left: 110px;
    color: white;
    opacity: 0.7;
    }


    @media screen and (min-width:700px) {
    .flex{
        display: flex;
        flex-direction: row;
    }
    .nav-item{
        position: relative;
        left: 90%;
        bottom: 3rem;
        color: white;
        border: 10px red solid;
        border-radius: 3px;
        background-color: red;
        z-index: 2;
    }

    .nav{
        position: relative;
        border: 1px solid black;
        background-color: blue;
        list-style-type: none;
        height:5rem;
    }

    .mainFlex{
        display: flex;
        flex-direction: row;
    }

    .mainCard{
        position: relative;
        border: 1px black solid;
        background-color: black;
        margin: 2%;
        width: 300px;
        text-align: center;
        color: white;

        height: 20rem;
    }

    .login{
        position: relative;
        border: solid 1px black;
        border-radius: 10px;
        background-color: white;
        width: 40%;
        max-width: 30%;
        height: 450px;
        margin-left: 40%;
        top: 125px;
        background-color: rgb(50, 50, 50);
    }
    }

    @media screen and (min-width:900px) { 
    .login{
        position: relative;
        border: solid 1px black;
        border-radius: 10px;
        background-color: white;
        width: 30%;
        height: 450px;
        margin-left: 35%;
        top: 125px;
        background-color: rgb(50, 50, 50);
    }
    }

</style>

<template>
    <div>
        <div class="login">
        <div>
            <h1 class="baslık">Login page</h1>
            <button @click="infoacc" class="btn btn-info" style="margin: -10% 90%; position: absolute;">?</button>
        </div>
        
        <hr>
        <div>
            <label for="text" class="usr-txt"><h3><strong>Kullanıcı adı</strong></h3></label>
            <input type="text" class="usr-inpt" v-model="userName">
        </div>

        <div>
            <label for="text" class="psw-txt"><h3><strong>Şifre</strong></h3></label>
            <input type="password" class="psw-inpt" v-model="password">
        </div>

        

        <button @click="login" class="butn btn btn-success">Giriş yap</button>

    </div> 
    </div>
</template>

<script lang="ts">
    import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  name: "login",
  components: {
  },
  setup() {
    const userName = ref("");
    const password = ref("");
    const router = useRouter();
    const login = () => {
        if(userName.value === "admin" && password.value === "pass"){
            router.push({ name:"home" });
            const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
        })

        Toast.fire({
            icon: 'success',
            title: 'Giriş yaptınız tebrikler.'
        })
        }else{
            Swal.fire(
                'Hata',
                'Hesap bilgileriniz hatalı',
                'error'
            )
        }
    };
    const infoacc = () => {
        Swal.fire(
            'bilmiyormusun :/',
            'kullanıcı adı: admin | şifre: pass',
            'question'
        )
    }
    const onSubmitLogin = () => {};
    return {
      login,
      userName,
      password,
      onSubmitLogin,
      infoacc
    };
  },
};

</script>