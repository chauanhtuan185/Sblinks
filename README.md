# Sblinks - new experience for user in Kaia and EVM , re-thinking how to interact with Dapp directly in X

This template provides a minimal setup how to project can embedding Dapp inside X post using Twitter card component 
From that user can easily interact with Dapp directly in X 

# Setup
To enable embedding your Dapp on platforms like Twitter, you need to add the following meta tags to the index.html file. These meta tags will define how your Dapp is presented in Twitter Cards 
```html
<meta name="twitter:card" content="player" /> <!-- Type of card format used for embedding -->
<meta name="twitter:site" content="" /> <!-- Twitter handle associated with the Dapp -->
<meta name="twitter:title" content="" /> <!-- Title of the Dapp -->
<meta name="twitter:description" content="" /> <!-- Short description of the Dapp -->
<meta name="twitter:player" content="" /> <!-- Link to the Dapp -->
<meta name="twitter:player:width" content="360" />
<meta name="twitter:player:height" content="560" />
<meta name="twitter:image" content="" /> <!-- Preview image for the card -->
<meta property="og:url" content="" />
<meta property="og:title" content="test" />
<meta property="og:description" content="test" />
<meta property="og:image" content="https://app.ekubo.org/pwa-512x512.png" />
```
