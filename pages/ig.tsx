import { useRouter } from "next/router";
import { useState } from "react";
import { findModelsByArea } from "@/data/airconModels";

export default function IG() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "你房間面積大約係：",
      options: [
        "A. 50 - 70 呎",
        "B. 80 - 100 呎",
        "C. 110 - 150 呎",
        "D. 160 - 200 呎",
        "E. 210 - 250 呎"
      ]
    },
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

  const handleAnswer = (answer: string) => {
    const updated = [...answers, answer];
    setAnswers(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      // 根據選擇範圍對應面積中心值
      const areaMap: Record<string, number> = {
        "A. 50 - 70 呎": 60,
        "B. 80 - 100 呎": 90,
        "C. 110 - 150 呎": 130,
        "D. 160 - 200 呎": 180,
        "E. 210 - 250 呎": 230
      };
      const areaAnswer = updated[0];
      const area = areaMap[areaAnswer] || 100;
      const recommended = findModelsByArea(area);
      const modelIds = recommended.map(m => m.id).join(",");
      router.push(`/result?models=${modelIds}`);
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
