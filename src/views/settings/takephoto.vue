<template>
  <dv-full-screen-container style="background-color: white">

    <div>
      <input type="file" accept="image/*" @change="handleFileInput">
    </div>
    <div>
      <img :src="imageUrl" v-if="imageUrl" width="100vw" height='100vh'>
    </div>
    <div>
      <button>识物</button>
    </div>
  </dv-full-screen-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null
    };
  },
  methods: {
    handleFileInput(event) {
      const file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(file);
    }
  }
}
</script>
