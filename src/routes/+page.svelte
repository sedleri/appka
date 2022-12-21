<script>
	export let data;
	const { products } = data;
</script>

{#each products as product}
	<h2 class="text-white-700 text-2xl lg:text-3xl font-bold text-left ml-5 mt-8 mb-4 md:mb-6">
		{product.title}
	</h2>
	<ul>
		<li class="text-body-color mb-4 flex text-base">
			<span
				class="bg-primary mr-2 mt-2 flex h-2 w-full max-w-[8px] items-center justify-center rounded-full text-base"
			/>
			{product.description}
		</li>
	</ul>
{/each}
