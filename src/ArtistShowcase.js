import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import katun from './assets/katun.png';
import vhs from './assets/person2.png';

const artists = [
  {
    name: "KATUN",
    image: katun,
    shortBio: "Here to make a statement in the heart of a tropical peninsular in South East Asia – Katun, has honed his position as one of the top leading graffiti artists in Malaysia.",
    fullBio: "Here to make a statement in the heart of a tropical peninsular in South East Asia – Katun, has honed his position as one of the top leading graffiti artists in Malaysia. A talented local who has created an identity and name for himself through his love of reinterpreting cartoon characters as his signature style. Growing up in Malaysia, Katun's quotidian exposure to monkeys and forestry in the region initially sparked his inspirations in creating his unique statement pieces – his apes. Known for its robust body form, Katun has redefined his apes to take a humanistic silhouette while staying true to the natural disjoined limbs of the Great Apes that are native to Malaysia – The Orangutan; translated “Man of the forest”. To date, he has created his own art collective 4 Stages with brand collaborations with Vans, Marshall, New Era, Sony and a notable roster of renowned artists such as Grammy winners Chris Brown, Dua Lipa and Post Malone to name a few. With a growing worldwide presence, Katun’s work is sure to make a mark in your city soon!"
  },
  {
    name: "VHS",
    image: vhs,
    shortBio: "Chris Webber (VHS) is an English contemporary artist. Born in the South West of England, he grew up skateboarding and surfing.",
    fullBio: "Chris Webber (VHS) is an English contemporary artist. Born in the South West of England, he grew up skateboarding and surfing and has lived a life immersed in street culture. Back when VHS was young, skateboards, surfboards, and art gifted him a sense of community and camaraderie that endures to this day. When he needed help the most, the toys and friends were always there for him. With a background in web, graphic design, animation, and creative direction, VHS has worked for some of the world’s biggest brands, agencies, and television channels. As a lifelong artist, his artistic expression is in every work created for the customers, but over the last few years, the need to make art for art’s sake has taken over. VHS now paints and creates art full time, crossing the boundaries between digital and physical art."
  }
];

export default function ArtistShowcase() {
  const [expandedArtists, setExpandedArtists] = useState({});

  const toggleBio = (name) => {
    setExpandedArtists((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:py-8 raleway mx-auto w-full max-w-6xl">
      <div className="relative mb-4">
            <h1
              className="text-6xl md:text-[90px] font-bold text-transparent absolute -bottom-1 md:-bottom-2"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Artists
            </h1>
            <h1 className="text-6xl md:text-[90px] font-bold text-white relative z-10 transition-transform duration-300 ease-in-out hover:translate-x-3">
              Artists
            </h1>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {artists.map((artist) => (
          <div key={artist.name} className="flex flex-col md:flex-row items-start text-center md:text-left mb-8 mx-auto">
            <div className='mx-auto'>
            <img
              src={artist.image}
              alt={artist.name}
              className="rounded-lg mb-4 object-cover artist-image"
              style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
            />
            </div>
            <div className="ml-0 md:ml-4 w-full md:w-[50%] flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
              <div className={`mb-4 px-2 transition-all duration-500 ease-in-out overflow-hidden ${expandedArtists[artist.name] ? 'max-h-[500px]' : 'max-h-[200px]'}`}>
                {expandedArtists[artist.name] ? artist.fullBio : artist.shortBio}
              </div>
              <button
                onClick={() => toggleBio(artist.name)}
                className="flex items-center gap-2 p-2 border border-white bg-transparent rounded hover:bg-white hover:text-black transition"
              >
                {expandedArtists[artist.name] ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read Bio <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
