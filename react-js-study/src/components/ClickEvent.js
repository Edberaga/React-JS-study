export const ClickEvent= () => {
    const clickEvent = (event, count = 1) => {
        return console.log('Clicked Me!', count, event)
    }
    return (
        <div>
            <button onClick={clickEvent}>Click</button>
            <button onClick={(event) => clickEvent(event, 5)}>Click 5</button>
        </div>
    )
}