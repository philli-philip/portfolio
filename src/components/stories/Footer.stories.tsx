import Footer from "../Footer";
import type { Story } from "@ladle/react";
import ChallengeInfo from "../challengeInfo";
import type { Task } from "../../utils/types";

export const footer: Story = () => (
  <>
    <Footer />
  </>
);

export const challengeInfo: Story<Task> = ({}) => <ChallengeInfo />;

challengeInfo.args = {
  name: "Challenge Name",
  link: "https://www.google.de",
  difficulty: "Difficulty",
  completed: new Date(Date.now()),
};
