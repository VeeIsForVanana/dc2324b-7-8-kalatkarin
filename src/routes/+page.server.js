// import { jsonToUser } ???
// TODO: fix import

import { jsonToUser } from '$lib/data.js';
import { Octokit } from "@octokit/core";

export async function load() {
    // TODO: retrieve a list of users from the appropriate GitHub API endpoint
    // const json : Array<any> = ???
    // return { users: json.map(jsonToUser) }
    // TODO: there is a helper function in src/lib/data.ts that processes the JSON received as a response from the GitHub API into a more concise format,
    //       but how do we get the response in the first place, how do we import that helper, and more importantly, how do we pass it to the page itself
    
    const octokit = new Octokit()
      
    const response = await octokit.request('GET /users', {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const json = response.data;
    
    return { users: json.map((jsonToUser) => ({
        id: jsonToUser.id,
        login: jsonToUser.login
    }))
    }
}
