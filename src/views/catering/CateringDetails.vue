<template>
  <main>
    <div class="container-fluid">
      <h3>{{catering.cateringName}}</h3>
      <div>
        <p>
            {{catering.menu}}
        </p>
        <a href="#" class="btn btn-primary">Book Now</a>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import { MAIN_API,API_DIRECTORY,API_METHOD } from '../../constants/RouteConstant';

export default {
  name: 'cateringDetails',
  components: {
    Navbar,
  },
  data() {
    return {
        catering: [],
    };
  },
  methods: {
    getCateringDetails(cateringId) {
      fetch(MAIN_API + "/" + API_DIRECTORY.get("CATERING") + "/" +  API_METHOD.get("VIEW") + "/" + `${cateringId}`)
        .then((res) => res.json())
        .then((data) => {
          this.catering = data;
        });
    },
  },

  beforeMount() {
    const cateringId = this.$route.params.cateringId;
    this.getCateringDetails(cateringId);
  }
}
</script>
