
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.banner .slider .item').forEach(item => {
    item.addEventListener('click', function () {
      const imgSrc = this.querySelector('img').src;
      const memory = this.getAttribute('data-memory') || "No memory added.";

      const overlay = document.createElement('div');
      overlay.className = 'zoom-overlay';

      const imgBox = document.createElement('div');
      imgBox.className = 'zoom-image-box zoom-left';
      const zoomImg = document.createElement('img');
      zoomImg.src = imgSrc;
      imgBox.appendChild(zoomImg);

      const dialog = document.createElement('div');
dialog.className = 'zoom-dialog zoom-right';
dialog.innerHTML = `
  <h2>Memory 💖</h2>
  <p class="main-memory">${memory}</p>

  <h3 style="margin-top:1rem;">➕ Your Memory</h3>
  <textarea id="user-memory" rows="4" placeholder="Write your memory here..." style="width:100%;padding:0.5rem;border-radius:8px;"></textarea>
  <button id="share-btn" style="margin-top:10px;padding:8px 14px;border-radius:6px;background:#00BFFF;color:white;border:none;cursor:pointer;">Share Memory</button>

  <div id="shared-memory" style="margin-top:1rem;font-size:1rem;"></div>

  <button class="close-btn">Close</button>
`;


      overlay.appendChild(imgBox);
      overlay.appendChild(dialog);
      dialog.querySelector('#share-btn').addEventListener('click', () => {
    const userText = dialog.querySelector('#user-memory').value.trim();
    if (userText) {
        dialog.querySelector('#shared-memory').innerHTML = `<strong>You said:</strong> ${userText}`;
        dialog.querySelector('#user-memory').value = '';
    }
});

      document.body.appendChild(overlay);

      dialog.querySelector('.close-btn').addEventListener('click', () => {
        overlay.remove();
      });
    });
  });
});
