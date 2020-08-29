<template>
	<div clas="container">
		<b-tabs class="is-large" v-model="activeTab">
			<b-loading is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
			<template v-for="(pool, index) in mapPools">
				<b-tab-item :key="pool.name" :label="pool.name">
					<b-table class="myTable" :key="index" :data="pool.songs">
						<template  slot-scope="props">
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
					<b-button :key="'button' + index" class="is-success">
						<a class="button-text" :href="'https://beatkhana.com/api/download-pool/' + pool.key">Download Playlist</a>
					</b-button>
				</b-tab-item>
			</template>
		</b-tabs>
	</div>
</template>

<script>
	import axios from 'axios';

    export default {
        data() {
            return {
				mapPools: [],
				activeTab: 0,
				isLoading: false
            }
		},
		methods: {
			getMaps: function() {
				axios.get('https://beatkhana.com/api/tournament/2147484131/map-pools')
				.then((response) => {
					this.mapPools = [
						{ key: '111', name: response.data['111'].poolName, songs: response.data['111'].songs },
						{ key: '141', name: response.data['141'].poolName, songs: response.data['141'].songs }
					];
					this.isLoading = false;
				});
			},
			openWindow: function (link) {
				window.open(link, '_blank');
			}
		},
		beforeMount() {
			this.isLoading = true;
			this.getMaps();
		}
    }
</script>

<style lang="scss" scoped>
.myTable {
  /deep/ table.table {
	background-color: #0a0a0a;
	color: white;
  }


}

.button-text {
	color: white;
}

.white {
	/deep/ column {
	  color: white;
  }
}
</style>
