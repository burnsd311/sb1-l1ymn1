import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. Follow the instructions sent to your email to create a new password.',
  },
  {
    question: 'What file formats are supported for pay application attachments?',
    answer: 'We support PDF, Excel (.xlsx), and image files (PNG, JPG) for pay application attachments. The maximum file size is 25MB per file.',
  },
  {
    question: 'How long does the approval process typically take?',
    answer: 'The approval process varies by organization, but typically takes 3-5 business days. You can track the status of your pay application in real-time through the dashboard.',
  },
  {
    question: 'Can I edit a submitted pay application?',
    answer: 'Once submitted, pay applications cannot be edited. However, if changes are needed, you can withdraw the submission and create a new one, or contact your project administrator.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h3>
        <div className="mt-6">
          <dl className="space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt className="text-lg">
                  <button
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      {openIndex === index ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}