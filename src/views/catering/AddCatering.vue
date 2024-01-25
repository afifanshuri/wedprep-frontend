<template>
    <main>
        <Navbar />
        <form @submit.prevent="addCatering">
            <div class="mb-3">
                <label for="cateringName" class="form-label">Catering Name</label>
                <input type="text" class="form-control" id="cateringName" 
                placeholder="Enter Catering Name" v-model="catering.cateringName">
            </div>
            <div class="mb-3">
                <label for="menu" class="form-label">Menu</label>
                <textarea class="form-control" id="menu" rows="3"
                v-model="catering.menu"></textarea>
            </div>
            <input type="submit" class="btn btn-primary w-100" value="Submit">
        </form>
        
    </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue';

export default {
    name: 'AddCatering',
    components: {
        Navbar
    },
    data() {
        return {
            catering: {
                cateringName: '',
                menu: '',
            }
        }

    },
    methods: {
        addCatering() {
            fetch(`http://localhost:8080/wedprep/api/catering/add`,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.catering)
            })
                .then(data => {
                    console.log(data)
                    this.$router.push("home")
                })
        }
    }
}
</script>