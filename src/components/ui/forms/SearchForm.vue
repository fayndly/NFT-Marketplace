<template>
  <form class="search-form">
    <div class="search-input">
      <label class="search-input__label">
        <input
          class="search-input__input"
          type="text"
          placeholder="Search your favourite NFTs"
          required
        />
        <button type="submit">
          <IconComponent class="search-input__icon" path="MagnifyingGlass" />
        </button>
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
};
</script>

<style lang="scss" scoped>
.search-form {
}

.search-input {
  height: 60px;
  user-select: none;
  display: flex;
  align-items: center;
  border-radius: 20px;
  justify-content: space-between;
  border: 1px solid $colorBgTextSilverBlack;

  &__label {
    flex-grow: 1;

    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    box-sizing: border-box;
  }
  &__icon {
    width: 24px;
    height: 24px;
  }

  &__input {
    border: none;
    @include base;
    color: white;
    flex-grow: 1;
    background-color: $colorBgTextBlack;
  }

  &__input:focus-visible {
    outline: none;
  }

  &__input::placeholder {
    color: $colorBgTextSilverWhite;
  }
}
</style>
