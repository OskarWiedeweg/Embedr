<script lang="ts">
    import {
        Card
    } from "$lib/components/ui/card";

    const {children} = $props();
</script>

<div class="container py-20 grid items-center justify-center">
    <Card>
        {@render children()}
    </Card>
</div>