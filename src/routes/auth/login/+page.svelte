<script lang="ts">
    import {
        CardHeader,
        CardTitle,
        CardContent
    } from "$lib/components/ui/card";
    import { superForm } from "sveltekit-superforms";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { formSchema } from "./schema";
    import { FormField, FormControl, FormLabel, FormFieldErrors, FormButton } from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";

    const {data} = $props();

    const form = superForm(data.form, {
        validators: zodClient(formSchema)
    })

    const {form: formData, enhance} = form; 
</script>

<CardHeader>
    <CardTitle>Login</CardTitle>
</CardHeader>
<CardContent>
    <form action="post" use:enhance>
        <FormField {form} name="username">
            <FormControl>
                {#snippet children({props})}
                    <FormLabel>Username</FormLabel>
                    <Input bind:value={$formData.username} {...props} />
                {/snippet}
            </FormControl>
            <FormFieldErrors />
        </FormField>
        <FormField {form} name="password">
            <FormControl>
                {#snippet children({props})}
                    <FormLabel>Password</FormLabel>
                    <Input bind:value={$formData.password} {...props} />
                {/snippet}
            </FormControl>
            <FormFieldErrors />
        </FormField>
        <FormButton>Sign In</FormButton>
    </form>
</CardContent>