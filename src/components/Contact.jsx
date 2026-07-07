import { Form } from 'react-router-dom';
export default function Contact() {
  return (
    <div className="max-w-[1152px] min-h-[852px] mx-auto px-6 py-8 font-primary bg-normalbg dark:bg-darkbg">
      <p className="max-w-[768px] mx-auto mt-8 text-gray-600 dark:text-lighter mb-8 text-center">
        We’d love to hear from you! If you have any questions, feedback, or
        suggestions, please don’t hesitate to reach out.
      </p>

      <Form className="space-y-6 max-w-[768px] mx-auto">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-primary dark:text-light mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300"
            required
            minLength={5}
            maxLength={30}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-primary dark:text-light mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-lg font-semibold text-primary dark:text-light mb-2"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="tel"
              required
              pattern="^\d{10}$"
              title="Mobile number must be exactly 10 digits"
              placeholder="Your Mobile Number"
              className="w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-primary dark:text-light mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300"
            required
            minLength={5}
            maxLength={500}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function contactAction() {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || 'Failed to fetch products. Please try again.',
      { status: error.status || 500 },
    );
  }
}
