// src/components/LoadScripts.jsx
import { useEffect } from 'react';


const LoadScripts = () => {
    useEffect(() => {

           const stylesheets = [
            '/assets/css/style.min.css',
        ];

        stylesheets.forEach(href => {
            const link = document.createElement('link');
            link.href = href;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        });

        const scripts = [
            '/assets/js/plugins/plugin-custom.js',
            '/assets/js/plugins/plugins.js',
            '/assets/js/main.js',
        ];

        scripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        });
    }, []);

    return null;
};

export default LoadScripts;
