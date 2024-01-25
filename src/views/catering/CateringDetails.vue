<template>
  <main>
    <div class="card">
      <h5 class="card-header">{{catering.cateringName}}</h5>
      <div class="card-body">
        <p class="card-text">
            {{catering.menu}}
        </p>
        <a href="#" class="btn btn-primary">Book Now</a>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from '../../components/Navbar.vue';

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
      fetch(`http://localhost:8080/wedprep/api/catering/view/${cateringId}`)
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
