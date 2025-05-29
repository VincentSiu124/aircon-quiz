import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Result() {
  const router = useRouter();
  const { model = 'CS-LZ9ZKA' } = router.query;

  const models = {
    'CS-LZ9ZKA': {
      name: 'CS-LZ9ZKA',
      image: '/aircon-lz12zka.jpg',
      link: 'https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/inverter-1hp-cooling-model-cs-lz9zka.html',
      reason: '適合細房、空氣淨化需求高'
    },
    'CS-Z18ZKA': {
      name: 'CS-Z18ZKA',
      image: '/aircon-z12zka.jpg',
      link: 'https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/inverter-2hp-cooling-heating-model-cs-z18zka.html',
      reason: '適合客廳、智能操控、變頻慳電'
    },
    'CW-HU70AA': {
      name: 'CW-HU70AA',
      image: '/aircon-hu70aa.jpg',
      link: 'https://www.panasonic.hk/chinese/products/living/ventilation-air-conditioning/window-type-3-4hp-cooling-only-cw-hu70aa.html',
      reason: '入門型號，基本功能夠用，價錢親民'
    }
  };

  const selected = models[model as string] || models['CS-LZ9ZKA'];


  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🎉 測驗結果</h2>
      <p className="mb-2">根據你的選擇，我們為你推薦：</p>
      <div className="border p-4 rounded-xl shadow mt-4">
        <Image
          src={selected.image}
          alt={selected.name}
          width={300}
          height={200}
          className="mx-auto rounded mb-2"
        />
        <p className="text-lg font-semibold">{selected.name}</p>
        <p className="text-sm text-gray-700 mb-2">{selected.reason}</p>
        <Link
          href={selected.link}
          target="_blank"
          className="text-blue-600 underline"
        >
          查看產品詳情
        </Link>
      </div>
      <Link href="/ig" className="mt-6 inline-block text-sm text-gray-600 underline">
        🔁 重新開始測驗
      </Link>
    </div>
  );
}
