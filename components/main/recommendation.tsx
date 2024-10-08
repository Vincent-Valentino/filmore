import React, { useState } from 'react';
import Movies from './movies'; // Assuming Movies component is imported correctly

const MovieRecommendations: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Movie Data (9 movies with full plot, essayContent, and conclusion)
  const movies = [
    {
      id: '1',
      title: 'Spirited Away (2001)',
      subtitle: 'A Timeless Masterpiece of Imagination',
      background: './r_spiritedaway.jpg', // Make sure the path is correct
      criticQuote: '&quot;One of the most wondrous films ever made&quot;',
      critic: 'Roger Ebert',
      plotSummary: "Spirited Away follows 10-year-old Chihiro, who stumbles into a mysterious world after her parents are transformed into pigs...",
      essayContent: `
        The bathhouse is a central setting in Spirited Away, functioning both as a magical sanctuary and a place of labor. It represents a unique blend of luxury and burden, where spirits come to rejuvenate, yet Chihiro faces harsh realities as a worker. Hayao Miyazaki drew inspiration for Spirited Away from the experiences of a young family friend, crafting the story to resonate with children transitioning into adulthood.
      `,
      conclusion: "Spirited Away isn't merely an animated film—it's an exploration of courage, transformation, and the delicate relationship between humanity and nature."
    },
    {
      id: '2',
      title: 'Shoplifters (2018)',
      subtitle: 'A Deeply Intelligent and Humanistic Drama',
      background: './shoplifters.jpg',
      director: 'Hirokazu Kore-eda',
      studio: 'GAGA Corporation',
      criticQuote: '&quot;A rich, satisfying, and deeply intelligent film&quot;',
      critic: 'Peter Bradshaw',
      plotSummary: "Shoplifters tells the story of a ragtag family of thieves living on the margins of society in Tokyo...",
      essayContent: `
        The film explores the concept of family, questioning whether blood relations are more important than emotional connections. One of the most significant themes in Shoplifters is the critique of Japan's social system, which often fails to protect the most vulnerable.
      `,
      conclusion: "Shoplifters is not just a film about crime—it's a poignant exploration of what it means to belong."
    },
    {
      id: '3',
      title: 'The Pianist (2002)',
      subtitle: 'A Haunting and Emotional Masterpiece',
      background: './thepianist.jpg',
      director: 'Roman Polanski',
      studio: 'Focus Features',
      criticQuote: '&quot;One of the most unmissable films about survival and human resilience&quot;',
      critic: 'Roger Ebert',
      plotSummary: "The Pianist follows the harrowing story of Władysław Szpilman, a Jewish pianist who witnesses the destruction of his world during World War II...",
      essayContent: `The Pianist is an extraordinary account of survival, not just in terms of physical endurance, but also the survival of the human spirit. Adrien Brody's portrayal of Szpilman is hauntingly authentic.`,
      conclusion: "The Pianist is not just a war film; it's a story of hope, resilience, and the enduring power of art."
    },
    {
      id: '4',
      title: 'Parasite (2019)',
      subtitle: 'A Dark Satire on Class Divide',
      background: './parasite.jpg',
      director: 'Bong Joon-ho',
      studio: 'CJ Entertainment',
      criticQuote: '&quot;A brilliantly crafted dark satire that explores the extremes of social inequality&quot;',
      critic: 'Manohla Dargis',
      plotSummary: "Parasite follows the struggling Kim family as they infiltrate the affluent Park family...",
      essayContent: `
        Parasite masterfully blends genres, transitioning from dark comedy to thriller, and finally into a harrowing social commentary. Director Bong Joon-ho uses each character in the Kim family as a metaphor for the struggles faced by the working class.
      `,
      conclusion: "Parasite is not just a thriller or a dark comedy—it's a thought-provoking examination of the human condition and the impact of social hierarchies."
    },
    {
      id: '5',
      title: 'Bicycle Thieves (1948)',
      subtitle: 'A Neorealist Classic That Captures Post-War Italy',
      background: './bicyclethieves.jpg',
      director: 'Vittorio De Sica',
      studio: 'Produzioni De Sica',
      criticQuote: '&quot;A powerful depiction of poverty and the human spirit in post-war Italy&quot;',
      critic: 'Pauline Kael',
      plotSummary: "Bicycle Thieves tells the story of Antonio Ricci, an unemployed man in post-World War II Rome who finally secures a job that requires a bicycle...",
      essayContent: `
        Bicycle Thieves is a quintessential example of Italian neorealism, a movement characterized by its focus on the everyday lives of ordinary people, non-professional actors, and location shooting.
      `,
      conclusion: "Bicycle Thieves is a timeless classic that continues to resonate with audiences because of its universal themes of poverty, dignity, and resilience."
    },
    {
      id: '6',
      title: 'Oldboy (2003)',
      subtitle: 'A Vengeance Tale of Epic Proportions',
      background: './oldboy.jpg',
      director: 'Park Chan-wook',
      studio: 'Show East',
      criticQuote: '&quot;A brutal, twisted, and masterfully crafted exploration of revenge&quot;',
      critic: 'Peter Travers',
      plotSummary: "Oldboy tells the story of Oh Dae-su, a man who is imprisoned in a mysterious cell for 15 years...",
      essayContent: `
        Park Chan-wook's Oldboy is a film that transcends the typical revenge narrative, blending elements of neo-noir, psychological thriller, and Greek tragedy.
      `,
      conclusion: "Oldboy is a cinematic tour de force that redefined the revenge genre. Its shocking twists, visual brilliance, and emotional complexity make it a film that continues to resonate."
    },
    {
      id: '7',
      title: 'Still Walking (2008)',
      subtitle: 'A Quiet Reflection on Family and Loss',
      background: './r_stillwalking.jpeg',
      director: 'Hirokazu Kore-eda',
      studio: 'Bandai Visual',
      criticQuote: '&quot;A beautifully understated film about the dynamics of family and the passage of time&quot;',
      critic: 'A.O. Scott',
      plotSummary: "Still Walking tells the story of a family gathering to commemorate the death of a loved one 15 years earlier...",
      essayContent: `Hirokazu Kore-eda's Still Walking is a meditative reflection on the rhythms of daily life, family relationships, and the quiet moments that often go unnoticed.`,
      conclusion: "Still Walking is a deeply affecting film that gently unfolds the complex layers of family life."
    },
    {
      id: '8',
      title: 'Taxi Driver (1976)',
      subtitle: 'A Dark Portrait of Urban Alienation',
      background: './taxidriver.jpg',
      director: 'Martin Scorsese',
      studio: 'Columbia Pictures',
      criticQuote: '&quot;One of the greatest films ever made about loneliness and moral decay&quot;',
      critic: 'Roger Ebert',
      plotSummary: "Taxi Driver follows the story of Travis Bickle, a mentally unstable Vietnam War veteran who works as a night-time taxi driver...",
      essayContent: `Martin Scorsese's Taxi Driver is a haunting exploration of urban alienation and moral decay.`,
      conclusion: "Taxi Driver remains one of the most important films in American cinema. Scorsese's masterful direction creates a film that is both a character study and a social commentary."
    },
    {
      id: '9',
      title: 'Farewell My Concubine (1993)',
      subtitle: 'A Grand Historical Epic of Love and Betrayal',
      background: './farewellmyconcubine.jpg',
      director: 'Chen Kaige',
      studio: 'Beijing Film Studio',
      criticQuote: '&quot;A visually stunning and emotionally powerful exploration of identity, loyalty, and political upheaval&quot;',
      critic: 'Kenneth Turan',
      plotSummary: "Set against the tumultuous backdrop of 20th-century China, Farewell My Concubine tells the complex story of two Peking Opera stars...",
      essayContent: `
        Chen Kaige's Farewell My Concubine is a sweeping historical epic that masterfully blends personal tragedy with the political turmoil of 20th-century China.
      `,
      conclusion: "Farewell My Concubine is a poignant exploration of the enduring power of art amidst the chaos of history."
    }
  ];

  return (
    <div className="bg-[#0f172a] min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {movies.map((movie) => (
            <div key={movie.id} className="md:col-span-1">
              <Movies movie={movie} expandedCard={expandedCard} onExpand={handleExpand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRecommendations;
