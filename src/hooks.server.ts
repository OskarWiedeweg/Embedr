import type { Handle } from '@sveltejs/kit';
import {redirect} from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const loggedIn = false;
	if (!loggedIn && !event.url.pathname.startsWith('/auth')) {
		const path = event.url.pathname.slice(1);
		throw redirect(302, `/auth/login?back=${encodeURIComponent(path)}`);
	}

	const response = await resolve(event);
	return response;
};