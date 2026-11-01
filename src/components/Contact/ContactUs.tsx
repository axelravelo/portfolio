import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

export const ContactUs = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.current) return;

        if (!serviceId || !templateId || !publicKey) {
            setStatus("error");
            return;
        }

        setStatus("sending");
        try {
            await emailjs.sendForm(serviceId, templateId, form.current, { publicKey });
            form.current.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-field">
                <label htmlFor="user_name">Name</label>
                <input id="user_name" type="text" name="user_name" placeholder="Your name" required />
            </div>

            <div className="contact-form-field">
                <label htmlFor="user_email">Email</label>
                <input id="user_email" type="email" name="user_email" placeholder="your@email.com" required />
            </div>

            <div className="contact-form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" className="contact-submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p className={`contact-form-status contact-form-status-${status}`} role="status" aria-live="polite">
                {status === "success" && "Thanks for reaching out. Your message has been sent."}
                {status === "error" && "Your message could not be sent. Please email me directly instead."}
            </p>
        </form>
    );
};
