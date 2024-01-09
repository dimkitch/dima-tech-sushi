<template>
  <label class="custom-radio">
    <input
      type="radio" 
      :value="inputValue" 
      :name="name"
      v-bind="$attrs"
      :checked="isChecked"
      @change="onChange"
    >
    <span> 
      <slot name="icon"></slot>
      <slot></slot> 
    </span>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    
    name: {
      type: String,
      default: ''
    },

    inputValue: {
      type: String,
      default: ''
    }
  },

  computed: {
    isChecked() {
      return this.value === this.inputValue
    }
  },

  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
  
<style lang="scss">
  .custom-radio>input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label связанного с .custom-radio */
.custom-radio > span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

/* создание в label псевдоэлемента  before со следующими стилями */
.custom-radio > span::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 32px;
  // flex-shrink: 0;
  // flex-grow: 0;
  border: 1px solid #A5A5A5;
  border-radius: 50%;
  margin-right: 20px;
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-size: 50% 50%;
}

/* стили при наведении курсора на радио */
.custom-radio>input:not(:disabled):not(:checked)+span:hover::before {
}

/* стили для активной радиокнопки (при нажатии на неё) */
.custom-radio>input:not(:disabled):active+span::before {

}

/* стили для радиокнопки, находящейся в фокусе */
.custom-radio>input:focus+span::before {
}

/* стили для радиокнопки, находящейся в фокусе и не находящейся в состоянии checked */
.custom-radio>input:focus:not(:checked)+span::before {
}

/* стили для радиокнопки, находящейся в состоянии checked */
.custom-radio>input:checked+span::before {
  background-color: #0ACF83;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><g clip-path="url(%23clip0_3_976)"><path d="M11.8238 1.76925C11.5895 1.53492 11.2096 1.53492 10.9753 1.76925L3.78688 8.9577L1.02379 6.1946C0.789485 5.96027 0.40961 5.9603 0.175258 6.1946C-0.0590703 6.42891 -0.0590703 6.80878 0.175258 7.04311L3.36262 10.2304C3.59685 10.4647 3.97701 10.4646 4.21115 10.2304L11.8238 2.61778C12.0581 2.38348 12.0581 2.00358 11.8238 1.76925Z" fill="white"/></g></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* стили для радиокнопки, находящейся в состоянии disabled */
.custom-radio>input:disabled+span::before {
  background-color: #e9ecef;
}
  </style>
