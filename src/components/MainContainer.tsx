import { useState, VFC } from "react";

type props = {
  difficulty: number;
};
export const MainContainer: VFC<props> = (props) => {
  const { difficulty } = props;
  const [wordList, setWordList] = useState([
    "asd",
    "translucent",
    "transmit",
    "transplant",
    "transport",
    "transpose",
    "trap",
    "trash",
    "traverse",
    "treacherous",
    "tread",
    "treason",
    "treat",
    "treatment",
    "treaty",
    "tremble",
    "trend",
    "tribal",
    "tribute",
    "trickle",
    "trifle",
    "trim",
    "tripartite",
    "triple",
    "triumphantly",
    "trivial",
    "tropical",
    "trunk",
    "trying",
    "tuition",
    "tumble",
    "tumultuous",
    "tune",
    "tunnel vision",
    "Turkey",
    "turmoil",
    "turn up",
    "tutor",
    "tutorial",
    "twilight",
    "twist",
    "twitch",
    "twofold",
    "tyranny",
    "ultimate",
    "unadventurous",
    "unbridled",
    "underlying",
    "undermine",
    "underneath",
    "underpin",
    "undertake",
    "underworld",
    "undo",
    "unduly",
    "unease",
    "uneasy",
    "unemployment",
    "unenviable",
    "unequivocally",
    "uneven",
    "unfairly",
    "unfeeling",
    "unfold",
    "unhook",
    "unidirectionally",
    "unify",
    "uninterrupted",
    "union",
    "unitary",
    "unity",
    "unprecedented",
    "unqualified",
    "unravel",
    "unreliable",
    "unrequited",
    "unrivaled",
    "unsatisfactory",
    "unshakeable",
    "unsoundness",
    "unwittingly",
    "upcoming",
    "uperfluous",
    "uphold",
    "uplift",
    "upright",
    "uproar",
    "upward",
    "urge",
    "urgent",
    "usage",
    "usher",
    "utility",
    "utilize",
    "utmost",
    "utter",
    "utter",
    "utterance",
    "vacant",
    "vacuum"
  ]);

  const matchJudgment = (e: { target: HTMLInputElement }) => {
    if (e.target.value === wordList[0]) {
      e.target.value = "";
      const newList = [...wordList];
      setWordList(newList.slice(1, wordList.length));
    }
  };

  return (
    <>
      <div>{wordList[difficulty]}</div>
      <input type="text" onChange={matchJudgment} />
    </>
  );
};
