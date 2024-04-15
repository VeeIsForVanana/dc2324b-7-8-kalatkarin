import { jsonToUser } from '$lib/data.js';
import { Octokit } from "@octokit/core";

export async function load({params, cookies}) {
    const octokit = new Octokit()
    const visited = cookies.get('last_visited');

    if (visited == undefined){
        cookies.set('last_visited', params.users, { path: '/' });
    }
    else{
        cookies.set('last_visited', visited + "," + params.users, { path: '/' });
    }
      
    const response = await octokit.request(`GET /users/${params.users}`, {
        username: params.users,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const json = response.data;
    
    return { user: jsonToUser(json), last_visited: cookies.get('last_visited') }
}

export const actions = {
    delete: async ({ cookies }) => {
        cookies.delete('last_visited', { path: '/' });
    }
}
