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
                                <th scope="col">Catering Name</th>
                                <th scope="col">Menu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="catering in caterings" :key="catering.id">
                                <td>{{ catering.cateringName }}</td>
                                <td>{{ catering.menu }}</td>
                                <td>
                                    <button class="btn btn-danger mx-2" 
                                    @click="$event => deleteCatering(catering.id)">Delete</button>
                                    
                                </td>

                                <td>
                                    <button class="btn btn-primary mx-2" 
                                    @click="$event => clickCateringDetails(catering.id,catering.cateringName)">Details</button>
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
        },

        clickCateringDetails(id,name){
            this.$router.push({ name: 'cateringDetailsPage', params: {cateringId: id,cateringName: name} });
        }
    },

    beforeMount(){
        this.getCateringList()
    }

}
</script>