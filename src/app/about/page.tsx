import { PhoneCall } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "RAHAJANIRINA Fanomezantsoa Tokiniaina",
    role: "Frontend Developer",
    image: "https://avatar.iran.liara.run/public/boy",
    description: "Developing the front-end of the events app Tapakila",
  },
  {
    name: "ANDRIVOLOLONTIANA Jenifère Vaninah",
    role: "Frontend Developer",
    image: "https://avatar.iran.liara.run/public/girl",
    description:
      "Developing the front-end of the admin dashboard for the events app Tapakila.",
  },
  {
    name: "Tsilavina ANDRIAMIHARISON",
    role: "FullStack Developer",
    image: "https://avatar.iran.liara.run/public/boy",
    description:
      "Designs intuitive and visually appealing UI/UX for the app and assist in development.",
  },
  {
    name: "ANDRIAMANOHINIAINA Herison Jean Freddy",
    role: "Backend Developer",
    image: "https://avatar.iran.liara.run/public/boy",
    description: "Create database and API for the events app Tapakila.",
  },
  {
    name: "RANDRIANIRINA Nomena Fitahiana Fandresena",
    role: "Backend Developer",
    image: "https://avatar.iran.liara.run/public/girl",
    description:
      "Create endpoints and manage database for the events app Tapakila.",
  },
];

export default function AboutUs() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            className="border rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-base-content/80">{member.role}</p>
            <p className="mt-3 text-base-content/60">{member.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Want to organize your own event?
        </h3>
        <p className="text-gray-600 mb-4">
          Click below and we’ll get in touch to help you become an organizer.
        </p>
        <Link
          href={"http://tapakila-admin.vercel.app/"}
          target="_blank"
          className="btn btn-xl btn-primary"
        >
          <PhoneCall size={18} /> Become Organizer
        </Link>
      </div>
    </section>
  );
}
