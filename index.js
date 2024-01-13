const players = ['Bernard', 'Youchi', 'Yenting', 'Angela', 'Yvonne', 'Ellen', 'Walter', 'Walter', 'Tim', 'Kevin', 'Russell']
const blackList = ['Walter', 'Tim']


//////// 在這裡寫你的答案 /////////
function removeBlacklist(players, blackList) {
  // 遍歷每一個players元素
  for (let i = 0; i < players.length; i++) {
    // 若 blackList 的元素出現於 players 的元素中，則刪除 players 的元素
    if (blackList.includes(players[i])) {
      players.splice(i, 1)
      i--
    }
  }

  // 從尾部刪除, 就不用 i--，因為沒有索引向前遞進的問題
  // for (let i = players.length - 1; i >=0; i--) {
  //   if (blackList.includes(players[i])) {
  //     players.splice(i, 1)
  //   }
  // }
  // blackList 和 players 位置對調看看(不行)
  // for (let i = 0; i < blackList.length; i++) { 
  //   if (players.includes(blackList[i])) {
  //     players.splice(i, 1)
  //     i--
  //   }   
  // }
  return players
}
console.log(removeBlacklist(players, blackList))

//////// 以下是測試程式，請勿更動 /////////
module.exports = {
  removeBlacklist,
}