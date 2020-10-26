<template>
  <div class="result">
    <h2 v-if="numCorrect === numTotal">Congratulations Winner</h2>
    <h2 v-else>
      Failure is the stepping stone for success.
      Never lose faith!! You can always try again to win!!
    </h2>
    <div class="bor">
      <h1>You Scored {{numCorrect}} out of {{numTotal}}</h1>
      <b-button size="lg" variant="primary" to="/">Home</b-button>
    </div>
    <div class="vector">
      <img src="./5482.jpg" :style="{'width': '500px'}" />
    </div>
  </div>
</template>
Quiz App 2.0
<script>
import axios from "axios";

export default {
  props: ["numCorrect", "numTotal"],
  mounted: function() {
    if (this.numCorrect === this.numTotal) {
      alert("You Won");
      const message = {
        account: localStorage.account
      };
      console.log(message);
      if (this.$route.params.amt === "five") {
        axios
          .post(
            "https://hedera20node.herokuapp.com/hedera/fiveh",
            message
          )
          .then(res => {})
          .catch(err => {
            console.error(err);
          });
      } else {
        axios
          .post(
            "https://hedera20node.herokuapp.com/hedera/tenh",
            message
          )
          .then(res => {})
          .catch(err => {
            console.error(err);
          });
      }
    }
  }
};
</script>
<style>
.vector {
  position: relative;
  bottom: 0;
}
.bor {
  border-style: inset;
  padding: 20px;
  border-radius: 15px;
}
</style>
