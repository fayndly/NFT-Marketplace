<template>
  <form
    class="create-account-form"
    target="_blank"
    name="create_account"
    autocomplete="on"
  >
    <DefaultInput
      class="create-account-form__username"
      InputType="text"
      placeholder="Username"
      icon="User"
      required
    />
    <DefaultInput
      class="create-account-form__email"
      InputType="email"
      placeholder="Email Address"
      icon="EnvelopeSimple"
      required
    />
    <DefaultInput
      class="create-account-form__password"
      InputType="password"
      placeholder="Password"
      icon="LockKey"
      required
    />
    <DefaultInput
      class="create-account-form__confirm-password"
      InputType="password"
      placeholder="Confirm Password"
      icon="LockKey"
      required
    />
    <ButtonDefault
      class="create-account-form__button"
      type="tertiary"
      modifier="filled"
      text="Create account"
    />
  </form>
</template>

<script>
export default {
  name: "CreateAccountForm",
};
</script>

<style lang="scss" scoped>
.create-account-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 330px;
  &__username,
  &__email,
  &__password,
  &__confirm-password {
    height: 46px;
  }
  &__button {
    margin-top: 15px;
    width: 100% !important;
  }
}
</style>
