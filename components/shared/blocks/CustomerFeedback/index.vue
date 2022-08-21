<template>
  <article class="customer-feedback">
    <div class="container">
      <div class="customer-feedback__wrapper">
        <div class="customer-feedback__header">
          <h2 class="customer-feedback__title title-mdxl fw-medium">
            Почитайте отзывы довольных клиентов
          </h2>
        </div>
        <div class="customer-feedback__body">
          <CustomerCard
            v-for="card in customerFeedbackList"
            :key="`customer-feedback--${card.id}`"
            :customerData="card"
          />
        </div>
        <div class="customer-feedback__footer">
          <CustomButton
            class="customer-feedback__actiom-item"
            size="round"
            theme="primary"
            ><ArrowLeft />
          </CustomButton>
          <CustomButton
            class="customer-feedback__actiom-item"
            size="round"
            theme="primary"
            ><ArrowRight />
          </CustomButton>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import CustomerCard from "@/components/shared/blocks/CustomerFeedback/CustomerCard.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
export default {
  components: {
    CustomerCard,
    CustomButton,
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      customerFeedbackList: [
        {
          id: 131425636363,
          title: "«Подарок порадовал, дети были в восторге»",
          comment:
            "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis, suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in duis tortor, iaculis mi magna urna nullam. ",
          img: "https://yandex-images.clstorage.net/5STK4u119/765866flPQQj/ZNdT8bfFJ1To8T2Cex_Wnank5oc1cbn3PEmZsERFDlXbXVP4EkLwFWF30JLkQr1tpfoL1MKZ7a_QZLK2RJhwJvDDkkBTNYdE6MHtE8uPpi0pFGbGdQGcck38zDEkZT-B2x0QTtAVx2MTsZcg1oVsrZV_DhAD-NzcFvRlQkL-VGNWltDyUnT2tO0RvSGZDVd7a5SXgsREmCcY3p3BctYO8b9a8s8DB8ezszI2o9YlbkwUv30BdCi8vpfjB5OQrdVgF1YyULKEZ8f9kMyzmP7lK-pXlYG3ZjvW6Y4sMYHn76KOaxP90GelY6Awh3D3NQ5tVI-tUCWbTc9VIfZws74mANSVckORRNaETlI_QAn_9ZgrJMfRBqcpxAg-HiMidM7gf5siH8DUxVDREJcQ5FXf7_W-fWPkm88PNTCUUQBMtSO3ZnIjwbR3t12S_eAoPve6CeXGQMenelXbXH2QsHRc4u3ZQx9y1vej8QPEkmd3n84FHQ7TFYp_XTWCJeEzHXUAF4QB4yKllecMY76Tmf32u8l1tzJVlHpFu93tsHHnfROf2mC_8KWHweMj9-G2ZV5spP49QBZ6XR6FkAcQgl2HIxb0cHET5xf3zGBtEnve95l6ViWQVNY5RAsvr-LSh77SrfhhXxDkViBDMYTz9ZVv_SfNngAn6u09xFD28hD_BmOX5lISYLfWdt5C7UH57_aZ6hbl0XSkeXb5bfyzI0UdEE_6gR8DFcUCETDXQmQFn8wm3B_hd2uer5ZQJaGjHycAVYUjobNGtmb_Qt-zuZwlu4t1NxLn1hoXG6ztoEPHrlCNWlEOsWc1YWDApKAFdO1elJ0eUaeKrS-EYIaRwW2kMQVW4cPSRwQGf4J9c4k9dyh7l_XRBrQo9jrN3CBQlf7jnhmRLfEHNSJh05UAxYVf7WeuzXMmW4y_JcFF0QFNJtM35yKxADdV9IyQDuIaTzWaKceVI1a2egQLfK3TA",
          name: "Ирина Ларионова",
          city: "Санкт-Петербург",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.customer-feedback {
  background-color: $color-secondary;

  // .customer-feedback__wrapper
  &__wrapper {
    padding: 100px 0;
  }

  // .customer-feedback__header
  &__header {
    text-align: center;
  }

  // .customer-feedback__title
  &__title {
  }

  // .customer-feedback__body
  &__body {
    display: flex;
    margin-top: 80px;
    margin-bottom: 70px;
    justify-content: center;
  }

  // .customer-feedback__footer
  &__footer {
    text-align: center;
  }
  // .customer-feedback__actiom-item
  &__actiom-item {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
