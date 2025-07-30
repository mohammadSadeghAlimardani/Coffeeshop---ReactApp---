import "./contact.css";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <section className="section-center">
                <h2>stay in the loop, sip by sip</h2>
                <p>
                    Get the latest brews, exclusive offers, and beanie news
                    delivered straight to your inbox
                </p>
                <form action="#" onSubmit={(event) => event.preventDefault()}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email address"
                    />
                    <button type="submit" className="btn btn-black-brown">
                        subscribe
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Contact;
