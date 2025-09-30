<template>
    <div class="py-5 ">
        <h2 class="text-center">Signup Form</h2>
        <p class="text-center fs-5">If you already have an account on our website, please <RouterLink to="/member"
                class="text-decoration-none">
                log in</RouterLink> to continue</p>
        <div>
            <SignUpFormDetails />
        </div>
        
    </div>
</template>

<script setup>
import SignUpFormDetails from './components/SignUpFormDetails.vue';

defineOptions({ name: "signIn" });

</script>

<style scoped>



/* //button */
.button {
    position: relative;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    padding-inline: 1.25rem;
    background-color: var(--primary-color);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    gap: 10px;
    font-weight: 600;
    border: 1px solid #8d8d8dfb;
    outline: none;
    overflow: hidden;
    font-size: 15px;
    cursor: pointer;
    width: fit-content;
}

.icon {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease-in-out;
}

.button:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.6);
}

.button:hover .icon {
    transform: translate(4px);
}

.button:hover::before {
    animation: shine 1.5s ease-out infinite;
}

.button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0) 70%);
    top: 0;
    left: -100px;
    opacity: 0.6;
}

@keyframes shine {
    0% {
        left: -100px;
    }

    60% {
        left: 100%;
    }

    to {
        left: 100%;
    }
}
</style>