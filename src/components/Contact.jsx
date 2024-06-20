import Social from "./Social";

const Contact = () => {
  const email = 'hello@domain.com';

  return (
    <div>
      <Social />
      <p><a href={`mailto:${email}`} className="text-3 font-bold hover:text-[#245CC9]">{email}</a></p>
    </div>
  )
}

export default Contact