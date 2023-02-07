import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import heart from './heart.png';
import emptyheart from './heart.png';

const HeartButton = ({ like, onClick }) => {
	return <img src={like ? heart : emptyheart} onClick={onClick} />;
};

export default HeartButton;
