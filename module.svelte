<script>import { onMount } from 'svelte';
export let condensed = false;
let endpoint = 'https://eliittisafka.herokuapp.com/';
let data;
let err;
onMount(async () => {
    let cached = localStorage.getItem('ksykmenu_cache');
    if (cached) {
        // data = JSON.parse(cached);
    }
    fetch(endpoint)
        .then(async (pdata) => {
        let json = await pdata.json();
        console.log(json);
        data = json;
        localStorage.setItem('ksykmenu_cache', JSON.stringify(data));
    })
        .catch((e) => {
        err = e;
        console.warn(e);
    });
});
import Card, { Content } from '@smui/card';
import LinearProgress from '@smui/linear-progress';
</script>

<main>
	<Card>
		{#if !condensed}
			<h1>Ruokalista</h1>
			{#if err}
				<p color="red">Virhe: {err}</p>
			{:else if data}
				<pre><code>{JSON.stringify(data, null, 2)}</code></pre>
			{:else}
				<LinearProgress indeterminate />
			{/if}
		{:else}
			<h3>Ruokalista</h3>
			<hr />
			{#if err}
				<p color="red">Virhe: {err}</p>
			{:else if data}
				<code>{JSON.stringify(data.menu)}</code>
			{:else}
				<LinearProgress indeterminate />
			{/if}
		{/if}
	</Card>
</main>

<style>
</style>
