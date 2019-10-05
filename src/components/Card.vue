<template>
  <div class="rounded overflow-hidden shadow-lg sm:flex sm:h-64 max-w-2xl">
    <img
      class="w-full h-64 sm:h-full sm:w-auto object-cover"
      src="@/assets/cat.jpeg"
      alt="A cat with a buttefly on its nose"
    />
    <div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Who are you?</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          <span class="italic">Maiores et perferendis</span> eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pb-4 pt-0 sm:pt-4">
        <a
          href="#"
          class="inline-block px-4 py-1 bg-gray-300 rounded-full text-sm font-semibold text-gray-700 focus:outline-none focus:shadow-outline hover:bg-gray-500 hover:text-gray-900 mr-2 mt-2 sm:mt-0"
          >#photography</a
        >
        <a
          href="#"
          class="inline-block px-4 py-1 bg-gray-300 rounded-full text-sm font-semibold text-gray-700 focus:outline-none focus:shadow-outline hover:bg-gray-500 hover:text-gray-900 mr-2 mt-2 sm:mt-0"
          >#animals</a
        >
        <a
          href="#"
          class="inline-block px-4 py-1 bg-gray-300 rounded-full text-sm font-semibold text-gray-700 focus:outline-none focus:shadow-outline hover:bg-gray-500 hover:text-gray-900 mr-2 mt-2 sm:mt-0"
          >#cats</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //
};
</script>
