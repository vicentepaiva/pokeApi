import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Transaction } from "../components/Transaction";


export function ShowEvent() {
    return(
        <div className="flex flex-col min-h-screen ">
        <Header />

        <main className="flex flex-1 items-center justify-center">
            <Transaction />
        </main>

        <Footer/>
        </div>
    );
        
}