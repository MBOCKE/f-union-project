import { HeroSectionJour3 } from "../components/HeroSectionJour3";
import { ProgrammeView } from "../components/ProgrammeView";
import { JOUR_3_SESSIONS } from "../constants";

export const Jour3Screen = () => {
  return (
    <>
      <HeroSectionJour3 />
      <ProgrammeView sessions={JOUR_3_SESSIONS} />
    </>
  );
};
