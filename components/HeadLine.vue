<template>
  <div class="bg-main h-56 md:h-100 md:pt-16 pt-12">
    <LayoutsContainer>
      <img
        class="mb-2 md:mb-4 pl-10 md:pl-20 h-16 md:h-20"
        src="~/assets/images/hero2x.png"
        alt="ロゴ"
      />
      <p class="text-white text-2xl md:text-3xl pl-10 md:pl-20">
        専用質問箱へようこそ！
      </p>
      <div class="justify-center flex mt-8">
        <PartsButton class="mr-8 hidden md:block" message="質問をする" />
        <PartsButton class="hidden md:block" message="過去の質問を見る" />
      </div>
    </LayoutsContainer>
  </div>
</template>
