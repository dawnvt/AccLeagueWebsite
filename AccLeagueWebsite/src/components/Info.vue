<template>
	<div class="container top">

        <b-collapse
            class="card"
            animation="slide"
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index">
            <div
                slot="trigger"
                slot-scope="props"
                class="card-header"
                role="button">
                <p class="card-header-title">
                    {{ collapse.title }}
                </p>
                <a class="card-header-icon">
					<font-awesome-icon :icon="props.open ? 'caret-up' : 'caret-down'" size="xl" />
                </a>
            </div>
            <div class="card-content">
                <div class="content">
					<ul>
						<li v-for="rule in collapse.rules" :key="rule">
							{{ rule}}
						</li>
					</ul>
                </div>
            </div>
        </b-collapse>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: 0,
                collapses: [
                {
                    title: 'General Rules',
                    rules: [
						'Offensive behaviour, including offensive names is strictly forbidden.',
						'Follow Discord / Twitch TOS, as well as 115 Guild rules.'
						]
                },
                {
                    title: 'Banned Mods',
                    rules: [
						'Intro/Outro skip',
						'Any mod that enhances scoring ability.',
						'Any mod that disables score submission on scoresaber by default.'
						]
                },
                {
                    title: 'Required Mods',
                    rules: [
						'BSIPA',
						'SongCore',
						'Qualifier Plugin (Qualifiers only)',
						'Camera+ (Playoffs only - We will provide a mandatory configuration)',
						'Tournament Plugin (Group Stages & Play-Offs)',
						'BS_Utils',
						'ScoreSaber'
						]
				},
				{
                    title: 'Qualifiers',
                    rules: [
						'Competitors must sign-up using the sign-up page before playing the qualifier maps. Sign-ups will be available until qualifiers end.',
						'The qualifier plugin is required to upload scores to the Acc League server. There might be conflicts between qualifier plugin and other plugins. Please tell staff about any conflicts you find so we can announce these publicly.',
						'Qualifiers will be played on the competitor’s own time.',
						'No modifiers may be active when competitors try to set a score on a qualifier map.',
						'The qualifier map pool consists of three maps. One of each style: True Accuracy, Normal Accuracy and Technical Accuracy'
						]
				},
				{
                    title: 'Seeding',
                    rules: [
						'To make seeding as fair as possible, we use a normalized scoring system. The highest accuracy on a map gets a score of 100, everyone else gets a score equaling the percentage they reached compared to the top score.',
						'Seeding will determine each competitors spot durings groups',
						'Seeding will also determine who gets to pick first during the playoffs. Getting a good seed therefore is worth the effort!',
						'Assuming we get enough players, the top 72 players will get into groups.'
						]
                },
                ]
            }
        }
    }
</script>

<style scoped>
li {
	text-align: left !important;
	color: white;
}

.top {
	margin-top: 2%;
}
</style>