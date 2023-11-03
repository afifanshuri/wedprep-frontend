<template>
    <main>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link :to="{name : 'viewAllCaterings'}" class="nav-link">All Catering List</router-link>
                        <router-link :to="{name : 'addCatering'}" class="nav-link">Add a catering</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </main>
</template>