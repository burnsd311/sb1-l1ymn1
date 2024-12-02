import React, { useState } from 'react';
import { Upload, DollarSign, Percent, FileText, X, Loader2 } from 'lucide-react';
import { usePayApps } from '../../hooks/usePayApps';

export function PayAppForm() {
  const { createPayApp } = usePayApps();
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    billingAmount: '',
    percentageComplete: '',
    description: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      const pdfFiles = fileList.filter(file => file.type === 'application/pdf');
      setFiles(prev => [...prev, ...pdfFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createPayApp({
        projectName: formData.projectName,
        billingAmount: parseFloat(formData.billingAmount),
        percentageComplete: parseFloat(formData.percentageComplete),
        description: formData.description,
        status: 'submitted',
        fileLinks: [], // In a real app, files would be uploaded to storage
        userId: 'current-user-id',
      });

      // Reset form
      setFormData({
        projectName: '',
        billingAmount: '',
        percentageComplete: '',
        description: '',
      });
      setFiles([]);
    } catch (error) {
      console.error('Error submitting pay app:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">Submit Pay Application</h3>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="billingAmount" className="block text-sm font-medium text-gray-700">
                Billing Amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  id="billingAmount"
                  name="billingAmount"
                  value={formData.billingAmount}
                  onChange={(e) => setFormData({ ...formData, billingAmount: e.target.value })}
                  className="block w-full pl-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="percentageComplete" className="block text-sm font-medium text-gray-700">
                Percentage Complete
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  id="percentageComplete"
                  name="percentageComplete"
                  value={formData.percentageComplete}
                  onChange={(e) => setFormData({ ...formData, percentageComplete: e.target.value })}
                  className="block w-full pr-10 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="0"
                  min="0"
                  max="100"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Percent className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Supporting Documents
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF files only</p>
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700">Attached Files:</h4>
              <ul className="mt-2 divide-y divide-gray-200">
                {files.map((file, index) => (
                  <li key={index} className="py-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5 mr-2" />
                  Submitting...
                </>
              ) : (
                'Submit Pay Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}