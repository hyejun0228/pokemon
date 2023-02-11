import * as S from './pagination.styled';

function Pagination({ limit, page, setPage, setOffsetNumber }) {
	const numPages = Math.ceil(10241 / limit);

	return (
		<>
			<S.Nav>
				<S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
					{/* disabled : page가 1이면 클릭못하게 */}
					&lt;
				</S.Button>

				{Array(numPages)
					.fill()
					.map((_, i) => (
						<S.Button
							key={i + 1}
							onClick={(p) => {
								setPage(i + 1);
								setOffsetNumber((p) => page * 30 * p);
							}}
							aria-current={page === i + 1 ? 'page' : null}
						>
							{i + 1}
						</S.Button>
					))}

				<S.Button
					onClick={() => setPage(page + 1)}
					disabled={page === numPages}
				>
					&gt;
				</S.Button>
			</S.Nav>
		</>
	);
}

export default Pagination;
