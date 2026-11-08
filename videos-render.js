(function(){
const d=window.CHUCK_VIDEOS;if(!d)return;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const embed=id=>'https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id);
function tile(v,featured){const e=document.createElement('article');e.className=featured?'featured-video':'library-video';const frame=document.createElement('iframe');frame.src=embed(v.id);frame.title=v.title;frame.loading='lazy';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allowFullscreen=true;const w=document.createElement('div');w.className='video-embed';w.appendChild(frame);const h=document.createElement('h3');h.textContent=v.title;e.append(w,h);return e;}
function render(id,items,featured){const root=document.getElementById(id);if(!root)return;root.replaceChildren(...items.map(v=>tile(v,featured)));}
render('homepage-featured-videos',d.officialMusicVideos.slice(0,3),true);
render('official-video-library',d.officialMusicVideos,false);
render('interview-video-library',d.interviewsAndMedia,false);
const playlist=document.getElementById('myblocklive-player');if(playlist){playlist.src='https://www.youtube-nocookie.com/embed/videoseries?list='+encodeURIComponent(d.myBlockLivePlaylistId);playlist.title='MyBlockLIVE performance playlist';}
})();
