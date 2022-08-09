<template>
  <main class="kit-page">
    <div class="controls">
      <CustomButton size="lg" theme="accent">vuouvou</CustomButton>
      <ContactsBlock label="тедефон" title="3241231512312"
        ><TelIcon
      /></ContactsBlock>

      <!-- 
    <div class="contacts-block">
      <slot/>
      <div class="contacts-block__info">
        <p class="contacts-block__label">{{label}}</p>
        <p class="contacts-block__title">{{title}}</p>
      </div>
    </div> -->
    </div>
  </main>
</template>

<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
export default {
  components: { CustomButton },
};
</script>
