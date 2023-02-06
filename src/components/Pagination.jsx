import * as S from './pagination.styled';

function Pagination({ limit, page, setPage }) {
	const numPages = Math.ceil(1009 / limit);

	return (
		<>
			<S.Nav>
				<S.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
					&lt;
				</S.Button>
				{Array(numPages)
					.fill()
					.map((_, i) => (
						<S.Button
							key={i + 1}
							onClick={() => setPage(i + 1)}
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
