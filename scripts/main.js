/*
//Dont distribute without permission
//MADE BY Korean SL
//discord : SL357#1860
//yt : https://www.youtube.com/channel/UC4QoASkshclcoI213KoWoxw

//개인톡 : https://open.kakao.com/o/sOcBMAQc
//채팅방 : https://open.kakao.com/o/gYcpPn6d
*/ 
function tag(player, tag){let arr = [];tag.forEach(x => arr.push(player.hasTag(x)));return arr.includes(true)};import { world, system } from "@minecraft/server";system.events.beforeWatchdogTerminate.subscribe(e => e.cancel = true);let team = ["team:none","team:red","team:blue","team:green","team:yellow","team:aqua","team:white","team:pink","team:gray"];let color = ["","§c","§9","§a","§e","§b","§f","§d","§7"];world.events.tick.subscribe(()=>{for(let player of world.getPlayers()){try{if(tag(player, team)==false)player.addTag("team:none");else if(tag(player, ["team:red","team:blue","team:green","team:yellow","team:aqua","team:white","team:pink","team:gray"])==true)player.removeTag("team:none");}catch{};for(let i = 0; i<team.length; i++)if(player.hasTag(team[i]))player.nameTag = "§f[ " + color[i]+team[i].slice(5) + "§f ] " + player.name}});world.events.beforeChat.subscribe(data => {if(data.message)for(let i = 0; i<team.length; i++)if(data.sender.hasTag(team[i])){data.cancel = true;world.getDimension("overworld").runCommand(`tellraw @a {"rawtext":[{"text":"§f[ ${color[i]}${team[i].slice(5)}§f ] ${data.sender.name} > ${data.message}"}]}`)}});world.events.tick.subscribe(() => {for(let player of world.getDimension("overworld").getPlayers())if(player.hasTag("team:reset")){for(let i = 0; i<["team:red","team:blue","team:green","team:yellow","team:aqua","team:white","team:pink","team:gray"].length; i++)player.removeTag(["team:red","team:blue","team:green","team:yellow","team:aqua","team:white","team:pink","team:gray"][i]);player.removeTag("team:reset")}})
