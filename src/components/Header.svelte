<script>
    import arrowLeft from '$lib/icons/arrow-left.svg'
    import { page } from '$app/stores'
</script>

<header>
{#if $page.url.pathname !== '/'}
    <a href="/">
        <img class="arrow" src={arrowLeft} alt="arrow-back" />
    </a>
{/if}
</header>

<style>
    .arrow {
        margin-left: 30px;
        margin-top: 20px;
    }
</style>