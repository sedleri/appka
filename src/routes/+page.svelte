<script>
    export let data;
    const { products } = data;
</script>

<div class="rounded-lg bg-blue-50 my-5 py-3 mx-16 px-3"> 
    <h1 class="font-sans text-center hover:text-red-800">Veci</h1>
</div>

{#each products as product}
<div class="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-indigo-500 relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
    <div class="order-last sm:order-none w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2 content-center">
        <h2 class="text-white-700 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            {product.title}
        </h2>
    </div>
</div>
    <p>{product.description}</p>
{/each}