<template>

  <div>
    <b-nav tabs>
          <b-button pill variant="success" disabled>
                   Crypto Trivia</b-badge>
           </b-button>
         <b-button pill variant="primary">
             Correct Answer <b-badge variant="light">{{numCorrect}}</b-badge>
        </b-button>
        <b-button pill variant="primary">
            Questions Answered  <b-badge variant="light">{{numTotal}}</b-badge>
         </b-button>
         <b-button pill variant="primary">
             Total Questions  <b-badge variant="light">10</b-badge>
         </b-button>

    </b-nav>

  </div>
</template>

<script>
export default {
  props: ["numCorrect", "numTotal"]

};
</script>
