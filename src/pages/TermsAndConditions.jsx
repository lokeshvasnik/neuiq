import Header from "../components/Header";
import React from "react";

const TermsAndConditions = () => {

    const privacyHeader = [
        {
            content: (
                <>
                    <h1 className="text-4xl sm:text-4xl font-semibold text-gray-900">
                        Terms & Conditions – NeuIQ.ai
                    </h1>
                    <p className="my-6">
                        <b>Effective Date:</b> September 23rd, 2025
                    </p>
                    <p>
                        Welcome to <a href="https://www.neuiq.ai">www.neuiq.ai</a> (the “Site”), owned and operated by NeuIQ Technologies Pvt. Ltd. (“NeuIQ,” “we,” “our,” “us”). By accessing or using this Site, you agree to comply with these Terms & Conditions (“Terms”).
                    </p>
                </>
            )
        }
    ]

    const sections = [
        {
            id: 1,
            title: "1. Use of the Site",
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>
                            This Site is intended for informational and lead-generation purposes only.
                        </li>
                        <li>
                            You agree not to misuse the Site, attempt unauthorized access, or engage in activity that disrupts its operation.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            id: 2,
            title: "2. Intellectual Property",
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>All content on this Site (text, graphics, logos, designs, etc.) is the property of NeuIQ or licensed to us.</li>
                        <li>You may not copy, reproduce, distribute, or exploit any content without prior written consent.</li>
                    </ul>
                </>
            ),
        },
        {
            id: 3,
            title: "3. User Submissions",
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>By submitting information (e.g., via forms), you represent that the information is accurate and you have the right to provide it.</li>
                        <li>We are not responsible for content you submit, but we may use it for the purpose for which it was submitted (e.g., responding to your inquiry).</li>
                    </ul>
                </>
            ),
        },
        {
            id: 4,
            title: "Third-Party Links",
            content: (
                <p className="leading-relaxed">
                    Our Site may contain links to external websites. NeuIQ is not responsible for the content or practices of such third-party sites.
                </p>
            ),
        },
        {
            id: 5,
            title: "5. Disclaimer of Warranties",
            content: (
                <>
                    <ul className="list-disc pl-5 space-y-1 leading-relaxed">
                        <li>The Site is provided “as is” and “as available.”</li>
                        <li>We make no warranties regarding the accuracy, reliability, or availability of the Site or its content..</li>
                    </ul>
                </>
            ),
        },
        {
            id: 6,
            title: "6. Limitation of Liability",
            content: (
                <p className="leading-relaxed">
                    To the maximum extent permitted by law, NeuIQ shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site.
                </p>
            ),
        },
        {
            id: 7,
            title: "7. Governing Law & Jurisdiction",
            content: (
                <p className="leading-relaxed">
                    These Terms shall be governed by the laws of India. Courts in <b>Mumbai, India</b> shall have exclusive jurisdiction.
                </p>
            ),
        },
        {
            id: 8,
            title: "8. Changes to the Terms",
            content: (
                <>
                    <p className="mb-2 leading-relaxed">
                        We may update these Terms at any time. Continued use of the Site indicates your acceptance of the revised Terms.
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

export default TermsAndConditions;