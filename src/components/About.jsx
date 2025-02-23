import React from "react";
import { FaPalette, FaCheckCircle, FaUpload, FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🎨 About Color Compliance Checker</h1>

        {/* <p className="text-gray-600 text-center leading-relaxed">
          The **Color Compliance Checker** helps you analyze colors in images and compare them with your brand guidelines.
          It provides insights on **color similarity, contrast ratios, and accessibility compliance**.
        </p> */}

        <div className="mt-8 space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <FaUpload className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Easy Image Upload</h3>
              <p className="text-gray-600 text-sm">Simply drag & drop images to analyze their colors.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <FaPalette className="text-yellow-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Brand Color Matching</h3>
              <p className="text-gray-600 text-sm">Automatically detects colors and finds the best brand match.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <FaCheckCircle className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Accessibility Check</h3>
              <p className="text-gray-600 text-sm">Ensures contrast ratios meet WCAG standards for readability.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <FaFileDownload className="text-red-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Download Reports</h3>
              <p className="text-gray-600 text-sm">Export your analysis as **PDF** or **JSON** for future reference.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-700 font-medium">
            🔍 Try it now and ensure your colors align with **brand consistency & accessibility!**
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
