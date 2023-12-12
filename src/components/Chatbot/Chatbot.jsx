import React, { useEffect } from 'react'
import { boticon } from '../../assets'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Kindly pose your queries here",
      botConversationDescription: "This is the Nayepankh Chatbot",
      botId: "db4d899e-1f0e-4dc0-a800-e50d9de8b2b5",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "db4d899e-1f0e-4dc0-a800-e50d9de8b2b5",
      webhookId: "0b22d391-2aea-47b8-8a58-8c6733749348",
      lazySocket: true,
      themeName: "prism",
      botName: "Nayepankh Bot",
      avatarUrl: boticon,
      phoneNumber: "+91- 8318500748",
      emailAddress: "career@nayepankh.com",
      website: "https://nayepankh.com/",
      stylesheet: "https://webchat-styler-css.botpress.app/prod/db163b47-e6e5-4386-9117-51f9b41eb5cf/v52932/style.css",
      frontendVersion: "v1",
      showBotInfoPage: true,
      showPoweredBy: false,
      theme: "prism",
      themeColor: "#2563eb"
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot