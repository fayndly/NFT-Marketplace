<template>
  <div class="input">
    <label class="default-input">
      <IconComponent
        v-if="icon"
        class="default-input__icon"
        :path="icon"
        color="silver"
      />
      <input
        class="default-input__input"
        :type="InputType"
        :placeholder="placeholder"
        required
      />
    </label>
    <ButtonDefault
      class="default-input__button"
      v-if="button"
      type="secondary"
      modifier="filled"
      :icon="button.icon"
      :text="button.text"
    />
  </div>
</template>

<script>
export default {
  name: "DefaultInput",
  props: {
    InputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "text",
    },
    icon: {
      type: String,
    },
    button: {
      icon: {
        tepe: String,
      },
      text: {
        type: String,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  user-select: none;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  justify-content: space-between;
}
.default-input {
  flex-grow: 1;

  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  box-sizing: border-box;

  &__icon {
    width: 20px;
    height: 20px;
  }

  &__input {
    border: none;
    @include base;
    color: black;
    flex-grow: 1;
    width: 100%;
  }

  &__input:focus-visible {
    outline: none;
  }

  &__button:hover {
    transform: none !important;
  }

  &__input::placeholder {
    color: $colorBgTextSilverWhite;
  }
}
</style>
