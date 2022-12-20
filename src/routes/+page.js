// @ts-ignore
export const load = async ({ fetch }) => {
    
    const fetchProducts = async () => {
        const productRes = await fetch('https://dummyjson.com/products?limit=50')
        const productData = await productRes.json()
        console.log('tvujf')
        return productData.products
    }

    const fetchUsers = async () => {
        const usersRes = await fetch('https://dummyjson.com/products?limit=50')
        const usersData = await usersRes.json()
        console.log('tvujm')
        return usersData.users
    }

    return{
        products: fetchProducts(),
        users: fetchUsers()
    }
}