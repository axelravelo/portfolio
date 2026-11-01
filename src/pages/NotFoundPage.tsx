import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const NotFoundPage = () => {
    return(
        <div className="not-found-page" id="top">
            <Header />
            <main className="mx-auto min-h-screen max-w-5xl px-6 pt-32 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">404</p>
                <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
                <p className="mt-4 text-slate-400">The page you’re looking for doesn’t exist.</p>
            </main>
            <Footer />
        </div>
    );
}

export default NotFoundPage;
