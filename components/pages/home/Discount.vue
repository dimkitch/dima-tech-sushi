<template>
  <section class="discount">
    <div class="container">
      <div class="discount__content">
        <div class="discount__info">
          <div class="discount__title title-mdxl fw-bold color-light">
            Получите <span class="color-primary">скидку</span> на
            <span class="color-primary">OZON</span>
            <br />
            <span class="color-primary text-xnr">40%</span>
          </div>
        </div>
        <div class="discount__form">
          <DiscountOzon boxShadow="deep" padding="padding-xl" size="xl" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DiscountOzon from "@/components/shared/forms/DiscountOzon.vue";
export default {
  components: {
    DiscountOzon,
  },
};
</script>
<style lang="scss">
.discount {
  @media (max-width: $breakpoint-tablet-md) {
    background: none !important;
  }

  // .discount__content
  &__content {
    max-width: 1340px;
    background-image: url(@/assets/img/discount.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 137px 79px 137px 79px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 209px;
    @media (max-width: $breakpoint-desktop-md) {
      gap: 104px;
    }
    @media (max-width: $breakpoint-tablet) {
      padding: 0;
      background: none !important;
      display: block;
    }
    @media (max-width: $breakpoint-tablet-md) {
    }
  }

  // .discount__info
  &__info {
    min-height: 190px;

    @media (max-width: $breakpoint-tablet) {
      width: 100vw;
      transform: translateX(
        calc(
          (
            (
                (
                    100vw - $container-width-tablet +
                      ($container-gap-width-desktop * 2)
                  ) / 2
              ) * -1
          )
        )
      );
      background-image: url(@/assets/img/discount.png);
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 14px;
      padding-bottom: 34px;
    }
    @media (max-width: $breakpoint-tablet-md) {
      transform: translateX(
        calc(
          (
            (
                (
                    100vw - $container-width-tablet-md +
                      ($container-gap-width-desktop * 2)
                  ) / 2
              ) * -1
          )
        )
      );
    }
    @media (max-width: $breakpoint-mob) {
      transform: translateX(
        calc(
          (
            (
                (
                    100vw - $container-width-mob +
                      ($container-gap-width-desktop * 2)
                  ) / 2
              ) * -1
          )
        )
      );
    }
  }

  // .discount__title
  &__title {
    margin-left: 47px;
    @media (max-width: $breakpoint-mob) {
      margin-left: 23px;
    }
  }

  // .discount__form
  &__form {
    @media (max-width: $breakpoint-tablet) {
      width: 100vw;
      transform: translateX(
        calc(
          (
            (
                (
                    100vw - $container-width-tablet +
                      ($container-gap-width-desktop * 2)
                  ) / 2
              ) * -1
          )
        )
      );
    }
    @media (max-width: $breakpoint-tablet-md) {
      width: 100vw;
      transform: translateX(
        calc(
          (
            (
                (
                    100vw - $container-width-tablet-md +
                      ($container-gap-width-desktop * 2)
                  ) / 2
              ) * -1
          )
        )
      );
    }
    @media (max-width: $breakpoint-mob) {
      width: 100vw;

      transform: translateX(
        calc(
          (
            (
                (
                    100vw - $container-width-mob +
                      ($container-gap-width-desktop * 2)
                  ) / 2
              ) * -1
          )
        )
      );
    }
  }
}
</style>
