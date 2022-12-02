import { useState } from 'react';

import styled from 'styled-components';

const GridContainer: any = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledGrid: any = styled.div`
	display: grid;
	grid-template-columns: repeat(${(props: any) => props.colsCount}, 100px);
	grid-template-rows: repeat(${(props: any) => props.colsCount}, 100px);
	grid-row-gap: 1px;
	grid-column-gap: 1px;
`;

const Cell = styled.div`
	border: solid lightblue;
	width: 100px;
	height: 100px;
`;

function Grid() {
	const [cellsCount, setCellsCount] = useState(40);
	return (
		<GridContainer>
			<StyledGrid colsCount={Math.floor(Math.sqrt(cellsCount))}>
				{Array.from({ length: cellsCount }).map((_, i) => (
					<Cell key={i}>{i}</Cell>
				))}
			</StyledGrid>
		</GridContainer>
	);
}

export default Grid;
