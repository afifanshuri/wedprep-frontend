<template>
    <main>
        <Navbar/>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text-center">View Caterings</h1>
                    <router-link to="addCatering">Add</router-link>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Catering Name</th>
                                <th scope="col">Version</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="catering in caterings" :key="catering.id">
                                <th scope="row">{{catering.id}}</th>
                                <td>{{ catering.cateringName }}</td>
                                <td>{{ catering.version }}</td>
                                <td>
                                    <button class="btn btn-danger mx-2" 
                                    @click="$event => deleteCatering(catering.id)">Delete</button>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
import Navbar from '../../components/Navbar.vue';


export default {
    name: 'viewCatering',
    components: {
        Navbar
    },
    data() {
        return {
            caterings: []
        }
    },

    methods: {
        getCateringList() {
            fetch(`http://localhost:8080/wedprep/api/catering/view`)
                .then(res => res.json())
                .then(data => {
                    this.caterings = data
                    console.log(data)
                })
        },

        deleteCatering(id) {
            fetch(`http://localhost:8080/wedprep/api/catering/delete/${id}`,
                {
                    method: 'DELETE'
                })
                .then(data => {
                    console.log(data)
                    this.getCateringList()
                })
        }
    },

    beforeMount(){
        this.getCateringList()
    }

}
</script>