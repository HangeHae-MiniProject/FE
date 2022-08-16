import React, { useEffect, useState } from "react";
import styles from "../../css_modules/ResultPage.module.css";
import Btn from "../elements/Btn";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export function SlideButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
      버튼
    </button>
  );
}

function MyResult() {
  const userResult = useSelector((state) => state.result);
  // -----무한 슬라이더 시도!
  const resultImg =
    "https://img.wkorea.com/w/2016/07/style_577c9c629163f-1200x672.jpg";
  const flagImg = "https://flagcdn.com/w320/hk.png";

  const slideImg = [resultImg, flagImg];
  // const slides = ["#33a", "#8c9", "#f3e074"];
  const [currentIdx, setCurrentIdx] = useState(0);
  const handleSwipe = (direction) => {
    setCurrentIdx((currentIdx) => currentIdx + direction);
  };
  return (
    <div className={styles.ResultWrap}>
      <h1>000님의 결과</h1>
      <div
        className="slider-area"
        style={{ position: "relative", overflow: "hidden", height: "auto" }}
      >
        <div className="slider">
          <SlideButton direction="prev" onClick={() => handleSwipe(-1)} />
          <SlideButton direction="next" onClick={() => handleSwipe(1)} />
          <div
            className="slider-list"
            style={{
              position: "relative",
              overflow: "hidden",
              display: "block",
              margin: 0,
            }}
          >
            <div
              className="slider-track"
              style={{
                transform: `translateX(${
                  (-100 / slideImg.length) * (0.5 + currentIdx)
                }%)`,
                display: "flex",
                position: "relative",
                left: "50%",
              }}
            >
              {slideImg.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt="이미지" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ------기본 영역 */}
      <h2>홍콩입니다</h2>
      <p>
        역동적인 분위기가 물씬 느껴지는 동아시아의 도시 홍콩은 멋진 스카이라인,
        활기찬 에너지, 다양한 문화적 영향이 특징인 곳입니다.\n\"아시아의 세계
        도시\"라는 자부심과 긍지가 느껴지는 홍콩은 동아시아와 세계 주요 수도를
        연결하는 중요한 중심지입니다. 인구도 많지만 교육 및 지식 수준이 높고
        바쁘게 움직이는 현대식 도시로, 주요 금융 중심지이기도 합니다. 남중국해에
        위치한 홍콩은 활기찬 분위기, 푸른 도시 공원, 멋진 박물관, 그리고 대륙
        최고의 쇼핑 센터 등 자랑거리도 많습니다. 세계에서 인구 밀도가 가장 높은
        지역인 몽콕(Mong Kok)의 재래시장에서 몇 시간만 이동하면 수풀이 우거진
        자연 그대로의 전원과 조용한 내륙의 소도시에 도착하실 수 있습니다. 카오룽
        시내에서 볼만한 곳으로는 중국 예술품들을 감상하실 수 있는 홍콩 예술
        박물관(Hong Kong Museum of Art)이 있습니다. 항구 건너에는 홍콩 내륙의
        인상적인 스카이라인을 한눈에 볼 수 있는 활기찬 상업 중심지 침사추이가
        있으며, 이곳에서 호화로운 쇼핑에 빠져 보시는 것도 좋습니다.
      </p>
      <Btn>로그아웃</Btn>
    </div>
  );
}

export default MyResult;
