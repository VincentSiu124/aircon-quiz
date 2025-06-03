// 冷氣測驗頁面 /ig.tsx 專用互動版本（根據心理問題）

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

export default function AirconPsychologyQuiz() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });

  const handleChange = (questionKey: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);

  const handleSubmit = () => setStep(5);

  const recommendedModel = () => {
    const { q1, q2, q3, q4 } = answers;
    if (q1 === 'A' && q3 === 'A' && q4 === 'A') {
      return {
        name: 'CW-HU70AA',
        image: '/aircon-hu70aa.jpg',
        link: 'https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-3-4hp-cooling-only-cw-hu70aa.html',
        features: '基本功能 / 價錢親民'
      };
    }
    if (q3 === 'D' && q4 === 'D') {
      return {
        name: 'CS-Z36ZKA',
        image: '/aircon-z36zka.jpg',
        link: 'https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/wifi-inverter-2-5hp-cooling-heating-model-cs-z36zka.html',
        features: '旗艦機種 / 冷暖 / nanoeX / Wi-Fi'
      };
    }
    return {
      name: 'CS-LZ12ZKA',
      image: '/aircon-lz12zka.jpg',
      link: 'https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/inverter-1-5hp-cooling-model-cs-lz12zka.html',
      features: '變頻 / nanoeX / 靜音'
    };
  };

  const quizQuestions = [
    {
      key: 'q1',
      title: '1️⃣ 你打算裝在哪個空間？',
      options: [
        { label: 'A. 睡房（細房）', value: 'A' },
        { label: 'B. 客廳或開放式空間', value: 'B' },
        { label: 'C. 書房／工作間', value: 'C' },
        { label: 'D. 幾個房間一齊想涼', value: 'D' }
      ]
    },
    {
      key: 'q2',
      title: '2️⃣ 你對靜音有幾重視？',
      options: [
        { label: 'A. 非常重要，要夠靜先瞓得着', value: 'A' },
        { label: 'B. 普通啦，唔太嘈就得', value: 'B' },
        { label: 'C. 無所謂，我成日唔喺屋企', value: 'C' }
      ]
    },
    {
      key: 'q3',
      title: '3️⃣ 你希望冷氣有啲乜功能？',
      options: [
        { label: 'A. 基本冷凍就得', value: 'A' },
        { label: 'B. 要淨化空氣，最好有除菌', value: 'B' },
        { label: 'C. 要慳電，同時智能操作', value: 'C' },
        { label: 'D. 越多功能越好', value: 'D' }
      ]
    },
    {
      key: 'q4',
      title: '4️⃣ 你裝冷氣嘅預算大約係？',
      options: [
        { label: 'A. $3,000 - $5,000', value: 'A' },
        { label: 'B. $5,000 - $8,000', value: 'B' },
        { label: 'C. $8,000 - $12,000', value: 'C' },
        { label: 'D. 無所謂，啱用最重要', value: 'D' }
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardContent className="space-y-6">
          {step <= 4 && (
            <div>
              <h2 className="text-xl font-semibold mb-2">{quizQuestions[step - 1].title}</h2>
              <RadioGroup
                onValueChange={(val) => handleChange(quizQuestions[step - 1].key, val)}
                value={answers[quizQuestions[step - 1].key]}
              >
                {quizQuestions[step - 1].options.map((opt) => (
                  <div key={opt.value} className="flex items-center space-x-2 py-1">
                    <RadioGroupItem value={opt.value} id={opt.value + step} />
                    <Label htmlFor={opt.value + step}>{opt.label}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button className="mt-4" onClick={step === 4 ? handleSubmit : handleNext} disabled={!answers[quizQuestions[step - 1].key]}>
                {step === 4 ? '查看建議' : '下一題'}
              </Button>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">🔍 根據你的選擇，我哋建議以下型號：</h2>
              <div className="border p-4 rounded-xl shadow">
                <Image
                  src={recommendedModel().image}
                  alt={recommendedModel().name}
                  width={240}
                  height={160}
                  className="rounded mb-2"
                />
                <p className="text-lg font-bold">{recommendedModel().name}</p>
                <p className="text-sm text-gray-600">{recommendedModel().features}</p>
                <Link href={recommendedModel().link} target="_blank" className="text-blue-600 underline mt-1 inline-block">
                  查看產品詳情
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
