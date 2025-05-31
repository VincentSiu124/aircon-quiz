import { useRouter } from "next/router";
import { useState } from "react";
import { airconModels } from "../data/airconModels";


export default function IG() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "你想要窗口機定分體機？",
      options: [
        "A. 窗口機",
        "B. 分體機",
        "C. 無所謂"
      ]
    },
    {
      question: "你打算裝在哪個空間？",
      options: [
        "A. 睡房（細房）",
        "B. 客廳或開放式空間",
        "C. 書房／工作間",
        "D. 幾個房間一齊想涼"
      ]
    },
    {
      question: "你對靜音有幾重視？",
      options: [
        "A. 非常重要，要夠靜先瞓得着",
        "B. 普通啦，唔太嘈就得",
        "C. 無所謂，我成日唔喺屋企"
      ]
    },
    {
      question: "你希望冷氣有啲乜功能？",
      options: [
        "A. 基本冷凍就得",
        "B. 要淨化空氣，最好有除菌",
        "C. 要慳電，同時智能操作",
        "D. 越多功能越好"
      ]
    },
    {
      question: "你裝冷氣嘅預算大約係：",
      options: [
        "A. $3,000 - $5,000",
        "B. $5,000 - $8,000",
        "C. $8,000 - $12,000",
        "D. 無所謂，啱用最重要"
      ]
    }
  ];

  const scoreModel = (answers: string[]): string[] => {
    const scores: Record<string, number> = {
      "CW-HU70AA": 0, // 基本窗口機
      "CW-XN121AA": 0, // 高階窗口機 (nanoeX)
      "CS-LZ9ZKA": 0, // 中階分體
      "CS-Z18ZKA": 0, // 高階分體智能變頻
      "CU-4Z80YB": 0  // 一拖多多機掛牆
    };

    // Q1: 機種選擇
    if (answers[0]?.startsWith("A")) {
      scores["CW-HU70AA"] += 2;
      scores["CW-XN121AA"] += 2;
    } else if (answers[0]?.startsWith("B")) {
      scores["CS-LZ9ZKA"] += 2;
      scores["CS-Z18ZKA"] += 2;
      scores["CU-4Z80YB"] += 1;
    } else {
      Object.keys(scores).forEach((key) => scores[key] += 1);
    }

    // Q2: 空間
    if (answers[1]?.startsWith("A")) {
      scores["CW-HU70AA"] += 2;
      scores["CS-LZ9ZKA"] += 2;
    } else if (answers[1]?.startsWith("B")) {
      scores["CS-Z18ZKA"] += 2;
    } else if (answers[1]?.startsWith("D")) {
      scores["CU-4Z80YB"] += 3;
    }

    // Q3: 靜音
    if (answers[2]?.startsWith("A")) scores["CS-LZ9ZKA"] += 2;
    if (answers[2]?.startsWith("B")) scores["CW-XN121AA"] += 1;

    // Q4: 功能
    if (answers[3]?.startsWith("A")) scores["CW-HU70AA"] += 2;
    if (answers[3]?.startsWith("B")) scores["CW-XN121AA"] += 2;
    if (answers[3]?.startsWith("C")) scores["CS-Z18ZKA"] += 3;
    if (answers[3]?.startsWith("D")) scores["CU-4Z80YB"] += 2;

    // Q5: 預算
    if (answers[4]?.startsWith("A")) scores["CW-HU70AA"] += 2;
    if (answers[4]?.startsWith("B")) scores["CW-XN121AA"] += 2;
    if (answers[4]?.startsWith("C")) scores["CS-LZ9ZKA"] += 2;
    if (answers[4]?.startsWith("D")) scores["CS-Z18ZKA"] += 2;

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topModels = sorted.slice(0, 2).map(([model]) => model);
    return topModels;
  };

  const handleAnswer = (answer: string) => {
    const updated = [...answers, answer];
    setAnswers(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const resultModels = scoreModel(updated);
      router.push(`/result?models=${resultModels.join(",")}`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎯 歡迎使用冷氣心理測驗</h1>
      <p>{questions[step].question}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {questions[step].options.map((opt, index) => (
          <li key={index} style={{ marginBottom: "1rem" }}>
            <button onClick={() => handleAnswer(opt)} style={{ padding: "0.5rem 1rem" }}>
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
