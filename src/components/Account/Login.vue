<template>
   <div class="member-section">
     <div class="container">
        <div class="row justify-content-between">
            <div class="col-md-4">
                <div class="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
                    <div class="form-container">
                        <div class="heading">Sign in</div>
                        <form action="" class="form">
                            <input required="" class="input" type="email" name="email" id="email"
                                placeholder="Username/E-mail">
                            <input required="" class="input" type="password" name="password" id="password"
                                placeholder="Password">
                                <label class="stay-check mt-3"><input type="checkbox" name="stay" id="stay">  Stay signed in</label>
                            <input class="login-button" type="submit" value="Sign In">
                            <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
                        </form>
                    </div>
                    <p class="mt-4">Not registered yet? <router-link to="/signup">Signup here</router-link></p>
                </div>
            </div>
            <div class="col-md-7">
                <div>
                    <h2 class="display-5">Guild of Residential Landlords</h2>
                    <p>Subscribe now to get these benefits and more ...</p>
                    <ul style="list-style: none;" class="p-0 fs-5">
                        <li><i class="bi bi-check2-square"></i>
                            The tenancy builder tool will do it all for you, using the most up-to-date forms and
                            compiling everything you need for a legally binding document.</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Unlimited tenancy agreement downloads</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Unlimited downloads of forms and templates</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Full access to Landlord Handbook</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Dedicated advice phone line</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Access to helpful wizards</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Discounts</li>
                        <li class="my-2"><i class="bi bi-check2-square"></i> Company or individual signup</li>
                    </ul>
                    <div class="d-flex gap-2 flex-md-row flex-column-reverse mt-md-4">
                        <PrimaryButton :dynamic-btn="memberActionBtns.pricing" />
                        <PrimaryButton :dynamic-btn="memberActionBtns.england" />
                        <PrimaryButton :dynamic-btn="memberActionBtns.wales"   />
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({ name: "logIn" });
import PrimaryButton from '../PrimaryButton.vue';

const memberActionBtns = ref(
    {
        pricing: "See pricing information and signup now.",
        england: "England Home",
        wales: "Wales Home",
    },
);

</script>

<style scoped>
.member-section{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 0;
}
.form-container {
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgba(187, 157, 177, 0.5);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;

}

.heading {
    text-align: center;
    font-weight: 800;
    font-size: 30px;
    color: #91278F;
    text-transform: uppercase;
}

.form {
    margin-top: 20px;
}

.form .input {
    width: 100%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
}

.form .input::-moz-placeholder {
    color: rgb(170, 170, 170);
}

.form .input::placeholder {
    color: rgb(170, 170, 170);
}

.form .input:focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
}

.form .forgot-password {
    display: block;
    margin-top: 10px;
    margin-left: 10px;
}

.form .forgot-password a {
    font-size: 16px;
    color: #0099ff;
    text-decoration: none;
}

.form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(120deg, rgba(187, 157, 177, 1) 17%, rgba(145, 39, 143, 0.74) 70%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
}

.form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
}

.form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
}

.social-account-container {
    margin-top: 25px;
}

.social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: rgb(170, 170, 170);
}

.social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 5px;
}

.social-account-container .social-accounts .social-button {
    background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
    border: 5px solid white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.2s ease-in-out;
}

.social-account-container .social-accounts .social-button .svg {
    fill: white;
    margin: auto;
}

.social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
}

.social-account-container .social-accounts .social-button:active {
    transform: scale(0.9);
}

.agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
}

.agreement a {
    text-decoration: none;
    color: #0099ff;
    font-size: 9px;
}
.stay-check{
    font-size: 16px;
}
.stay-check input{
    width: 16px;
    height: 16px;
}
label.stay-check {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 10px;
}
</style>