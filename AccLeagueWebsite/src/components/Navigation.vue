<template>
	<b-navbar class="is-dark">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../assets/logo.jpg">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/info' }">
                Info
            </b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/qualifiers' }">
                Qualifiers
            </b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/map-pool' }">
                Map Pool
            </b-navbar-item>
			<b-navbar-item tag="router-link" :to="{ path: '/signup' }">
                Signup
            </b-navbar-item>
        </template>
    </b-navbar>
</template>