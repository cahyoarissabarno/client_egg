<template>
  <div>
    Welcome
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  created(){
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login')
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/user/login', { headers: { token: localStorage.getItem('token') } })
      .then(res=>{
        console.log(res)
      })
  },
  methods: {
    logout(){
      localStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>
