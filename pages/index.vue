<template>
  <div class="content">
    <b-overlay :show="show" rounded="sm">
      <div id="nav">
        <Nav />
      </div>
      <div class="main">
        <div id="art">
          <h1>Play 2 Win</h1>
          <h1>H Bars</h1>
        </div>
        <div>
          <div class="mt-3">
              <b-alert
                :show="dismissCountDown"
                dismissible
                fade
                variant="warning"
                @dismiss-count-down="countDownChanged"
              > Please choose below category for playing quiz.
              </b-alert>
              <b-button size="lg" variant="success" @click="five" v-b-tooltip.hover="'Entry Fee 5ħ!'">Win 500ħ</b-button>
              <b-button size="lg" variant="warning" @click="ten" v-b-tooltip.hover="'Entry Fee 10ħ!'">Win 1000ħ</b-button>

          </div>
        </div>
        <div class="account">
          <div>
            <b-button id="show-btn" variant="outline-primary" @click="$bvModal.show('bv-modal-example')">Load Account</b-button>

            <b-modal id="bv-modal-example" title="Load Your Hedera Account" hide-footer>
              <b-form-group label="Account Id" label-for="dropdown-form-email" @submit.stop.prevent>
                <b-form-input
                  id="dropdown-form-email"
                  size="sm"
                  placeholder="0.0.****"
                  v-model="account"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Private Key" label-for="dropdown-form-password">
                <b-form-input
                  id="dropdown-form-password"
                  type="password"
                  size="sm"
                  v-model="pk"
                  placeholder="private key"
                ></b-form-input>
              </b-form-group>

              <b-button class="mt-3" block @click="onClickLock">Load</b-button>
            </b-modal>
          </div>
          <h3>Your account current balance</h3>
          <h2>{{bal}} ħ</h2>
          <p>
            <a href="https://buy.moonpay.io/hbar">click here</a> to get some HBAR into your hedera wallet
          </p>

        </div>
      </div>
    </b-overlay>

  </div>

</template>

<script>
import Nav from "../components/Nav";

import axios from "axios";

export default {
  components: {
    Nav
  },
  data() {
    return {
      bal: 0,
      account: "",
      pk: "",
      dismissCountDown: 5
    };
  },
  /*created: function() {
      window.addEventListener('beforeunload', function(event) {
        localStorage.clear();
        event.returnValue = 'something';
      })
    },*/
  mounted() {
    {
      if (localStorage.account && localStorage.pk) {
        console.log("mounted");
        const info = {
          account: localStorage.account,
          pk: localStorage.pk
        };
        axios
          .post("https://floating-basin-51607.herokuapp.com/hedera/bal", info)
          .then(res => {
            console.log(res.data);
            this.bal = res.data;
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  },
  methods: {
    onClickLock() {
      localStorage.account = this.account;
      localStorage.pk = this.pk;
      if (localStorage.account && localStorage.pk) {
        console.log("account loaded");
        const info = {
          account: localStorage.account,
          pk: localStorage.pk
        };
        axios
          .post("https://floating-basin-51607.herokuapp.com/hedera/bal", info)
          .then(res => {
            console.log(res.data);
            this.bal = res.data;
          })
          .catch(err => {
            console.error(err);
          });
      }
      this.$bvModal.hide("bv-modal-example");
      this.$bvToast.toast(`Hedera Account Id: ${localStorage.account}`, {
        title: "Account Loaded",
        variant: "success",
        autoHideDelay: 3000,
        appendToast: true
      });
    },
    onClickUnlock() {
      localStorage.clear();
      this.$bvModal.hide("bv-modal-example");
    },
    five() {
      if (localStorage.account) {
        this.show = !this.show;
        const info = {
          account: localStorage.account,
          pk: localStorage.pk
        };
        window.location = "/five/quiz";
      } else {
        alert("Please Load Your Account Details To Play");
      }
    },
    ten() {
      if (localStorage.account) {
        const info = {
          account: localStorage.account,
          pk: localStorage.pk
        };
        axios
          .post("https://floating-basin-51607.herokuapp.com/hedera/ten", info)
          .then(res => {
            if (res.data.status == "SUCCESS") {
              window.location = "/ten/quiz";
            } else {
              alert("tx problem");
            }
          })
          .catch(err => {
            console.error(err);
          });
      } else {
        alert("Please Load Your Account Details To Play");
      }
    }
  }
};
</script>

<style scoped>
.content {
  background-color: blanchedalmond;
}
body, html {
  height: 100%;
  margin: 0;
}
.content {
  /* The image used */
  background-image: url('~@/assets/hh-1.jpg');

  /* Full height */
  height: 50%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  margin: auto;
  width: 50%;
  text-align: center;
  padding: 10px;
}
.cent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  top: 50px;
}
.account {
  position: relative;
  top: 200px;
}
h2 {
  border: 3px solid green;
}
</style>
