const pages = {
    home: './components/home.html',
    portfolio: './components/portfolio.html',
    contact: './components/contact.html'
};

async function router() {
    const app = document.getElementById('app');
    const hash = window.location.hash.slice(1) || 'home';
    
    try {
        const response = await fetch(pages[hash]);
        const html = await response.text();
        app.innerHTML = html;

        const scripts = app.getElementsByTagName('script');
        for (let script of scripts) {
            eval(script.innerHTML);
        }
    } catch (error) {
        console.error('Error loading page:', error);
        app.innerHTML = '<p>Error loading page</p>';
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);