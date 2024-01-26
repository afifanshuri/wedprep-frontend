<template>
    <main>
            <div class="mb-3">
                <label for="cateringName" class="form-label">Catering Name</label>
                <input type="text" class="form-control" id="cateringName" 
                placeholder="Enter Catering Name" v-model="catering.cateringName">
            </div>
            <div class="mb-3">
                <label for="menu" class="form-label">Menu</label>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Menu Name</th>
                        <th scope="col">Menu Details</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="m in menuList" :key="m.id">
                        <td>{{ m.menuName }}</td>
                        <td>{{ m.menuDetails }}</td>
                        <td>{{ m.price }}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMenuDialog">Add Menu</button>
            </div>
            <input type="submit" class="btn btn-primary w-100" value="Submit" v-on:click="saveCatering">
        

        <div  class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" id="addMenuDialog">
            <form class="modal-dialog" @submit.prevent="onAddMenu">
                <div class="modal-content">
                <div class="mb-3">
                    <label for="menuName" class="form-label">Menu Name</label>
                    <input type="text" class="form-control" id="menuName" 
                    placeholder="Enter Menu Name" v-model="menuTemp.menuName">
                </div>
                <div class="mb-3">
                    <label for="menuDetails" class="form-label">Menu Details</label>
                    <textarea class="form-control" id="menuDetails" rows="3"
                    v-model="menuTemp.menuDetails"></textarea>
                </div>
                <div class="mb-3">
                    <label for="menuPrice" class="form-label">Price</label>
                    <input type="number" class="form-control" id="menuPrice" 
                    placeholder="Enter Price per Pax" v-model="menuTemp.price">
                </div>
                <input type="submit" class="btn btn-primary w-100" value="Add" data-bs-dismiss="modal">
                </div>
            </form>
        </div>
        
    </main>
</template>

<script>
import { MAIN_API,API_DIRECTORY,API_METHOD } from '../../constants/RouteConstant';
export default {
    name: 'AddCatering',
    data() {
        return {
            catering: {
                cateringName: '',  
            },
            menuTemp: {
                menuName: '',
                menuDetails: '',
                price: '',
            },
            menu:{
                menuDetails:'',
            },
            menuList: []
        }

    },
    methods: {
        saveCatering() {
            this.menu.menuDetails = JSON.stringify(this.menuList);
            console.log("MENU");
            console.log(this.menu);
            const cateringDTO = {
                cateringObj:  JSON.parse(JSON.stringify(this.catering)),
                menuObj:  JSON.parse(JSON.stringify(this.menu)),
            };
            console.log(cateringDTO);

            fetch(MAIN_API + "/" + API_DIRECTORY.get("CATERING") + "/" + API_METHOD.get("ADD"),{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(cateringDTO)
            })
                .then(data => {
                    console.log("saved");
                    this.$router.push("viewCatering");
                })
        },

        onAddMenu(){
            this.menuList.push(this.menuTemp);
            this.menuTemp = {
                menuName:'',
                menuDetails: '',
                price: '',
            }
            
        }
    }
}
</script>