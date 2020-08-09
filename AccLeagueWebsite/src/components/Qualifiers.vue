<template>
	<b-tabs class="is-large is-dark" v-model="activeTab">
		<b-loading is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
		<b-tab-item label="Overall">
			<b-table :data="overall" :columns="columns"></b-table>
		</b-tab-item>
		<template v-for="(map, index) in maps">
			<b-tab-item
				:key="index"
				:label="map.name">
				<b-table :data="data[index]" :columns="columns"></b-table>
			</b-tab-item>
		</template>
	</b-tabs>
</template>

<script>
	import axios from 'axios';

    export default {
        data() {
            return {
				activeTab: 0,
				overall: [],
				isLoading: false,
				maps: [],
				data: [],
                columns: [
                    {
                        field: 'rank',
                        label: 'Rank',
                        width: '40',
						numeric: true,
						centered: true
					},
					{
                        field: 'name',
						label: 'Name',
						centered: true
                    },
                    {
                        field: 'score',
						label: 'Score',
						numeric: true,
						centered: true
                    },
                    {
                        field: 'acc',
						label: 'Acc',
						numeric: true,
						centered: true
                    },
                    {
                        field: 'normalizedScore',
                        label: 'Normalized Score',
                        numeric: true,
						centered: true
                    }
                ]
            }
		},
		methods: {
			getScores: function() {
				axios.get('https://www.accuracyleague.com/api/maps/ranking/')
				.then((response) => {
					this.overall = response.data;
				})
				let data = [];
				let promises = [];
				for (let i = 0; i < this.maps.length; i++) {
					promises.push(
						axios.get('https://www.accuracyleague.com/api/maps/ranking/' + this.maps[i].id)
						.then(response => {
							data.push(response.data);
							this.isLoading = false;
						})
					)
				}

				Promise.all(promises).then(() => this.data = data);
			},
			getMaps: function() {
				this.isLoading = true;
				axios.get('https://www.accuracyleague.com/api/maps')
				.then((response) => {
					this.maps = response.data;
					this.getScores();
				});
			}
		},
		beforeMount() {
			this.getMaps();
		}
    }
</script>
