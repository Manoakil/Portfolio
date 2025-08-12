import React, { useState } from 'react';

export default function Contact() {
  const [data, setData] = useState({ name:'', email:'', subject:'', mobile:'', message:'' });
  const handle = e => setData({ ...data, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); console.log(data); };

  return (
    <section id="contact" className="py-20 px-6 md:px-24 bg-white text-gray-800 font-body fade-in">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-heading mb-2">Get in Touch</h2>
        <p className="text-gray-600">
          Feel free to reach out for collaborations or inquiries.
        </p>
      </div>
      <form
        onSubmit={submit}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          { label:'Name',   name:'name',   type:'text' },
          { label:'Email',  name:'email',  type:'email' },
          { label:'Subject',name:'subject',type:'text', span:2 },
          { label:'Mobile', name:'mobile', type:'text', span:2 }
        ].map((f,i) => (
          <div key={i} className={`flex flex-col ${f.span?'md:col-span-2':''}`}>
            <label className="mb-1">{f.label}</label>
            <input
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition"
              name={f.name}
              type={f.type}
              value={data[f.name]}
              onChange={handle}
            />
          </div>
        ))}
        <div className="md:col-span-2 flex flex-col">
          <label className="mb-1">Message</label>
          <textarea
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
            name="message"
            rows="5"
            value={data.message}
            onChange={handle}
          />
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="mt-4 px-8 py-3 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
