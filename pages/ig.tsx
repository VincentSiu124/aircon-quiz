import { useRouter } from "next/router";
import { useState } from "react";

export default function IG() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
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

  const scoreModel = (answers: string[]): string => {
    let scoreLZ = 0;
    let scoreZ = 0;
    let scoreHU = 0;

    // 空間選擇
    if (answers[0]?.startsWith("A") || answers[0]?.startsWith("C")) scoreLZ++;
    if (answers[0]?.startsWith("B")) scoreZ++;
    if (answers[0]?.startsWith("D")) scoreZ++;

    // 靜音
    if (answers[1]?.startsWith("A")) scoreLZ++;

    // 功能需求
    if (answers[2]?.startsWith("A")) scoreHU++;
    if (answers[2]?.startsWith("B")) scoreLZ++;
    if (answers[2]?.startsWith("C") || answers[2]?.startsWith("D")) scoreZ++;

    // 預算
    if (answers[3]?.startsWith("A")) scoreHU++;
    if (answers[3]?.startsWith("B")) scoreLZ++;
    if (answers[3]?.startsWith("C") || answers[3]?.startsWith("D")) scoreZ++;

    if (scoreZ >= scoreLZ && scoreZ >= scoreHU) return "CS-Z18ZKA";
    if (scoreLZ >= scoreHU) return "CS-LZ9ZKA";
    return "CW-HU70AA";
  };

  const handleAnswer = (answer: string) => {
    const updated = [...answers, answer];
    setAnswers(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      const resultModel = scoreModel(updated);
      router.push(`/result?model=${resultModel}`);
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
