
function display(poems) {
  const container = document.getElementById('poems-container');

 
  poems.forEach(poem => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
      card.innerHTML = `
          <div class="card h-100">
              <div class="card-body">
                  <h5 class="card-title">${poem.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">by ${poem.author}</h6>
                  <p class="card-text">${poem.lines.join(' ').slice(0, 100)}...</p>
                  <button onclick="viewFullPoem('${poem.title}', '${poem.author}', \`${poem.lines.join('\n')}\`)" class="btn btn-primary">View Full Poem</button>
              </div>
          </div>
      `;
      container.appendChild(card);
  });
}

async function retrieveopoems() {
  try {
      const response = await fetch('https://poetrydb.org/random/3');
      const poems = await response.json();
      display(poems);
  } catch (error) {
      console.error('Error fetching poems:', error);
  }
}

function viewFullPoem(title, author, poemText) {
  console.log("Title:", title);
  console.log("Author:", author);
  console.log("Poem Text:", poemText);

  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalAuthor').innerText = `by ${author}`;
  document.getElementById('modalPoemText').innerText = poemText;
  $('#poemModal').modal('show');
}
window.onload = retrieveopoems;
