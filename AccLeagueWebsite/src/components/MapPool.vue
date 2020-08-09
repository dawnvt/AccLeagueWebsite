<template>
<section>
	<b-table :data="maps">
		<template slot-scope="props">
			<b-table-column field="song" label="Song">
				<div>
					<img :src="'https://scoresaber.com/imports/images/songs/' + props.row.hash + '.png'"
						width="80" height="80">
					<a :href="props.row.ssLink">{{ props.row.name + ' - ' + props.row.songAuthor}}</a>
					{{'[' + props.row.levelAuthor + ']'}}
				</div>
			</b-table-column>
			<b-table-column>
			</b-table-column>
			<b-table-column field="diff" label="Difficulty">
				{{ props.row.diff }}
			</b-table-column>
			<b-table-column label="Download">
				<b-button class="is-success"
					v-on:click.stop.prevent="openWindow('https://beatsaver.com/beatmap/' + props.row.key)">
						<font-awesome-icon icon="download" size="lg" />
					</b-button>
			</b-table-column>
		</template>
	</b-table>
	<b-button class="is-success">
		<a class="button-text" href="https://beatkhana.com/api/download-pool/111">Download Playlist</a>
	</b-button>
</section>
</template>

<script>
	import axios from 'axios';

    export default {
        data() {
            return {
				maps: [],
				map_pool: ''
            }
		},
		methods: {
			getMaps: function() {
				axios.get('https://beatkhana.com/api/tournament/2147484131/map-pools')
				.then((response) => {
					this.maps = response.data['111'].songs;
					this.map_pool = response.data['111'].poolName;
				});
			},
			openWindow: function (link) {
				window.open(link, '_blank');
			}
		},
		beforeMount() {
			this.getMaps();
		}
    }
</script>

<style scoped>
.button-text {
	color: white;
}
</style>
