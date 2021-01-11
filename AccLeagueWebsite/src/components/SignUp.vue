<template>
        <div class="container top">
        <b-field horizontal label="Enter your name:">
            <b-input v-model="name" placeholder="Name"></b-input>
        </b-field>

        <b-field horizontal label="Select your pronoun:">
            <b-radio v-model="pronoun"
                name="name"
                native-value="He">
                He
            </b-radio>
			<b-radio v-model="pronoun"
                name="name"
                native-value="She">
                She
            </b-radio>
			<b-radio v-model="pronoun"
                name="name"
                native-value="They">
                They
            </b-radio>
			<b-radio v-model="pronoun"
                name="name"
                native-value="Other">
                Other
            </b-radio>
        </b-field>

        <b-field horizontal label="Enter your Discord tag:">
            <b-input v-model="discord" placeholder="e.g. Remos#0001"></b-input>
        </b-field>

        <b-field horizontal label="Enter your Scoresaber URL:">
            <b-input type="url" v-model="scoresaber" placeholder="e.g. https://scoresaber.com/u/76561197972245200"></b-input>
        </b-field>

        <b-field horizontal label="Enter the URL of your Twitch channel:">
            <b-input type="url" v-model="twitch" placeholder="e.g. https://twitch.tv/remos1"></b-input>
        </b-field>
		<b-button class="button is-medium is-success" v-on:click="submitData">Submit</b-button>
        </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'signup',
  data () {
    return {
		name: '',
		pronoun: '',
		discord: '',
		scoresaber: '',
		twitch: ''
    }
  },
  methods: {
	  submitData: function () {
		  axios.post('https://www.accuracyleague.com/api/player', {
			name: this.name,
			discord: this.discord,
			twitch: this.twitch,
			pronoun: this.pronoun,
			scoresaber: this.scoresaber
		})
		.then((response) => {
			this.$buefy.toast.open({
                    duration: 5000,
                    message: `Successfully registered!`,
                    position: 'is-bottom',
                    type: 'is-success'
                })
			console.log(response);
		}, (error) => {
			this.$buefy.toast.open({
                    duration: 5000,
                    message: `Something's not good, please try again`,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
			console.log(error);
		});
	  }
  }
}
</script>

<style scoped>
    .top {
        margin-top: 2%;
        margin-right: 15%;
    }
</style>