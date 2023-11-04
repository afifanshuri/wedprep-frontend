<template>
    <main>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link :to="{name:'home'}" class="navbar-brand">WedPrep</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-nav">
                        <router-link :to="{name : 'home'}" class="nav-link">Home</router-link>
                        <router-link :to="{name : 'cateringPage'}" class="nav-link">Catering</router-link>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link :to="{name : 'home'}" class="nav-link">Home</router-link>
                        <router-link :to="{name : 'cateringPage'}" class="nav-link">Catering</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </main>
</template>