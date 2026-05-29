import React from 'react';
import { Link } from 'react-router';
const faqData = [
   {
      question: "How can I create an account?",
      answer: "Simply click the \"Sign Up\" button at the top right of the page, fill in your details, and follow the instructions in the confirmation email."
   },
   {
      question: "Is there a mobile app available?",
      answer: "Yes, our app is available on both iOS and Android. Just search for our name in the App Store or Google Play and download it for free."
   },
   {
      question: "How can I reset my password?",
      answer: "Click on “Forgot password” on the login page and follow the steps to receive a reset link in your email."
   },
   {
      question: "How do I update my account information?",
      answer: "Go to your profile settings and click on \"Edit Profile\" to update your name, email, and other personal information."
   },
   {
      question: "Can I bring a guest with me to the product launch event?",
      answer: "Yes, guests are welcome, but they must register in advance using the event registration form to receive their own entry badge."
   },
   {
      question: "How do I contact customer support?",
      answer: "You can reach our support team by clicking the “Contact Us” link at the bottom of the page or by emailing support@example.com."
   },
   {
      question: "Will the event sessions be recorded?",
      answer: "Yes, all main sessions will be recorded and made available to registered attendees within a few days after the event ends."
   },
   {
      question: "Is there parking available at the venue?",
      answer: "Yes, limited on-site parking is available on a first-come, first-served basis. Additional paid parking options are nearby."
   }
];

export default function Faq() {
   return (
      <section className="mt-6 px-4 md:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12 md:mb-16">
               <h2 className="text-slate-900 text-3xl font-bold mb-6 md:text-4xl">
                  Frequently Asked Questions
               </h2>
               <p className="text-base text-slate-600 leading-relaxed">
                  Explore common questions about using our platform, managing your account, billing, and accessing support.
                  Whether you're a developer or a new user, this section helps you get quick answers without the hassle.
               </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {faqData.map((item, index) => (
                  <div key={index}>
                     <h3 className="text-base font-semibold text-slate-900">
                        {item.question}
                     </h3>
                     <div className="mt-4">
                        <p className="text-base text-slate-600 leading-relaxed">
                           {item.answer}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}