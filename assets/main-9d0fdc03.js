import{b as a}from"./init-7741dda9.js";let o;WA.onInit().then(async()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),console.log("Julia test"),WA.room.onEnterLayer("floor").subscribe(()=>{console.log("Entered to floor"),WA.room.hideLayer("roof"),WA.room.hideLayer("walls-bg-front"),WA.room.hideLayer("sign")}),WA.room.onLeaveLayer("floor").subscribe(()=>{WA.room.showLayer("roof"),WA.room.showLayer("walls-bg-front"),WA.room.showLayer("facade-furniture-bg"),WA.room.showLayer("sign")}),WA.room.onEnterLayer("floor1").subscribe(()=>{WA.room.hideLayer("roof1"),WA.room.hideLayer("walls-bg-front1"),WA.room.hideLayer("sign1")}),WA.room.onLeaveLayer("floor1").subscribe(()=>{WA.room.showLayer("roof1"),WA.room.showLayer("walls-bg-front1"),WA.room.showLayer("facade-furniture-bg1"),WA.room.showLayer("sign1")}),WA.room.onEnterLayer("floor2").subscribe(()=>{WA.room.hideLayer("roof2"),WA.room.hideLayer("walls-bg-front2"),WA.room.hideLayer("sign2")}),WA.room.onLeaveLayer("floor2").subscribe(()=>{WA.room.showLayer("roof2"),WA.room.showLayer("walls-bg-front2"),WA.room.showLayer("facade-furniture-bg2"),WA.room.showLayer("sign2")}),WA.room.onEnterLayer("rooms_floor").subscribe(()=>{WA.room.hideLayer("facade-furniture-fg"),WA.room.hideLayer("facade"),WA.room.hideLayer("facade-furniture-bg")}),WA.room.onLeaveLayer("rooms_floor").subscribe(()=>{WA.room.showLayer("facade-furniture-fg"),WA.room.showLayer("facade"),WA.room.showLayer("facade-furniture-bg")}),WA.room.onEnterLayer("message-1").subscribe(()=>{o=WA.ui.openPopup("Addon1Pop","Library",[])}),WA.room.onLeaveLayer("message-1").subscribe(e),WA.room.onEnterLayer("message-3").subscribe(()=>{o=WA.ui.openPopup("Addon3Pop","Ocean",[])}),WA.room.onLeaveLayer("message-3").subscribe(e),WA.room.onEnterLayer("message-2").subscribe(()=>{o=WA.ui.openPopup("Addon2Pop","Playground",[])}),WA.room.onLeaveLayer("message-2").subscribe(e),WA.room.onEnterLayer("message-4").subscribe(()=>{o=WA.ui.openPopup("Addon4Pop","Amphitheater",[])}),WA.room.onLeaveLayer("message-4").subscribe(e),WA.room.onEnterLayer("message-5").subscribe(()=>{o=WA.ui.openPopup("Addon5Pop","Science Cluster",[])}),WA.room.onLeaveLayer("message-5").subscribe(e),WA.room.onEnterLayer("message-6").subscribe(()=>{o=WA.ui.openPopup("Addon6Pop","Club House",[])}),WA.room.onLeaveLayer("message-6").subscribe(e),WA.room.onEnterLayer("clockZone").subscribe(()=>{const r=new Date,s=r.getHours()+":"+r.getMinutes();o=WA.ui.openPopup("clockPopup","It's "+s,[])}),WA.room.onLeaveLayer("clockZone").subscribe(e),a().then(()=>{console.log("Scripting API Extra ready")}).catch(r=>console.error(r))}).catch(r=>console.error(r));function e(){o!==void 0&&(o.close(),o=void 0)}