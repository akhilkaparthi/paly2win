<template>
  <div>
    <b-navbar  toggleable="lg" type="dark" variant="dark">
      <b-img src="/logo-white-new_7003.png" fluid alt="Right image"></b-img>
      <b-button style="margin-left: 40px" pill variant="success" to="/">
        Crypto Trivia
      </b-button>
      <h5 class="balance">
        <span class="iconB"></span>Balance: {{ loading }}  <a href="https://buy.moonpay.io/hbar">(Buy)</a>
      </h5>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto d-flex">
          <b-nav-item id="show-btn" @click="$bvModal.show('bv-modal-example')"
          >Load Account</b-nav-item
          >
          <b-nav-item to="/how">How to play</b-nav-item>
          <b-nav-item to="/about"> About the game </b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  props: { loading: Number },
};
</script>

<style scoped>
.balance {
  position: absolute;
  left: 70%;
  bottom: 59%;
  color: rgb(187, 187, 187);
}
.iconB {
  font-weight: bold;
  color: rgb(201, 200, 200);
  margin: 0 0.5rem;
}

.buy:hover {
  cursor: pointer;
}

@media screen and (max-width: 990px) {
  .balance {
    position: unset;
  }
}

@media screen and (max-width: 400px) {
  .balance {
    margin: 1rem;
  }
}
</style>
