<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/global/AppHeader.vue'
</script>
  <div class="mx-auto">
    <div class="flex justify-center">
      <div>
        <app-header :loggedIn="this.user"/>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data: () => {
    return {
      user: null,
    }
  },
  methods:{
    fetchUser() {
      axios.get('http://localhost:8080/api/profile').then(function(response) {
        this.user = response.data.user;
      });
    }
  },
}
</script>
