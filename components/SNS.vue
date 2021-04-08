<template>
  <div>
    <PartsTitle
      title="SNS"
      :img-src="srcSNS"
      img-alt="しずくのアイコン"
      img-size="h-12"
      class="mb-5 md:mb-8"
      text-size="text-lg"
    />
    <ul
      class="flex justify-between items-center px-1 text-lg mx-auto md:max-w-sm max-w-xs"
    >
      <li class="underline hover:no-underline">
        <a href="https://twitter.com/wucrea_dlopp">dlopp公式Twitter</a>
      </li>
      <li class="underline hover:no-underline">
        <a href="https://dlopp-docs.netlify.app">dlopp公式ブログ</a>
      </li>
    </ul>
  </div>
</template>

<script>
import snsImage from '~/assets/images/sns.png'

export default {
  data() {
    return {
      srcSNS: snsImage,
    }
  },
}
</script>
