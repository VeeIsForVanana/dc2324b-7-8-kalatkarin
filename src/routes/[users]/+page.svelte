<script>
    export let data;
</script>

<h1> {data.user.login} </h1>

<p> 
    {#if data.last_visited != undefined}
        {#each data.last_visited.split(',') as username, i}
            <a href="/{username}"> {username}</a>
            {#if data.last_visited.split(',').length > 1 && i != data.last_visited.split(',').length - 1 && username != ""} 
                {' >> '}
            {/if}
        {/each}
    {/if}
</p>

<form>
    <input type="submit" formmethod="post" formaction="?/delete" value="Clear History">
</form>

<br/>

<img src="{data.user.avatar.toString()}" alt="yippee">

<p> {data.user.id} </p>