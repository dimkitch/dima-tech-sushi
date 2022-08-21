<template>
  <div class="about-company">
    <div class="container">
      <div class="about-company__wrapper">
        <div class="about-company__content">
          <h2
            class="about-company__title tf-up fw-heavy title-xl color-dark-deep"
          >
            О компании
          </h2>
          <p class="about-company__text text-xl color-secondary-deep-light">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
            <br />
            <br />
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. explicabo.
          </p>
          <div class="about-company__stat">
            <div class="about-company__stat-item">
              <span class="about-company__years title-xl fw-heavy color-accent"
                >6+</span
              >
              <span class="text-sm fw-600 tf-up">лет работы</span>
            </div>
            <div class="about-company__stat-item">
              <span
                class="about-company__years title-xl fw-heavy color-success-deep"
                >6+</span
              ><span class="text-sm fw-600 tf-up">лет работы</span>
            </div>
            <div class="about-company__stat-item">
              <span
                class="about-company__clients title-xl fw-heavy color-primary-light"
                >500+</span
              ><span class="text-sm fw-600 tf-up">ДОВОЛЬНЫХ КЛИЕНТОВ</span>
            </div>
          </div>
        </div>
        <img
          class="about-company__image"
          src="@/assets/img/Image Place Holder.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="scss">
.about-company {
  // .about-company__wrapper
  &__wrapper {
    display: flex;
    align-items: center;
  }

  // .about-company__text
  &__text {
    min-height: 176px;
    margin-top: 20px;
  }

  // .about-company__stat
  &__stat {
    display: flex;
    justify-content: space-between;
  }

  //  .about-company__stat-item
  &__stat-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // .about-company__image
  &__image {
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
