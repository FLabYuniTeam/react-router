import React from 'react';
import { useNavigate } from 'react-router-dom';

import coordinatesImg from '../img/coordinates.jpeg';
import dragImg from '../img/drag-drop-icon.jpeg';
import thisImg from '../img/JS_this.jpeg';
import networkImg from '../img/network.png';
import uriImg from '../img/URI.png';

const Main = () => {
	const navigate = useNavigate();
	const images = [dragImg, thisImg, coordinatesImg, uriImg, networkImg];
	const routes = ['/drag', '/this', '/coordinates', '/uri', '/network'];
	const initialState = [
		{
			title: 'Web API Drag & Drop',
			content: 'Web API 중 하나인 Drag & Drop 에 대해 알아보자.',
			date: '2023.03.15',
		},
		{
			title: '자바스크립트의 this란?',
			content:
				'다른 언어와의 차이점이 명확한 자바스크립트의 this에 대해 알아보자.',
			date: '2023.02.15',
		},
		{
			title: 'clientX, pageX, screenX, offsetX의 차이점',
			content: 'UI Event의 MouseEvent 중 좌표값에 대해 알아보자.',
			date: '2023.01.15',
		},
		{
			title: 'URI에 대해',
			content:
				'URI에 대해 개념 정리를 하고 어떻게 활용하면 좋을지에 대해 알아보자.',
			date: '2022.12.15',
		},
		{
			title: '네트워크 관련 키워드와 전체적인 흐름',
			content:
				'네트워크의 핵심적인 키워드를 정리하고, 더 나아가 전체적인 흐름에대해 알아보자.',
			date: '2022.11.15',
		},
	];

	return (
		<div className="main">
			<h1>개발</h1>
			{initialState.map((item, index) => (
				<div className="main-item" onClick={() => navigate(routes[index])}>
					<img src={images[index]} alt="post logo" />
					<div className="main-item-title">
						<h2>{item.title}</h2>
						<p>{item.content}</p>
						<p>{item.date}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Main;
