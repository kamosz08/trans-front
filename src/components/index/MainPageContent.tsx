import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Box } from '../styled/Box';
import { FeatureDescription } from './FeatureDescription';
import { OpinionsCarousel } from './OpinionsCarousel';

const mobileImage = (
  <StaticImage
    src="../../images/mobile.png"
    alt="mobile"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);
const moneyImage = (
  <StaticImage
    src="../../images/money.png"
    alt="money"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);
const mobile2Image = (
  <StaticImage
    src="../../images/mobile2.png"
    alt="mobile"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);
const successImage = (
  <StaticImage
    src="../../images/success.png"
    alt="mobile"
    layout="constrained"
    height={800}
    quality={100}
    placeholder="blurred"
  />
);

export const MainPageContent: React.FC = () => (
  <Box>
    <FeatureDescription
      imageComponent={mobileImage}
      title="Optymalizacja tras"
      description="System tworzy najbardziej optymalne trasy dostawy. Stosując sztuczną inteligencję oraz dane zbierane z innych systemów jest w stanie zredukować koszty dostaw."
    />
    <FeatureDescription
      imageComponent={mobile2Image}
      imageFirst
      title="Opłaty mobilne"
      description="Dzięki mobilnej wersji możesz wykupywać drogi całej flocie z dowolnego miejsca. Możliwe jest też udostępnienie konta kierowcom aby sami byli w stanie to zrobić."
    />
    <OpinionsCarousel />
    <FeatureDescription
      imageComponent={successImage}
      title="Analiza wnioskóœ"
      description="Rozbudowane raporty i analizy pozwolą na wyciąganie istotnych wniosków, które mogą znacznie wpłynąć na korzyści. Na ich podstawie wiele firm wprowadza system nagród który motywuje swoich pracowników."
    />
    <FeatureDescription
      imageComponent={moneyImage}
      imageFirst
      title="Oszczędza czas i pieniądze"
      description="Głównym celem systemu jest zoptymalizowanie pracy aby zaoszczędzić czas i pieniądze. Wyliczanie tras, wspomaganie w zarządzaniu zleceniami, śledzenie pojazdów i kontrolowanie ich spalania, wszystko w jednym miejscu."
    />
  </Box>
);
