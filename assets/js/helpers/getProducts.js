async function getProducts() {
    try {
        const res = await window.fetch('https://services-academlo-shopping.onrender.com/') 
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error) 
        throw error 
    }
}

export default getProducts