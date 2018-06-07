/*
 * 💥 Nuketube main script
 * Copyright 2018 @ guicheffer.me
 *
 * Plugin for chrome/firefox which removes all the elements from the page and let only the youtube video tag plays
 *
*/

const urlRegex = /^https?:\/\/(?:[^./?#]+\.)?youtube\.com/
const initialize = (domContent) => {
  console.log(`I received the following DOM content:\n ${domContent}`)
}

chrome.browserAction.onClicked.addListener((tab) => {
  if (urlRegex.test(tab.url)) {
    chrome.tabs.executeScript({
      file: './lib/content.js'
    }) ;
  }
})
