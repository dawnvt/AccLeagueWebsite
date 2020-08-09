<template>
  <section>
    <img src="../assets/logo.png" width="32%">
    <div class="content is-medium">
      <div class="notification is-dark">
        <h1>Welcome to Acc League!</h1>
        <p>Acc League, aka Accuracy League is a league style tournament made for acc players as well as players that are generally interested in the acc playstyle.
          While we have a setup pretty similar to the well known BSL our unique points are the focus on different types of acc maps, as well as a normalized scoring during our seeding process.</p>

        <p>The amount of people allowed into the group stage is not yet finalized, as we do not know how many people will actually join.</p>

        <p>Playoffs will also depend on signups, but are supposed to be a 32 player double elimination bracket.</p>
        <ul>
          <li>Qualifiers: Aug 9th - Aug 21st</li>
          <li>Group Stages: Aug 23rd - Sep 19th</li>
          <li>Playoffs: Oct 3rd and Oct 4th</li>
          <li>Date: 22/08/2020 -> 03/10/2020</li>
          <li>Prize pool: Viewer Based Prize Pool</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
}

img {
  padding-top: .5%;
}

p {
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
  text-align: left;
}

a {
  color: #42b983;
}
</style>