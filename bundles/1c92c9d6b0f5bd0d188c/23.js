(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(2),o=n.n(a),s=n(43),r=n.n(s),l=n(46),i=n(45),c=n.n(i),m=n(44),u=n(53),d=n(50),g=n(49),h=n(94),p=n(178),C=n(57);class b extends r.a.Component{constructor(e){super(e),o()(this,"updateCurrentRoom",async e=>{const t=p.a.get();let n;try{n=await t.getStats()}catch{return}let a=null;e&&(a=e.name);const o=t.crawlingRooms(),s=o.crawlingRooms.size,r=o.totalRooms.size;this.setState({eventIndexSize:n.size,eventCount:n.eventCount,crawlingRoomsCount:s,roomCount:r,currentRoom:a})}),o()(this,"_onDisable",async()=>{g.a.createTrackedDialogAsync("Disable message search","Disable message search",n.e(22).then(n.bind(null,1116)),null,null,!1,!0)}),o()(this,"_onCrawlerSleepTimeChange",e=>{this.setState({crawlerSleepTime:e.target.value}),d.a.setValue("crawlerSleepTime",null,C.a.DEVICE,e.target.value)}),this.state={eventIndexSize:0,eventCount:0,crawlingRoomsCount:0,roomCount:0,currentRoom:null,crawlerSleepTime:d.a.getValueAt(C.a.DEVICE,"crawlerSleepTime")}}componentWillUnmount(){const e=p.a.get();null!==e&&e.removeListener("changedCheckpoint",this.updateCurrentRoom)}async componentDidMount(){let e=0,t=0,n=0,a=0,o=null;const s=p.a.get();if(null!==s){s.on("changedCheckpoint",this.updateCurrentRoom);try{const t=await s.getStats();e=t.size,a=t.eventCount}catch{}const r=s.crawlingRooms();t=r.crawlingRooms.size,n=r.totalRooms.size;const l=s.currentRoom();l&&(o=l.name)}this.setState({eventIndexSize:e,eventCount:a,crawlingRoomsCount:t,roomCount:n,currentRoom:o})}render(){const e=u.a.get().brand,t=l.getComponent("views.elements.Field");let n;n=null===this.state.currentRoom?Object(m.a)("Not currently indexing messages for any room."):Object(m.a)("Currently indexing: %(currentRoom)s",{currentRoom:this.state.currentRoom});const a=Math.max(0,this.state.roomCount-this.state.crawlingRoomsCount),o=r.a.createElement("div",null,Object(m.a)("%(brand)s is securely caching encrypted messages locally for them to appear in search results:",{brand:e}),r.a.createElement("div",{className:"mx_SettingsTab_subsectionText"},n,r.a.createElement("br",null),Object(m.a)("Space used:")," ",Object(h.a)(this.state.eventIndexSize,0),r.a.createElement("br",null),Object(m.a)("Indexed messages:")," ",Object(h.d)(this.state.eventCount),r.a.createElement("br",null),Object(m.a)("Indexed rooms:")," ",Object(m.a)("%(doneRooms)s out of %(totalRooms)s",{doneRooms:Object(h.d)(a),totalRooms:Object(h.d)(this.state.roomCount)})," ",r.a.createElement("br",null),r.a.createElement(t,{label:Object(m.a)("Message downloading sleep time(ms)"),type:"number",value:this.state.crawlerSleepTime,onChange:this._onCrawlerSleepTimeChange}))),s=l.getComponent("views.dialogs.BaseDialog"),i=l.getComponent("views.elements.DialogButtons");return r.a.createElement(s,{className:"mx_ManageEventIndexDialog",onFinished:this.props.onFinished,title:Object(m.a)("Message search")},o,r.a.createElement(i,{primaryButton:Object(m.a)("Done"),onPrimaryButtonClick:this.props.onFinished,primaryButtonClass:"primary",cancelButton:Object(m.a)("Disable"),onCancel:this._onDisable,cancelButtonClass:"danger"}))}}o()(b,"propTypes",{onFinished:c.a.func.isRequired})}}]);
//# sourceMappingURL=23.js.map