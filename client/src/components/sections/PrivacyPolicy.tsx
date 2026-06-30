import { motion } from 'motion/react';
import PageSEO from '../PageSEO';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-black dark:text-white">
      <PageSEO
        title="Privacy Policy"
        description="Read the Privacy Policy of Lotlite SIEC. Understand how we collect, use, and protect your personal data."
        canonical="/privacy-policy"
        noIndex={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose dark:prose-invert prose-wine max-w-none text-left"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight font-serif">Privacy Policy</h1>
        <p className="text-sm text-neutral-500 mb-8">Last Updated: June 2026</p>

        <p className="lead text-base text-neutral-600 dark:text-zinc-300 mb-8 font-medium">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy details
          how we collect, handle, and secure data shared during your website visit and application process.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you interact with our website, apply for programs, or request professional counseling, we may collect the following classes of data:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Personal Identifiers:</strong> Full name, date of birth, gender, and contact details (email address and phone number).
          </li>
          <li>
            <strong>Academic Documents:</strong> Prior academic marks, certificate copies, standard qualifications, and career backgrounds.
          </li>
          <li>
            <strong>Technical Information:</strong> IP addresses, browser types, and standard usage data via functional browser cookies to improve site navigation.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          The gathered information is processed strictly for legitimate corporate and educational operations, including:
        </p>
        <ul className="space-y-2">
          <li>Processing admissions, background checks, and structural profile evaluations.</li>
          <li>Onboarding selected candidates into our day-one corporate workforce.</li>
          <li>Coordinating registration records and mandatory DEB ID clearances with our online university learning partners.</li>
          <li>Reaching out to fulfill user-requested interactive counseling calls.</li>
        </ul>

        <h2>3. Data Sharing and Disclosure</h2>
        <p>
          We do not rent, sell, or trade student or user information to third-party marketing brokers. Data sharing is limited to:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Academic Verification:</strong> Sharing mandatory educational logs with Symbiosis School for Online and Digital Learning (SSODL) for official degree registration.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Sharing information with government regulatory boards when required by applicable Indian educational statutes or Distance Education Bureau (DEB) workflows.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement industry-standard electronic, physical, and administrative safeguards to protect your personal data against unauthorized access, loss, or alteration. Access to applicant records is strictly restricted to designated administrative and corporate human resource teams.
        </p>

        <h2>5. Cookie Policy</h2>
        <p>
          Our website utilizes functional cookies to enhance user experience, track form submissions safely, and analyze core traffic flows. Users can adjust their personal browser preferences to reject cookies, though doing so might limit certain interactive functionalities on the site.
        </p>

        <h2>6. Policy Updates</h2>
        <p>
          We reserve the right to review and update this Privacy Policy to ensure alignment with technological updates and changing regulatory frameworks. Any changes will be instantly active upon being posted to this page.
        </p>

        <h2>7. Contact and Support</h2>
        <p>
          For questions regarding your data privacy, data updating requests, or general information security practices, please contact our program support desk via the information listed on our official contact portal or email us at <a href="mailto:enquiry@lotlitesiec.com" className="text-wine">enquiry@lotlitesiec.com</a>.
        </p>
      </motion.div>
    </div>
  );
}
