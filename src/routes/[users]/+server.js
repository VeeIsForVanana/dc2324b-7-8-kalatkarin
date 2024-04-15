export async function DELETE({ params, cookies }){
    cookies.delete('last_visited', { path: '/' });

    return new Response(null, { status: 204 });
}