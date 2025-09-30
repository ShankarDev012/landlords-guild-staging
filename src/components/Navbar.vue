<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-white border-bottom p-0 position-sticky top-0 left-0">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">
                    <img src="/images/logo.png" alt="logo" width="120">
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto gap-md-2">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/price" class="nav-link">Pricing</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <RouterLink to="/services" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Services
                            </RouterLink>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Services (England)</a></li>
                                <li><a class="dropdown-item" href="#">Services (Wales)</a></li>
                            </ul>
                        </li>
                         <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Forms
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Forms (England)</a></li>
                                <li><a class="dropdown-item" href="#">Forms (Wales)</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                News
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">News (England)</a></li>
                                <li><a class="dropdown-item" href="#">News (Wales)</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Housing Timeline
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Timeline (England)</a></li>
                                <li><a class="dropdown-item" href="#">Timeline (Wales)</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Search
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Search (England)</a></li>
                                <li><a class="dropdown-item" href="#">Search (Wales)</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/member" class="nav-link">Account</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineOptions({ name: 'AppNavbar' });
RouterLink
</script>

<style scoped></style>