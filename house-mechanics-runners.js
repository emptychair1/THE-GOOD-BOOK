/* The House That Remembers — Foreword mechanics adapter v2.1
   No visual mechanics live here. This adapter routes cue names to the approved executable HouseMechanics library.
*/
(()=>{
const HM=window.HouseMechanics;if(!HM)throw Error('Foreword mechanics adapter requires HouseMechanics');
const aliases=Object.freeze({DISTANCE:'distance',FALL:'fall',ORGANIC:'organic',CHANGE_REORIENT:'change',LOVE_LEAN:'love',CROSS_OUT:'crossOut',GLINT:'glint',DIGITIZE:'m4',RETURN_REGISTRATION:'registerReturn',HAND:'hand',COMPILE_INTERPRET:'compile',AGENCY_GO:'agency',ABSENCE:'absence'});
function run(name,el){if(!el)throw Error('Mechanic target required');if(name==='DIAGNOSTIC')return HM.runFullDiagnostic({targetEl:el,hostEl:el.closest('p')});const fn=aliases[name];if(fn&&typeof HM[fn]==='function')return HM[fn](el);console.warn('[HOUSE MECHANICS] no approved executable mechanic for cue',name)}
window.HouseMechanicsRunner=Object.freeze({version:'2.1-approved-library-only',run});
})();