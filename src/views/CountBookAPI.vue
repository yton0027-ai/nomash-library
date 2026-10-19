<template>
    <pre>{{ jsondata }}</pre>
    <p v-if="error">{{ error }}</p>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const jsondata = ref(null)
  const error = ref(null)
  
  const getBookCountAPI = async () => {
    try {
      const response = await axios.get(
        'https://us-central1-fit5032-92e3c.cloudfunctions.net/countBooks'
      )
      jsondata.value = JSON.stringify(response.data, null, 2)
      error.value = null
    } catch (err) {
      console.error('Error fetching book count:', err)
      error.value = 'Error fetching book count'
      jsondata.value = null
    }
  }
  
  onMounted(() => {
    getBookCountAPI()
  })
  </script>