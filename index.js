function _0x23f8(_0x231375,_0x52b75a){const _0x553a74=_0x553a();return _0x23f8=function(_0x23f854,_0x245585){_0x23f854=_0x23f854-0x155;let _0x53dba2=_0x553a74[_0x23f854];return _0x53dba2;},_0x23f8(_0x231375,_0x52b75a);}const _0x2278aa=_0x23f8;(function(_0x3536eb,_0x486cc9){const _0x463511=_0x23f8,_0x4cef74=_0x3536eb();while(!![]){try{const _0x54cf3c=-parseInt(_0x463511(0x19b))/0x1*(-parseInt(_0x463511(0x170))/0x2)+parseInt(_0x463511(0x15f))/0x3+parseInt(_0x463511(0x190))/0x4+parseInt(_0x463511(0x180))/0x5+-parseInt(_0x463511(0x192))/0x6*(-parseInt(_0x463511(0x1a1))/0x7)+parseInt(_0x463511(0x17b))/0x8*(parseInt(_0x463511(0x182))/0x9)+-parseInt(_0x463511(0x164))/0xa*(parseInt(_0x463511(0x189))/0xb);if(_0x54cf3c===_0x486cc9)break;else _0x4cef74['push'](_0x4cef74['shift']());}catch(_0x4c9406){_0x4cef74['push'](_0x4cef74['shift']());}}}(_0x553a,0x8d648),require(_0x2278aa(0x17d)));const {default:makeWASocket,DisconnectReason,useSingleFileAuthState,fetchLatestBaileysVersion,delay,jidNormalizedUser,makeWALegacySocket,useSingleFileLegacyAuthState,DEFAULT_CONNECTION_CONFIG,DEFAULT_LEGACY_CONNECTION_CONFIG}=require('@adiwajshing/baileys'),fs=require('fs'),util=require(_0x2278aa(0x163)),chalk=require(_0x2278aa(0x19a)),pino=require('pino'),yargs=require(_0x2278aa(0x19d)),path=require(_0x2278aa(0x194)),{Boom}=require('@hapi/boom'),{Collection,Simple,Store}=require('./lib'),{serialize,WAConnection}=Simple,Commands=new Collection();Commands[_0x2278aa(0x15d)]=prefa,global[_0x2278aa(0x156)]=(_0x4a2f05,_0x2486c1='/',_0x51d446={},_0x26fa6a)=>(_0x4a2f05 in global[_0x2278aa(0x188)]?global['APIs'][_0x4a2f05]:_0x4a2f05)+_0x2486c1+(_0x51d446||_0x26fa6a?'?'+new URLSearchParams(Object[_0x2278aa(0x19e)]({..._0x51d446,..._0x26fa6a?{[_0x26fa6a]:global[_0x2278aa(0x1a0)][_0x4a2f05 in global[_0x2278aa(0x188)]?global[_0x2278aa(0x188)][_0x4a2f05]:_0x4a2f05]}:{}})):''),global['opts']=new Object(yargs(process['argv'][_0x2278aa(0x191)](0x2))['exitProcess'](![])['parse']());const {state,saveState}=global[_0x2278aa(0x184)][_0x2278aa(0x169)]?useSingleFileLegacyAuthState('./'+sessionName[_0x2278aa(0x169)]):useSingleFileAuthState('./'+sessionName[_0x2278aa(0x171)]),readCommands=()=>{const _0x17b094=_0x2278aa;let _0x4e0aac=path[_0x17b094(0x167)](__dirname,_0x17b094(0x17c)),_0x5e61b3=fs[_0x17b094(0x1a2)](_0x4e0aac),_0x59ec0d={};try{_0x5e61b3[_0x17b094(0x183)](async _0x546c26=>{const _0x5a6cf8=_0x17b094;let _0x51ec6e=_0x546c26[_0x5a6cf8(0x185)]();Commands[_0x5a6cf8(0x177)]=_0x5e61b3[_0x5a6cf8(0x195)](_0x3f9277=>_0x3f9277!=='_')[_0x5a6cf8(0x19c)](_0x1ea479=>_0x1ea479),_0x59ec0d[_0x51ec6e]=[];let _0x133912=fs[_0x5a6cf8(0x1a2)](_0x4e0aac+'/'+_0x546c26)[_0x5a6cf8(0x195)](_0x3a05bc=>_0x3a05bc[_0x5a6cf8(0x17a)](_0x5a6cf8(0x158)));console[_0x5a6cf8(0x157)](_0x133912);for(const _0x196a46 of _0x133912){const _0x5bbaee=require(_0x4e0aac+'/'+_0x546c26+'/'+_0x196a46);_0x59ec0d[_0x51ec6e][_0x5a6cf8(0x178)](_0x5bbaee),Commands[_0x5a6cf8(0x17e)](_0x5bbaee[_0x5a6cf8(0x19f)],_0x5bbaee),delay(0x64),global['reloadFile'](_0x4e0aac+'/'+_0x546c26+'/'+_0x196a46);}}),Commands[_0x17b094(0x18d)]=_0x59ec0d;}catch(_0x5f1d2e){console['error'](_0x5f1d2e);}},connect=async()=>{const _0x3c21ff=_0x2278aa;await readCommands();let {version:_0x44d404,isLatest:_0x4d0e8e}=await fetchLatestBaileysVersion(),_0x2e4792={'printQRInTerminal':!![],'logger':pino({'level':_0x3c21ff(0x166)}),'browser':[_0x3c21ff(0x16e),'Safari','1.0.0'],'auth':state,'version':[0x2,0x8a2,0x9]};const _0x20ba96=new WAConnection(global[_0x3c21ff(0x184)]['legacy']?makeWALegacySocket(_0x2e4792):makeWASocket(_0x2e4792));global[_0x3c21ff(0x162)]=Store[_0x3c21ff(0x172)](_0x20ba96),_0x20ba96['ev']['on'](_0x3c21ff(0x176),saveState),_0x20ba96['ev']['on']('connection.update',async _0x46535d=>{const _0x17af78=_0x3c21ff;_0x46535d[_0x17af78(0x161)]==_0x17af78(0x15a)&&_0x20ba96[_0x17af78(0x177)]=='legacy'&&(_0x20ba96[_0x17af78(0x16c)]={'id':_0x20ba96[_0x17af78(0x173)][_0x17af78(0x169)][_0x17af78(0x16c)]['id'],'jid':_0x20ba96[_0x17af78(0x173)][_0x17af78(0x169)][_0x17af78(0x16c)]['id'],'name':_0x20ba96[_0x17af78(0x173)][_0x17af78(0x169)]['user'][_0x17af78(0x19f)]});const {lastDisconnect:_0x3a6f08,connection:_0xef5558}=_0x46535d;_0xef5558&&console['info'](_0x17af78(0x1a4)+_0xef5558);if(_0xef5558=='close'){let _0x3f1a41=new Boom(_0x3a6f08?.['error'])?.[_0x17af78(0x155)][_0x17af78(0x1a3)];if(_0x3f1a41===DisconnectReason[_0x17af78(0x168)])console[_0x17af78(0x157)](_0x17af78(0x15e)),_0x20ba96[_0x17af78(0x16a)]();else{if(_0x3f1a41===DisconnectReason[_0x17af78(0x198)])console[_0x17af78(0x157)](_0x17af78(0x15b)),connect();else{if(_0x3f1a41===DisconnectReason[_0x17af78(0x17f)])console[_0x17af78(0x157)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),connect();else{if(_0x3f1a41===DisconnectReason['connectionReplaced'])console[_0x17af78(0x157)](_0x17af78(0x193)),_0x20ba96[_0x17af78(0x16a)]();else{if(_0x3f1a41===DisconnectReason[_0x17af78(0x174)])console[_0x17af78(0x157)](_0x17af78(0x18e)),process[_0x17af78(0x181)]();else{if(_0x3f1a41===DisconnectReason[_0x17af78(0x199)])console[_0x17af78(0x157)](_0x17af78(0x196)),connect();else{if(_0x3f1a41===DisconnectReason[_0x17af78(0x186)])console[_0x17af78(0x157)](_0x17af78(0x159)),connect();else _0x20ba96[_0x17af78(0x15c)](_0x17af78(0x18f)+_0x3f1a41+'|'+_0xef5558);}}}}}}}}),_0x20ba96['ev']['on'](_0x3c21ff(0x160),async _0x53770a=>{const _0x1ade6f=_0x3c21ff;m=serialize(_0x20ba96,_0x53770a[_0x1ade6f(0x179)][0x0]);if(!m[_0x1ade6f(0x18c)])return;if(m[_0x1ade6f(0x16b)]&&m[_0x1ade6f(0x16b)][_0x1ade6f(0x187)]==_0x1ade6f(0x175))return;if(m[_0x1ade6f(0x16b)]['id'][_0x1ade6f(0x18a)](_0x1ade6f(0x165))&&m['key']['id'][_0x1ade6f(0x18b)]==0x10)return;require(_0x1ade6f(0x17c))(_0x20ba96,m,Commands,_0x53770a);});if(_0x20ba96[_0x3c21ff(0x16c)]&&_0x20ba96['user']?.['id'])_0x20ba96[_0x3c21ff(0x16c)][_0x3c21ff(0x16d)]=jidNormalizedUser(_0x20ba96[_0x3c21ff(0x16c)]?.['id']);_0x20ba96[_0x3c21ff(0x197)]=_0x20ba96[_0x3c21ff(0x177)]==_0x3c21ff(0x169)?DEFAULT_LEGACY_CONNECTION_CONFIG[_0x3c21ff(0x197)][_0x3c21ff(0x16f)]({}):DEFAULT_CONNECTION_CONFIG[_0x3c21ff(0x197)][_0x3c21ff(0x16f)]({});};connect();function _0x553a(){const _0xaf90cf=['exit','144pbXMTj','forEach','opts','toLowerCase','timedOut','remoteJid','APIs','38009675xPShMY','startsWith','length','message','list','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','Unknown\x20DisconnectReason:\x20','3212636BdWQlX','slice','6WvzigY','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','path','filter','Restart\x20Required,\x20Restarting...','logger','connectionClosed','restartRequired','chalk','6ckHUSY','map','yargs','entries','name','APIKeys','8082508VzdVwH','readdirSync','statusCode','Connection\x20Status\x20:\x20','output','api','log','.js','Connection\x20TimedOut,\x20Reconnecting...','open','Connection\x20closed,\x20reconnecting....','end','prefix','Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','1054056fOuffP','messages.upsert','connection','Store','util','10kjiLAO','BAE5','silent','join','badSession','legacy','logout','key','user','jid','SUB\x20DRIPS\x20OFC','child','288918vXdfmK','multi','bind','state','loggedOut','status@broadcast','creds.update','type','push','messages','endsWith','130736BZYneC','./zimbot','./drips','set','connectionLost','2985940yscQst'];_0x553a=function(){return _0xaf90cf;};return _0x553a();}