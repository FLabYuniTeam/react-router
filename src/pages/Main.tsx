import React from 'react';
import { useNavigate } from 'react-router-dom';

import coordinatesImg from '../img/coordinates.jpeg';
import dragImg from '../img/drag-drop-icon.jpeg';
import thisImg from '../img/JS_this.jpeg';
import networkImg from '../img/network.png';
import uriImg from '../img/URI.png';

const Main = () => {
	const navigate = useNavigate();
	return (
		<div className="main">
			<h1>개발</h1>
			<div className="main-item" onClick={() => navigate('/drag')}>
				<img src={dragImg} alt="" />
				<div className="main-item-title">
					<h2>Web API Drag & Drop</h2>
					<p>Web API 중 하나인 Drag & Drop 에 대해 알아보자.</p>
					<p>2023.03.15</p>
				</div>
			</div>
			<div className="main-item" onClick={() => navigate('/this')}>
				<img src={thisImg} alt="" />
				<div className="main-item-title">
					<h2>자바스크립트의 this란?</h2>
					<p>
						다른 언어와의 차이점이 명확한 자바스크립트의 this에 대해 알아보자.
					</p>
					<p>2023.02.15</p>
				</div>
			</div>
			<div className="main-item" onClick={() => navigate('/coordinates')}>
				<img src={coordinatesImg} alt="" />
				<div className="main-item-title">
					<h2>clientX, pageX, screenX, offsetX의 차이점</h2>
					<p>UI Event의 MouseEvent 중 좌표값에 대해 알아보자.</p>
					<p>2023.01.15</p>
				</div>
			</div>
			<div className="main-item" onClick={() => navigate('/uri')}>
				<img src={uriImg} alt="" />
				<div className="main-item-title">
					<h2>URI에 대해</h2>
					<p>
						URI에 대해 개념 정리를 하고 어떻게 활용하면 좋을지에 대해 알아보자.
					</p>
					<p>2022.12.15</p>
				</div>
			</div>
			<div className="main-item" onClick={() => navigate('/network')}>
				<img src={networkImg} alt="" />
				<div className="main-item-title">
					<h2>네트워크 관련 키워드와 전체적인 흐름</h2>
					<p>
						네트워크의 핵심적인 키워드를 정리하고, 더 나아가 전체적인 흐름에
						대해 알아보자.
					</p>
					<p>2022.11.15</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
