<template>
    <main>
                <div>
                    <h3>Caterings Listing</h3>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Catering Name</th>
                                <th scope="col">Menu</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="catering in caterings" :key="catering.id">
                                <td>{{ catering.cateringName }}</td>
                                <td>{{ catering.menu }}</td>
                                <td>
                                    <button class="btn btn-danger mx-2" 
                                    @click="$event => deleteCatering(catering.id)">Delete</button>
                                    <button class="btn btn-primary mx-2" 
                                    @click="$event => clickCateringDetails(catering.id,catering.cateringName)">Details</button>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </main>
</template>


<script>
import { MAIN_API,API_DIRECTORY,API_METHOD} from '../../constants/RouteConstant';


export default {
    name: 'viewCatering',
    data() {
        return {
            caterings: []
        }
    },

    methods: {
        getCateringList() {
            fetch(MAIN_API + "/" + API_DIRECTORY.get("CATERING")+ "/" + API_METHOD.get("VIEW"))
                .then(res => res.json())
                .then(data => {
                    this.caterings = data
                    console.log(data)
                })
        },

        deleteCatering(id) {
            fetch(MAIN_API + "/" + API_DIRECTORY.get("CATERING")+ "/" +API_METHOD.get("DELETE")+"/"+`${id}`,
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