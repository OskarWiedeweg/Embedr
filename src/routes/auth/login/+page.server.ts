import { superValidate } from "sveltekit-superforms"
import type { PageServerLoad } from "./$types"
import { formSchema } from "./schema"
import { zod } from "sveltekit-superforms/adapters";
import type { Actions } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
    const form = await superValidate(zod(formSchema));

    return {
        form
    } 
}

export const actions: Actions = {
    default: async (evnet) => {
        const form = await superValidate(event, zod(formSchema));
    }
}