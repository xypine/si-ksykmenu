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
import { Container } from '@svelteuidev/core';
import { Center } from '@svelteuidev/core';
import { Loader } from '@svelteuidev/core';
import { Text } from '@svelteuidev/core';
import { Code } from '@svelteuidev/core';
import { Divider } from '@svelteuidev/core';
import { Title } from '@svelteuidev/core';
</script>

<main>
	<Container>
		{#if !condensed}
			<Title order={1}>Ruokalista</Title>
			{#if err}
				<Text color="red">Virhe: {err}</Text>
			{:else if data}
				<Code block>{JSON.stringify(data, null, 2)}</Code>
			{:else}
				<Center>
					<Loader />
				</Center>
			{/if}
		{:else}
			<Title order={3}>Ruokalista</Title>
			<Divider variant="dashed" />
			{#if err}
				<Text color="red">Virhe: {err}</Text>
			{:else if data}
				<Code>{JSON.stringify(data.menu)}</Code>
			{:else}
				<Center>
					<Loader />
				</Center>
			{/if}
		{/if}
	</Container>
</main>

<style>
</style>
