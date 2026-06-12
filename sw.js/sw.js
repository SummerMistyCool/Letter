self.addEventListener('install',(e)=>{e.waitUntil(self.skipWaiting())});
self.addEventListener('activate',(e)=>{e.waitUntil(self.clients.claim())});
self.addEventListener('message',(e)=>{if(e.data&&e.data.type==='SHOW_NOTIFICATION'){self.registration.showNotification(e.data.title,{body:e.data.body,tag:e.data.tag||'yiyu',requireInteraction:!0,vibrate:[200,100,200]})}});
self.addEventListener('notificationclick',(e)=>{e.notification.close(),e.waitUntil(self.clients.matchAll({type:'window'}).then(t=>{t.length>0?t[0].focus():self.clients.openWindow('/Love/')}))});
