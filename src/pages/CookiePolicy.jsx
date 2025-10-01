import Header from "../components/Header";
import React from "react";

const CookiePolicy = () => {

    const privacyHeader = [
        {
            content: (
                <>
                    <h1 className="text-4xl sm:text-4xl font-semibold text-gray-900">
                        Cookie Policy – NeuIQ.ai
                    </h1>
                    <p className="my-6">
                        <b>Effective Date:</b> September 23rd, 2025
                    </p>
                    <p>
                        NeuIQ.ai uses cookies and similar technologies to improve your browsing experience.
                    </p>
                </>
            )
        }
    ]

    const sections = [
        {
            id: 1,
            title: "1. What Are Cookies?",
            content: (
                <>
                    <p className="my-5">Cookies are small text files placed on your device when you visit our website. They help us
remember preferences and analyze website traffic.</p>
                </>
            ),
        },
        {
            id: 2,
            title: "2. Types of Cookies We Use",
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>Essential Cookies: Required for website functionality.</li>
                        <li>Analytics Cookies: Google Analytics, LinkedIn Pixel – used to understand visitor behavior and improve performance.</li>
                        <li>Functional Cookies: Remember your preferences (e.g., language, form details).</li>
                        <li>Advertising Cookies: Track engagement for retargeting and campaign measurement.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 3,
            title: "3. Managing Cookies",
            content: (
                <>
                    <p className="mb-2 leading-relaxed">
                        You can manage or disable cookies through your browser settings. However, some features of our Site may not function properly if cookies are disabled.
                    </p>
                </>
            ),
        },
        {
            id: 4,
            title: "4. Third-Party Cookies",
            content: (
                <p className="leading-relaxed">
                    Our site may use cookies from third-party providers. We do not control these cookies, and their use is governed by the respective third-party’s privacy policy.
                </p>
            ),
        },
        {
            id: 5,
            title: "5. Updates to this Policy",
            content: (
                <>
                    <p className="mb-2 leading-relaxed">
                        We may update this Cookie Policy periodically.
                    </p>
                  </>
            ),
        },
    ];

    return (
        <>
            <Header defaultBlack/>  
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
                    <header className="px-6 py-8 sm:px-10 sm:py-10 text-base">
                        {privacyHeader.map((item, index) => (
                            <React.Fragment key={index}>
                                {item.content}
                            </React.Fragment>
                        ))}
                    </header>

                    <main className="px-4 sm:px-8 pb-8 space-y-8 text-gray-700">
                        {sections.map((sec) => (
                            <section key={sec.id}>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{sec.title}</h2>
                                <div className="text-base">
                                    {sec.content}
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </>
    );
}

export default CookiePolicy;