<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-img src="/logo-white-new_7003.png" fluid alt="Right image"></b-img>
       <b-button style="margin-left:50px;" pill variant="success" to="/" >
                         Crypto Trivia</b-badge>
                 </b-button>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/how">How to play</b-nav-item>
          <b-nav-item to="/about">About the game</b-nav-item>
          <b-nav-item to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
