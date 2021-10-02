<template>
  <div class="flex items-center bg-primary rounded-3xl">

    <div class="w-1/2 bg-white h-screen p-7">
      <img src="../assets/Logo.png" alt="">
      <div class="flex flex-col items-center">
        <img src="../assets/ellipse.png" alt="" style="width: 600px;">
      </div>
    </div>
    <div class="flex items-center justify-center  h-screen w-1/2">
      <div class="bg-white p-12" style="min-width: 447px;">
        <h2 class="text-dark text-3xl font-bold">Tizimga kirish</h2>
        <hr class="my-3">

        <div class="flex flex-col gap-2 my-6">
          <label for="name" class="c-label">Foydalanuvchi nomi</label>
          <input id="name" class="c-input" placeholder="Foydalanuvchini nomini kiriting"
                 autocomplete="off"/>
        </div>
        <div class="flex flex-col gap-2 mb-6">
          <label for="password" class="c-label">Parol</label>
          <input id="password" class="c-input" placeholder="Parolni kiriting"
                 autocomplete="off"/>
        </div>
        <button class="c-btn">Kirish</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
