import { HeroSectionJour2 } from "../components/HeroSectionJour2";
import { ProgrammeView } from "../components/ProgrammeView";
import { JOUR_2_SESSIONS } from "../constants";

export const Jour2Screen = () => {
  return (
    <>
      <HeroSectionJour2 />
      <ProgrammeView sessions={JOUR_2_SESSIONS} />
    </>
  );
};
