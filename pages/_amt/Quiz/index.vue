<template>
  <Loader v-if="loading" :loading="loading" />
  <div id="app" v-else>
    <template>
      <Header :numCorrect="numCorrect" :numTotal="numTotal" />
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="6" offset="3">
            <QuestionBox
              v-if="questions.length > numTotal"
              :currentQuestion="questions[index]"
              :next="next"
              :increment="increment"
            />
          </b-col>
          <b-col sm="6" offset="3">
            <Result
              v-if="questions.length === numTotal && numTotal !== 0"
              :numCorrect="numCorrect"
              :numTotal="numTotal"
            />
          </b-col>
        </b-row>
      </b-container>
    </template>
  </div>
</template>
<script>
import Header from "../../../components/Header";
import Result from "../../../components/Result";
import QuestionBox from "../../../components/QuestionBox";
import axios from "axios";
import Loader from "../../../components/Loader";
export default {
  name: "app",
  components: {
    Header,
    Result,
    QuestionBox,
    Loader,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      loading: 5,
    };
  },
  methods: {
    next() {
      this.$nuxt.$loading.start()
      this.index++;
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
  },
  mounted: function () {
    console.log("its here");
    let x = 0;
    const interval = setInterval(() => {
      this.loading = this.loading - 1;
      if (++x === 5) {
        window.clearInterval(interval);
      }
    }, 500);
    if (localStorage.account) {
      this.show = !this.show;
      const info = {
        account: localStorage.account,
        pk: localStorage.pk,
      };

      axios
        .post("http://ec2-3-8-188-72.eu-west-2.compute.amazonaws.com:5000/hedera/five", info)
        .then((res) => {
          if (res.data.status == "SUCCESS") {
            fetch(
              "http://ec2-3-8-188-72.eu-west-2.compute.amazonaws.com:3000/questions?amount=10",
              {
                method: "get",
              }
            )
              .then((response) => {
                return response.json();
              })
              .then((jsonData) => {
                this.questions = jsonData.results;
              });
          } else {
            alert("tx problem");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert("Please Load Your Account Details To Play");
    }
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
