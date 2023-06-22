import KeyBoardButton from "../KeyBoardButton";
import type { Story } from "@ladle/react";

type ButtonParameter = {
  label: string;
};

export const Simple: Story<ButtonParameter> = ({ label }: ButtonParameter) => (
  <>
    <KeyBoardButton>{label}</KeyBoardButton>
  </>
);

export const Combination: Story<ButtonParameter> = ({
  label,
}: ButtonParameter) => (
  <>
    <KeyBoardButton>{label}</KeyBoardButton>
  </>
);

Simple.args = {
  label: "T",
};

Combination.args = {
  label: "CMD+T",
};
