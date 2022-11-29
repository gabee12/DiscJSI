import { Client, GatewayIntentBits, Events } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);

})