<template>
  <div>
    <div id="nav">
      <Nav />
    </div>
    <div class="how">
      <b-jumbotron bg-variant="secondary" text-variant="white" border-variant="dark">
        <b-container class="bv-example-row">
          <h1>Contact:</h1>
          <b-row>
            <b-col>
              <b-avatar></b-avatar>
              <h2>Makarand Karanjalkar</h2>
              <h5>Startup CEO/CTO DApp Dev</h5>
              <a href="mak@spryetch.uk">
                <b-icon icon="envelope-fill"></b-icon>
              </a>
            </b-col>
            <br />
            <br />
            <br />
            <b-col>
              <b-avatar></b-avatar>
              <h2>Harshak Krishnaa K</h2>
              <h5>Web Dev DApp Dev</h5>
              <a href="harshakkrishnaa777@gmail.com">
                <b-icon icon="envelope-fill"></b-icon>
              </a>
              <br />
            </b-col>
          </b-row>
        </b-container>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "../components/Nav";
import { BootstrapVueIcons } from "bootstrap-vue";

Vue.use(BootstrapVueIcons);

export default {
  components: {
    Nav
  },
  data() {

  }
};
</script>
<style>
.how a {
  text-decoration: none;
  color: rgb(255, 235, 169);
}
</style>
