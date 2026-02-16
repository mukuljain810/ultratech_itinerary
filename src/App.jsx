import React from 'react';

// Sample trip data
const tripData = {
    destination: {
        en: "Goa",
        hi: "गोवा"
    },
    dates: {
        en: "2026-02-16 to 2026-02-20",
        hi: "2026-02-16 से 2026-02-20"
    },
    itineraryItems: [
        {
            type: "Flights",
            details: {
                en: "Flight from Delhi to Goa",
                hi: "दिल्ली से गोवा की उड़ान"
            }
        },
        {
            type: "Hotels",
            details: {
                en: "Stay at Beach Resort",
                hi: "बीच रिसॉर्ट में ठहरना"
            }
        },
        {
            type: "Guides",
            details: {
                en: "City tour guide available",
                hi: "शहर का टूर गाइड उपलब्ध"
            }
        }
    ]
};

// Header Component
const Header = ({ title, language }) => (
    <header className="bg-blue-500 text-white p-4">
        <h1 className="text-lg">
            {title[language]}
        </h1>
    </header>
);

// Itinerary Component
const Itinerary = ({ items, language }) => (
    <div className="p-4">
        <h2 className="text-xl">{items.type[language]}</h2>
        <p>{items.details[language]}</p>
    </div>
);

// Main App Component
const App = () => {
    const [language, setLanguage] = React.useState('en'); // 'en' or 'hi'

    return (
        <div className="font-sans">
            <Header title={{ en: "Itinerary App", hi: "यात्रा अनुप्रयोग" }} language={language} />
            <div className="flex flex-col items-center">
                {tripData.itineraryItems.map((item, index) => (
                    <Itinerary key={index} items={item} language={language} />
                ))}
            </div>
            <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="bg-green-500 text-white p-2 mt-4"
            >
                {language === 'en' ? "Switch to Hindi" : "Switch to English"}
            </button>
        </div>
    );
};

export default App;