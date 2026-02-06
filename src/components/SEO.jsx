import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO = () => {
    const { language, t } = useLanguage();

    useEffect(() => {
        // Update document title
        document.title = t.seo.title;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', t.seo.description);

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', t.seo.keywords);

        // Update canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        const baseUrl = 'https://zeinaciocb.dev'; // User's domain
        const canonicalUrl = language === 'en' ? baseUrl : `${baseUrl}/${language}`;
        linkCanonical.setAttribute('href', canonicalUrl);

        // Update hreflang tags
        const languages = ['en', 'pt', 'es'];
        languages.forEach(lang => {
            let linkHreflang = document.querySelector(`link[hreflang="${lang}"]`);
            if (!linkHreflang) {
                linkHreflang = document.createElement('link');
                linkHreflang.setAttribute('rel', 'alternate');
                linkHreflang.setAttribute('hreflang', lang);
                document.head.appendChild(linkHreflang);
            }
            const langUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;
            linkHreflang.setAttribute('href', langUrl);
        });

        // Update x-default hreflang
        let linkDefault = document.querySelector('link[hreflang="x-default"]');
        if (!linkDefault) {
            linkDefault = document.createElement('link');
            linkDefault.setAttribute('rel', 'alternate');
            linkDefault.setAttribute('hreflang', 'x-default');
            document.head.appendChild(linkDefault);
        }
        linkDefault.setAttribute('href', baseUrl);

        // Update Open Graph tags
        const updateOgTag = (property, content) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('property', property);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        updateOgTag('og:title', t.seo.title);
        updateOgTag('og:description', t.seo.description);
        updateOgTag('og:url', canonicalUrl);
        updateOgTag('og:type', 'website');
        updateOgTag('og:image', `${baseUrl}/og-image.webp`); // Assuming there's an OG image

        // Update Twitter tags
        const updateTwitterTag = (name, content) => {
            let tag = document.querySelector(`meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute('name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        updateTwitterTag('twitter:card', 'summary_large_image');
        updateTwitterTag('twitter:title', t.seo.title);
        updateTwitterTag('twitter:description', t.seo.description);
        updateTwitterTag('twitter:image', `${baseUrl}/og-image.webp`);

        // Update Structured Data (JSON-LD)
        let scriptStructuredData = document.querySelector('script[type="application/ld+json"]');
        if (!scriptStructuredData) {
            scriptStructuredData = document.createElement('script');
            scriptStructuredData.setAttribute('type', 'application/ld+json');
            document.head.appendChild(scriptStructuredData);
        }

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": t.header.name,
            "jobTitle": t.header.title,
            "url": baseUrl,
            "sameAs": t.header.socials.map(s => s.url),
            "description": t.seo.description
        };

        scriptStructuredData.textContent = JSON.stringify(structuredData);

    }, [language, t]);

    return null;
};

export default SEO;
