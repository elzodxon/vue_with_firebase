<template>
 <div>
    welcome!
   <pre>{{user}}</pre>
 </div>
</template>

<script>
import db from '../db';

export default {
  name: 'Home',
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    db.collection('users').doc('M9hLKuvLNGb8QfRec8oX').get().then((snapshot) => {
      this.user = snapshot.data().name;
    });
  },
};
</script>
