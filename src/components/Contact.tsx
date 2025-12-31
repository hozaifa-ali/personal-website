import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import MagicName from './MagicName'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail className="text-brand-green" size={20} />,
      label: 'Email',
      value: 'hozaifa.ali@example.com',
      link: 'mailto:hozaifa.ali@example.com',
    },
    {
      icon: <Github className="text-brand-green" size={20} />,
      label: 'GitHub',
      value: 'hozi8-web3',
      link: 'https://github.com/hozi8-web3',
    },
    {
      icon: <MapPin className="text-brand-green" size={20} />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Get In <span className="text-brand-green">Touch</span>
            </h2>
            <div className="h-1 flex-1 max-w-24 bg-gradient-to-r from-brand-green to-transparent" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-6"
          >
            <div className="card p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 glass rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">{info.icon}</div>
                    <div>
                      <p className="text-gray-400 dark:text-gray-500 text-xs font-mono uppercase tracking-wider mb-1.5 font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-900 dark:text-white hover:text-brand-green transition-colors text-lg font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white text-lg font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Education</h3>
              <p className="text-brand-green text-xl font-bold mb-2">Software Engineering</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">UET Lahore</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-3">Lahore, Pakistan</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="card p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2.5 text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 glass rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all bg-white dark:bg-gray-800/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2.5 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3.5 glass rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all bg-white dark:bg-gray-800/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2.5 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 glass rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all resize-none bg-white dark:bg-gray-800/50"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-green/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Magic Name Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mt-24"
        >
          <MagicName />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
