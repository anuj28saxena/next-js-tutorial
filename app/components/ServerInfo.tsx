
export default function ServerInfo() {
    const serverTime = new Date().toLocaleTimeString();

    return (
        <div>
            <h1>Server Time: {serverTime}</h1>
        </div>
    )
}