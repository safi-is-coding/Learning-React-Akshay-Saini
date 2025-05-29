const Contact = () => {
  return (
    <>
    <div>Contact Us</div>
    // create contact us
    // form with name, email, message fields
    <form className="contact-form">
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default Contact