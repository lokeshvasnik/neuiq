import { Link } from "react-router-dom";

import Header from "../components/Header";
import React from "react";

const PrivacyPolicy = () => {

    const privacyHeader = [
        {
            content: (
                <>
                    <h1 className="text-4xl sm:text-4xl font-semibold text-gray-900">
                        Privacy Policy – NeuIQ.ai
                    </h1>
                    <p className="my-6">
                        <b>Effective Date:</b> September 23rd, 2025
                    </p>
                    <p>
                        NeuIQ Technologies Pvt. Ltd. (“NeuIQ,” “we,” “our,” or “us”) respects your privacy and is
                        committed to protecting it through this Privacy Policy. This Policy explains how we collect, use,
                        disclose, and safeguard your information when you visit our website <a className="underline text-blue-600" href="https://www.neuiq.ai">www.neuiq.ai</a> (“Site”).
                    </p>
                </>
            )
        }
    ]

    const sections = [
        {
            id: 1,
            title: "1. Information We Collect",
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>
                            <strong>Personal Information:</strong> When you fill out forms (e.g.,
                            “Contact Us,” newsletter signups), we may collect your name, email
                            address, phone number, company name, and any other details you
                            choose to provide.
                        </li>
                        <li>
                            <strong>Automatically Collected Information:</strong> We may collect
                            IP address, browser type, device information, pages visited, and
                            interaction data through cookies and analytics tools (e.g., Google
                            Analytics, LinkedIn Pixel).
                        </li>
                        <li>
                            <strong>Cookies &amp; Tracking:</strong> See our <Link className="text-blue-600 underline" to="/cookie-policy">Cookie Policy</Link> for
                            details.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            id: 2,
            title: "2. How We Use Your Information",
            content: (
                <>
                    <p className="my-5">We use collected information to: </p>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>Respond to inquiries and provide requested information.</li>
                        <li>Improve website functionality and user experience.</li>
                        <li>Conduct analytics and measure engagement with our content.</li>
                        <li>Communicate about our services, events, or insights (only if you opt-in).</li>
                        <li>Ensure compliance with legal obligations.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 3,
            title: "3. Sharing of Information",
            content: (
                <>
                    <p className="mb-2 leading-relaxed">
                        We do not sell or rent your personal data. We may share information with:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li><strong>Service Providers:</strong> Third-party vendors (e.g., analytics,
                            hosting, CRM tools) that support our website and operations.</li>
                        <li> <strong>Legal Authorities:</strong> Where required to comply with applicable
                            laws or protect our rights.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 4,
            title: "4. Data Retention",
            content: (
                <p className="leading-relaxed">
                    We retain personal data only as long as necessary for the purposes
                    outlined in this Policy, unless a longer retention period is required
                    by law.
                </p>
            ),
        },
        {
            id: 5,
            title: "5. Your Rights",
            content: (
                <>
                    <p className="mb-2 leading-relaxed">
                        Depending on your jurisdiction (e.g., GDPR in the EU, CCPA in California), you may have the right to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>Access, update, or delete your personal information.</li>
                        <li>Withdraw consent to processing.</li>
                        <li>Request data portability.</li>
                        <li>Opt-out of marketing communications.</li>
                    </ul>
                    <p className="leading-relaxed mt-2">
                        To exercise these rights, contact us at{' '}
                        <span className="font-bold">
                            privacy@neuiq.ai
                        </span>
                        .
                    </p>
                </>
            ),
        },
        {
            id: 6,
            title: "6. Data Security",
            content: (
                <p className="leading-relaxed">
                    We use reasonable technical and organizational safeguards to protect
                    your data, but no system is 100% secure.
                </p>
            ),
        },
        {
            id: 7,
            title: "7. International Transfers",
            content: (
                <p className="leading-relaxed">
                    As we are based in India, data collected may be transferred and stored
                    outside your country of residence. By using our Site, you consent to
                    such transfers.
                </p>
            ),
        },
        {
            id: 8,
            title: "8. Updates to this Policy",
            content: (
                <>
                    <p className="mb-2 leading-relaxed">
                        We may update this Policy periodically. Changes will be posted on
                        this page with a revised effective date.
                    </p>
                    <p className="leading-relaxed">
                        <strong>Contact Us:</strong> For questions, email{' '}
                        <span className="font-bold">
                            privacy@neuiq.ai
                        </span>
                        .
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

export default PrivacyPolicy;