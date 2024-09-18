<template>
  <div>
    <h1>Listado de Post</h1>
    
    <o-field label="Email" variant="danger" message="This email is invalid">
      <o-input type="email" value="" :maxlength="30" />
    </o-field>
    
    <o-button @click="clickMe">oruga-ui</o-button>
    
  </div>
</template>

<script>
  import { reactive } from "vue";

  export default {
    setup() {
      const clickMe = () => {
        alert("Clicked!");
      };

      const settings = reactive({
        rounded: false,
        variant: "success",
        size: "medium",
      });

      return {
        clickMe,
        settings,
      };
    },
  };
</script>