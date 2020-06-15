export const getUrl = (location) =>{
    const {pathname} = location
    const param = pathname.split("/")[2]
    return param
}
export default getUrl