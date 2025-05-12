
document.addEventListener('DOMContentLoaded', function () {
    fetch('assets/data/recent_updates.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('recent-updates');
            if (!container) return;

            let flip = false;
            data.forEach(update => {
                const wrapper = document.createElement('div');
                wrapper.className = flip ? 'update2' : 'update1';

                const rowContainer = document.createElement('div');
                rowContainer.className = 'row';

                const col = document.createElement('div');
                col.className = 'col-md-12';

                const row = document.createElement('div');
                row.className = 'row row-cols-2';

                const dateCol = document.createElement('div');
                dateCol.className = 'col-md-1 d-flex align-items-center justify-content-center';
                const dateBox = document.createElement('div');
                dateBox.className = 'event-date';
                dateBox.textContent = update.date;
                dateCol.appendChild(dateBox);

                const contentCol = document.createElement('div');
                contentCol.className = 'col-md-11';
                const contentBox = document.createElement('div');
                contentBox.className = 'event';
                contentBox.innerHTML = update.content;
                contentCol.appendChild(contentBox);

                row.appendChild(dateCol);
                row.appendChild(contentCol);
                col.appendChild(row);
                rowContainer.appendChild(col);
                wrapper.appendChild(rowContainer);
                container.appendChild(wrapper);

                flip = !flip;
            });
        });
});
