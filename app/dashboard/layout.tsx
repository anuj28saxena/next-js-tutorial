
import type { ReactNode } from "react" ;

export default function RootLayout({children}: {children : ReactNode }){
    return(
        <section style={{padding:12, background: "#a69e9e" }}>
            <aside style={{padding:12, background: "#a69a69" }}>
                <h2>Dashboard Sidebar</h2>
                <ul>
                    <li>Oveview</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                </ul>
            </aside>
            <div style={{padding:12}}>
                { children }
            </div>
        </section>
    )
} 