const id = Number(new URLSearchParams(location.search).get('id'));
const r = window.CHUCK_RELEASES?.[id - 1];
if (r) {
  document.title = r.title + ' | Chuck Black';
  document.getElementById('release-title').textContent = r.title;
  const art = document.getElementById('release-art');
  const img = document.createElement('img');
  img.src = 'assets/release-' + String(id).padStart(2, '0') + '.jpg';
  img.alt = r.title + ' official cover artwork';
  art.replaceChildren(img);
  art.classList.add('cover-art');
  document.getElementById('release-meta').textContent = r.meta;
  document.getElementById('release-description').textContent = r.description || 'Part of the curated Chuck Black catalog.';
  const actions = document.getElementById('release-actions');
  function addLink(href, label) {
    const a = document.createElement('a');
    a.href = href;
    a.className = 'btn';
    a.textContent = label;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    actions.append(a);
  }
  if (r.youtubePlaylist) {
    const player = document.createElement('iframe');
    player.src = 'https://www.youtube-nocookie.com/embed/videoseries?list=' + encodeURIComponent(r.youtubePlaylist);
    player.title = r.title + ' — YouTube playlist';
    player.loading = 'lazy';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    player.allowFullscreen = true;
    document.getElementById('release-player').append(player);
    addLink('https://www.youtube.com/playlist?list=' + encodeURIComponent(r.youtubePlaylist), 'Listen on YouTube');
  }
  if (r.link) addLink(r.link, 'All streaming platforms');
} else {
  document.getElementById('release-title').textContent = 'Release not found';
}
