export const NameList = () => {
    const names = ['Bruce','Dinda', 'Thomas']
    return <div> {
        names.map((name) => {
            return <h1>{name}</h1>
        })
    }
    </div>
}