// A-03: 프로젝트·활동·자격·교육·수상 카테고리 필터
const filterButtons = document.querySelectorAll('.category-chip[data-filter]');
const achievementRows = document.querySelectorAll('#achievements tbody tr');
const achievementSummary = document.getElementById('achievement-summary');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selected = button.dataset.filter;
        let visibleCount = 0;

        achievementRows.forEach((row) => {
            const show = selected === '전체' || row.dataset.category === selected;
            row.hidden = !show;
            if (show) visibleCount += 1;
        });

        filterButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle('is-active', active);
            item.setAttribute('aria-pressed', String(active));
        });

        achievementSummary.textContent = selected === '전체'
            ? `🗓️ 최신순 정렬 · 총 ${visibleCount}개의 실적`
            : `🗓️ 최신순 정렬 · ${selected} ${visibleCount}개 / 전체 ${achievementRows.length}개`;
    });
});