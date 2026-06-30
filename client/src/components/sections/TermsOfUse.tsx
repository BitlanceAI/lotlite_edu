import { motion } from 'motion/react';
import PageSEO from '../PageSEO';

export default function TermsOfUse() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 relative z-10 text-black dark:text-white">
      <PageSEO
        title="Terms of Use"
        description="Read the Terms of Use for Lotlite SIEC. Learn about the rules governing use of our website and academic services."
        canonical="/terms-of-use"
        noIndex={true}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose dark:prose-invert prose-wine max-w-none text-left"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight font-serif">Terms and Conditions</h1>
        <p className="text-sm text-neutral-500 mb-8">Last Updated: June 2026</p>

        <p className="lead text-base text-neutral-600 dark:text-zinc-300 mb-8 font-medium">
          Welcome to our Work-Integrated Learning Program portal. By accessing or using this website, you agree to
          comply with and be bound by the following terms and conditions of use.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By registering, applying, or browsing this platform, users acknowledge that they have read, understood, and
          accepted these Terms and Conditions in full. If you disagree with any part of these terms, you must not use this
          website.
        </p>

        <h2>2. Program Structure & Automatic Employment Mandate</h2>
        <p>
          This website serves as a registration platform for a unique Work-Integrated Learning Model. Users acknowledge
          and accept that:
        </p>
        <ul className="space-y-2">
          <li>
            Admission into any academic track automatically constitutes full-time professional integration into our
            associated corporate workforce from Day 1.
          </li>
          <li>
            Active full-time daily professional participation at our designated corporate offices is a mandatory, core
            requirement of the program.
          </li>
          <li>
            Academic enrollment is delivered concurrently via our online university learning partners.
          </li>
        </ul>

        <h2>3. Course-Specific Service Agreements (Lock-in Period)</h2>
        <p>
          Due to the substantial operational resources, professional training, and executive mentorship invested in every
          participant from Day 1, all candidates agree to enter into a mandatory employment service commitment
          matching their selected program track:
        </p>
        <ul className="space-y-2">
          <li>
            <strong>Undergraduate Tracks (BBA / BCA):</strong> A mandatory 3-year service commitment from the date of onboarding.
          </li>
          <li>
            <strong>Postgraduate Tracks (MBA / MCA):</strong> A mandatory 2-year service commitment from the date of onboarding.
          </li>
        </ul>

        <h2>4. User Accounts & Registration Accuracy</h2>
        <p>
          To apply for programs, users may be required to complete registration forms. You agree to provide accurate,
          current, and complete details. Providing false information or misrepresenting academic qualifications will result in
          immediate disqualification from the admission lifecycle and termination of corporate association.
        </p>

        <h2>5. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, all material, concepts, structural blueprints, program models, text, graphics, and layouts
          published on this website are the intellectual property of the organization and are protected by applicable
          copyright and trademark laws. Unauthorized reproduction or commercial distribution is strictly prohibited.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          The information on this website is provided on an "as is" and "as available" basis. While we strive for absolute
          accuracy, the organization does not warrant that the website copy is free from accidental typographical updates
          or temporary server disruptions. We reserve the right to refine website content at any time without prior notice.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India, and any
          disputes relating to these terms shall be subject to the exclusive jurisdiction of the local courts where the
          corporate office operates.
        </p>
      </motion.div>
    </div>
  );
}
