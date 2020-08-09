<template>
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
					this.maps = response.data['91'].songs;
					this.map_pool = response.data['91'].poolName;
				});
			},
			openWindow: function (link) {
				console.log('smeg');
				window.open(link, '_blank');
			}
		},
		beforeMount() {
			this.getMaps();
		}
    }
</script>
