import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-indigo-400">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let’s work together</h3>

            <p className="text-gray-400">
              I’m open to freelance work, full-time roles, and exciting
              projects. If you have an idea or opportunity, let’s talk.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <span className="text-gray-300">
                  shankhwarsumit007@gmail.com
                </span>
              </div>

              <div className="flex gap-6 text-2xl">
                <a href="#" className="hover:text-indigo-400 transition">
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-indigo-400 transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
            <form className="space-y-5">
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
