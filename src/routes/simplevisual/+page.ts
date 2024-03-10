export const load = async ({ fetch }) => {

    const url:string = `https://dummyjson.com/users`
    const res = await fetch(url)
    const data = await res.json()

    return data
}


