import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactUs.css'

export const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                serviceId,
                templateId,
                form.current,
                {
                    publicKey: publicKey,
                }
            )
            .then(
                () => {
                    console.log("SUCCESS!");
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    };
    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-field">
                <label htmlFor="user_name">Name</label>
                <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                />
            </div>

            <div className="contact-form-field">
                <label htmlFor="user_email">Email</label>
                <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="your@email.com"
                    required
                />
            </div>

            <div className="contact-form-field">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                />
            </div>

            <button type="submit" className="contact-submit">
                Send Message
            </button>
        </form>
    );
};