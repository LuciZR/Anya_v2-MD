const Config = require('../../config');
const { anya, commands, Bot, UI, tiny, dayToday, totalUsers, formatRuntime, getMemoryInfo, rules, fancy10, fancy13, fancy32, pickRandom, getBuffer } = require('../lib');

//༺─────────────────────────────────────༻

anya({
        name: "alive",
        alias: ['hey', 'hi'], 
        react: "👋🏻",
        category: "core",
        desc: "Bot will say it's alive",
        filename: __filename
    },
    async (anyaV2, pika, { prefix }) => {
        const bot = await Bot.findOne({ id: 'anyabot' });
        const os = require('os');
        const { commands } = require('../lib');
        const caption = `\`\`\`
${Config.themeemoji} ── ✦ ──『✙ Alive ✙』── ✦ ── ${Config.themeemoji}
\`\`\`
> 📅 ${tiny('Date Today')} : ${dayToday().date}
> ⌚ ${tiny('Time Now')} : ${dayToday().time}
\`\`\`
✦» 𝚄𝚜𝚎𝚛 : ${pika.pushName}
✦» 𝙱𝚘𝚝 : ${Config.botname}
✦» 𝙿𝚛𝚎𝚏𝚒𝚡 : ${prefix}
✦» 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../../package.json').version}
✦» 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
✦» 𝙷𝚘𝚜𝚝 : ${os.hostname()}
✦» 𝙾𝚠𝚗𝚎𝚛 : ${Config.ownername}
✦» 𝙼𝚘𝚍𝚎 : ${bot.worktype}
✦» 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
✦» 𝚄𝚜𝚎𝚛𝚜 : ${await totalUsers()}
✦» 𝚄𝚙𝚝𝚒𝚖𝚎 : ${formatRuntime(process.uptime())}
✦» 𝙼𝚎𝚖 : ${getMemoryInfo().usedMemory}/${getMemoryInfo().totalMemory}\`\`\`

> ☎️ *Cᴏɴᴛᴀᴄᴛ :* https://wa.me/${Config.ownernumber}?text=Hello Luci Sir I Need Help..
> 💻 *Sᴏᴜʀᴄᴇ Cᴏᴅᴇ :* https://github.com/LuciZR/ZR-MD
> 🔮 *Public Group :* https://whatsapp.com/channel/0029Va9S1ZW17En4Yh6hz63R`;

const footText = `*R𝚎𝚙𝚕𝚢 A N𝚞𝚖𝚋𝚎𝚛 T𝚘 G𝚎𝚝:*
   𝟭 𝗔𝗹𝗹𝗺𝗲𝗻𝘂
   𝟮 𝗠𝗲𝗻𝘂𝗹𝗶𝘀𝘁
_ID: QA01_`;

    const ui = await UI.findOne({ id: "userInterface" }) || (await new UI({ id: "userInterface" }).save());
    if (ui.alive === 1) return pika.reply(caption.trim());
    else if (ui.alive === 2) return await anyaV2.sendMessage(pika.chat, {
        image: Config.image_2,
        caption: `${caption.trim()}\n\n${footText}`
    }, { quoted: pika });
    else if (ui.alive === 3) return await anyaV2.sendMessage(pika.chat, {
        text: `${caption.trim()}\n\n${footText}`,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: 'Here\'s the full list of my commands darling',
                thumbnailUrl: Config.imageUrl,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.alive === 4) return await anyaV2.sendMessage(pika.chat, {
        video: Config.aliveMedia,
        caption: `${caption.trim()}\n\n${footText}`
    }, { quoted: pika });
    else if (ui.alive === 5) return await anyaV2.sendMessage(pika.chat, {
        video: Config.aliveMedia,
        caption: `${caption.trim()}\n\n${footText}`,
        gifPlayback: true
    }, { quoted: pika });
    else if (ui.alive === 6) return await anyaV2.relayMessage(pika.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: '10000000000',
            requestFrom: pika.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: `${caption.trim()}\n\n${footText}`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    }, { quoted: pika });
    else if (ui.alive === 7) return await anyaV2.sendMessage(pika.chat, {
        document: {
            url: Config.imageUrl
        },
        caption: `${caption.trim()}\n\n${footText}`,
        mimetype: 'application/zip',
        fileName: Config.ownername,
        fileLength: "99999999999",
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: Config.ownername,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.alive === 8) return await anyaV2.sendMessage(pika.chat, {
        image: Config.image_2,
        caption: `${caption.trim()}\n\n${footText}`,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: Config.ownername,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.alive === 9) return await anyaV2.sendMessage(pika.chat, {
        video: Config.aliveMedia,
        gifPlayback: true,
        caption: `${caption.trim()}\n\n${footText}`,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: Config.ownername,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.alive === 10) return await anyaV2.sendMessage(pika.chat, {
        video: Config.aliveMedia,
        caption: `${caption.trim()}\n\n${footText}`,
        gifPlayback: true,        
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [pika.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: Config.botname,
                newsletterJid: "120363193293157965@newsletter",
            },
            externalAdReply: {
                showAdAttribution: true,
                title: Config.ownername,
                body: Config.botname,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
/*
    else if (ui.alive === 10) return await anyaV2.sendButtonText(pika.chat, {
        text: caption.trim(),
        footer: Config.footer,
        buttons: [
            {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Instagram 🦋\",\"url\":\"https://instagram.com/${Config.instagramId}\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"WhatsApp Channel 🔮\",\"url\":\"https://whatsapp.com/channel/0029Va9S1ZW17En4Yh6hz63R\",\"merchant_url\":\"https://www.google.com\"}"
            },
                        {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"YouTube Channel 💗\",\"url\":\"https://youtube.com/@pika_kunn\",\"merchant_url\":\"https://www.google.com\"}"
            },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Allmenu 🌟\",\"id:\"${prefix}allmenu\"}` },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Listmenu 🧾\",\"id\":\"${prefix}listmenu\"}` }
        ],
        contextInfo: {
            mentionedJid: [pika.sender], 
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363193293157965@newsletter',
                newsletterName: Config.botname,
                serverMessageId: 666
            }
        }
    }, { quoted: pika });
*/
    else if (ui.alive === 11) return await anyaV2.sendButtonImage(pika.chat, {
        image: Config.image_2,
        caption: caption.trim(),
        footer: Config.footer,
        buttons: [
            {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Instagram 🦋\",\"url\":\"https://instagram.com/${Config.instagramId}\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"WhatsApp Channel 🔮\",\"url\":\"https://whatsapp.com/channel/0029Va9S1ZW17En4Yh6hz63R\",\"merchant_url\":\"https://www.google.com\"}"
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"YouTube Channel 💗\",\"url\":\"https://zr-md.koyeb.com\",\"merchant_url\":\"https://www.google.com\"}"
            },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Allmenu 🌟\",\"id:\"${prefix}allmenu\"}` },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Listmenu 🧾\",\"id\":\"${prefix}listmenu\"}` }
        ],
        contextInfo: {
            mentionedJid: [pika.sender], 
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363193293157965@newsletter',
                newsletterName: Config.botname,
                serverMessageId: 143
            }
        }
    }, { quoted: pika });
    else if (ui.alive === 12) return await anyaV2.sendButtonVideo(pika.chat, {
        video: Config.aliveMedia,
        caption: caption.trim(),
        footer: Config.footer,
        buttons: [
            {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Instagram 🦋\",\"url\":\"https://instagram.com/${Config.instagramId}\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"WhatsApp Channel 🔮\",\"url\":\"https://whatsapp.com/channel/0029VaDIPkA6buMS9hRE7y2G\",\"merchant_url\":\"https://www.google.com\"}"
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"YouTube Channel 💗\",\"url\":\"https://youtube.com/@pika_kunn\",\"merchant_url\":\"https://www.google.com\"}"
            },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Allmenu 🌟\",\"id:\"${prefix}allmenu\"}` },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Listmenu 🧾\",\"id\":\"${prefix}listmenu\"}` }
        ],
        contextInfo: {
            mentionedJid: [pika.sender], 
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363193293157965@newsletter',
                newsletterName: Config.botname,
                serverMessageId: 143
            }
        }
    }, { quoted: pika });
    }
)

//༺─────────────────────────────────────༻

anya({
        name: "help",
        alias: ['h', 'menu', 'allmenu'],
        react: Config.themeemoji,
        category: "core",
        desc: "Bot's command panel",
        filename: __filename
    },
    async (anyaV2, pika, { args, prefix, command }) => {
        const { commands } = require('../lib');
        if (command === "help" && args.length > 0) {
            const caption = [];
            const cmd = commands.find(v => v.name === args[0].toLowerCase() || (v.alias && v.alias.includes(args[0].toLowerCase())));
            if (cmd) {
                caption.push(`*🧿 Name :* ${cmd.name}`);
                if (cmd.alias) caption.push(`*🔖 Alias :* ${cmd.alias.join(", ")}`);
                if (cmd.react) caption.push(`*🌀 React :* ${cmd.react}`);
                if (cmd.need) caption.push(`*💭 Usage :* ${cmd.need}`);
                if (cmd.category) caption.push(`*📂 Category :* ${cmd.category}`);
                caption.push(`*🕜 Cooldown :* ${cmd.cooldown} seconds`);
                if (cmd.filename) caption.push(`*📑 File :* ${cmd.filename}`);
                const i = rules(cmd.rule);
                caption.push(`*📃 Access :*
    - ${i.owner} : Owner
    - ${i.admin} : Admin
    - ${i.botAdmin} : Bot Admin
    - ${i.group} : Group Chat
    - ${i.pc} : Private Chat`,
               `*📜 Description :* ${cmd.desc}`);
                return pika.reply(caption.join("\n\n"));
            } else pika.reply(`*❌ No such plugins '${args[0]}'*`);
        } else {
            const readmore = String.fromCharCode(8206).repeat(4001);
            const bot = await Bot.findOne({ id: 'anyabot' });
            const patterns = {};
                for (const cmd of commands) {
                    if (cmd.name && !cmd.notCmd) {
                    if (!patterns[cmd.category]) patterns[cmd.category] = [];
                        patterns[cmd.category].push(`${cmd.name}${cmd.need ? "  ⌈" + cmd.need + "⌋" : ""}`);
                    }
                }

            let caption = `
*Hello, @${pika.sender.split("@")[0]}*
_I'm ${Config.botname} >> 🖤🥀_

\`🇼 🇭 🇦 🇹 🇸 🇦 🇵 🇵 - 🇧 🇴 🇹\`

> 📅 Date Today : ${dayToday().date}
> ⌚ Time Now : ${dayToday().time}

《⟡━━━━━⟪ ${fancy32(Config.ownername)} ⟫━━━━━⟡》
║╭───────────┈⟡
║│✗»𝚄𝚜𝚎𝚛 : ${pika.pushName}
║│✗»𝙱𝚘𝚝 : ${Config.botname}
║│✗»𝙿𝚛𝚎𝚏𝚒𝚡 : ${prefix}
║│✗»𝙼𝚘𝚍𝚎 : ${bot.worktype}
║│✗»𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require('../../package.json').version}
║│✗»𝙾𝚠𝚗𝚎𝚛 : ${Config.ownername}
║│✗»𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${commands.length}
║│✗»𝚄𝚜𝚎𝚛𝚜 : ${await totalUsers()}
║│✗»𝙼𝚎𝚖 : ${getMemoryInfo().usedMemory}/${getMemoryInfo().totalMemory}
║╰─────────────┈⟡
⟪⟡───────⟐⌬⟐───────⟡⟫

> *🧑🏻‍💻 :* _Type \`.information\` for my system status._
${readmore}\n`;
    for (const i in patterns) {
        caption += `╭─────────────┄┄┈•\n┠───═❮ *${i}* ❯═─┈•\n│   ╭──┈•\n`;
        for (const plugins of patterns[i]) {
            caption += `│   │➛ ${prefix + tiny(plugins)}\n`;
        }
        caption += `│   ╰───────────⦁\n╰────────────────❃\n\n`;
    }
    caption += `🎀 _Type ${prefix}listmenu for my command list._

🔖 _Type ${prefix}help <command_name> for plugin information._

*Eg: _${prefix}help nsfw_*

> ${Config.footer}`;

    const ui = await UI.findOne({ id: "userInterface" }) || (await new UI({ id: "userInterface" }).save());
    if (ui.menu === 1) return pika.reply(caption.trim(), { mentions: [pika.sender] });
    else if (ui.menu === 2) return await anyaV2.sendMessage(pika.chat, {
        image: Config.image_1,
        caption: caption.trim(),
        mentions: [pika.sender]
    }, { quoted: pika });
    else if (ui.menu === 3) return await anyaV2.sendMessage(pika.chat, {
        text: caption.trim(),
        mentions: [pika.sender],
        contextInfo: {
        mentionedJid: [pika.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: 'Here\'s the full list of my commands darling',
                thumbnailUrl: Config.imageUrl,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.menu === 4) return await anyaV2.sendMessage(pika.chat, {
        video: Config.menuMedia,
        caption: caption.trim(),
        mentions: [pika.sender]
    }, { quoted: pika });
    else if (ui.menu === 5) return await anyaV2.sendMessage(pika.chat, {
        video: Config.menuMedia,
        caption: caption.trim(),
        gifPlayback: true,
        mentions: [pika.sender]
    }, { quoted: pika });
    else if (ui.menu === 6) return await anyaV2.relayMessage(pika.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: '10000000000',
            requestFrom: pika.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: caption.trim(),
                    contextInfo: {
                        mentionedJid: [pika.sender],
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    }, { quoted: pika });
    else if (ui.menu === 7) return await anyaV2.sendMessage(pika.chat, {
        document: {
            url: Config.imageUrl
        },
        caption: caption.trim(),
        mimetype: 'application/zip',
        fileName: Config.ownername,
        fileLength: "99999999999",
        mentions: [pika.sender],
        contextInfo: {
            mentionedJid: [pika.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: Config.ownername,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.menu === 8) return await anyaV2.sendMessage(pika.chat, {
        image: Config.image_1,
        caption: caption.trim(),
        mentions: [pika.sender],
        contextInfo: {
        mentionedJid: [pika.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: Config.ownername,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.menu === 9) return await anyaV2.sendMessage(pika.chat, {
        video: Config.menuMedia,
        gifPlayback: true,
        caption: caption.trim(),
        mentions: [pika.sender],
        contextInfo: {
        mentionedJid: [pika.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: Config.botname,
                body: Config.ownername,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
    else if (ui.menu === 10) return await anyaV2.sendMessage(pika.chat, {
        video: Config.menuMedia,
        caption: caption.trim(),
        gifPlayback: true,
        mentions: [pika.sender],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [pika.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: Config.botname,
                newsletterJid: "120363193293157965@newsletter",
            },
            externalAdReply: {
                showAdAttribution: true,
                title: Config.ownername,
                body: Config.botname,
                thumbnailUrl: Config.imageUrl,
                sourceUrl: Config.socialLink,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: pika });
/*
    else if (ui.menu === 10) return await anyaV2.sendButtonText(pika.chat, {
        text: caption.trim(),
        footer: Config.footer,
        buttons: [
            {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Instagram 🦋\",\"url\":\"https://instagram.com/${Config.instagramId}\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"WhatsApp Channel 🔮\",\"url\":\"https://whatsapp.com/channel/0029VaDIPkA6buMS9hRE7y2G\",\"merchant_url\":\"https://www.google.com\"}"
            },
                        {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"YouTube Channel 💗\",\"url\":\"https://youtube.com/@pika_kunn\",\"merchant_url\":\"https://www.google.com\"}"
            },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Owner 👤\",\"id:\"${prefix}owner\"}` },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Script 🧿\",\"id\":\"${prefix}sc\"}` }
        ],
        contextInfo: {
            mentionedJid: [pika.sender], 
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363193293157965@newsletter',
                newsletterName: Config.botname,
                serverMessageId: 999
            }
        }
    }, { quoted: pika });
*/
    else if (ui.menu === 11) return await anyaV2.sendButtonImage(pika.chat, {
        image: Config.image_1,
        caption: caption.trim(),
        footer: Config.footer,
        mentions: [pika.sender],
        buttons: [
            {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Instagram 🦋\",\"url\":\"https://instagram.com/${Config.instagramId}\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"WhatsApp Channel 🔮\",\"url\":\"https://whatsapp.com/channel/0029VaDIPkA6buMS9hRE7y2G\",\"merchant_url\":\"https://www.google.com\"}"
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"YouTube Channel 💗\",\"url\":\"https://youtube.com/@pika_kunn\",\"merchant_url\":\"https://www.google.com\"}"
            },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Owner 👤\",\"id\":\"${prefix}owner\"}` },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Script 🧿\",\"id\":\"${prefix}sc\"}` }
        ],
        contextInfo: {
            mentionedJid: [pika.sender], 
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363193293157965@newsletter',
                newsletterName: Config.botname,
                serverMessageId: 6969
            }
        }
    }, { quoted: pika });
    else if (ui.menu === 12) return await anyaV2.sendButtonVideo(pika.chat, {
        video: Config.menuMedia,
        caption: caption.trim(),
        footer: Config.footer,
        mentions: [pika.sender],
        buttons: [
            {
                "name": "cta_url",
                "buttonParamsJson": `{\"display_text\":\"Instagram 🦋\",\"url\":\"https://instagram.com/${Config.instagramId}\",\"merchant_url\":\"https://www.google.com\"}`
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"WhatsApp Channel 🔮\",\"url\":\"https://whatsapp.com/channel/0029VaDIPkA6buMS9hRE7y2G\",\"merchant_url\":\"https://www.google.com\"}"
            },
            {
                "name": "cta_url",
                "buttonParamsJson": "{\"display_text\":\"YouTube Channel 💗\",\"url\":\"https://youtube.com/@pika_kunn\",\"merchant_url\":\"https://www.google.com\"}"
            },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Owner 👤\",\"id\":\"${prefix}owner\"}` },
            { "name": "quick_reply", "buttonParamsJson": `{\"display_text\":\"Script 🧿\",\"id\":\"${prefix}sc\"}` }
        ],
        contextInfo: {
            mentionedJid: [pika.sender], 
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363193293157965@newsletter',
                newsletterName: Config.botname,
                serverMessageId: 969
            }
        }
    }, { quoted: pika });
      }
    }
)

//༺─────────────────────────────────────༻

const cateData = {
  "core": {
    "desc": "Essential commands for the bot",
    "emoji": "💻"
  },
  "admins": {
    "desc": "Commands exclusively for group admins",
    "emoji": "🍜"
  },
  "ai": {
    "desc": "Special commands powered by AI",
    "emoji": "🎯"
  },
  "anime": {
    "desc": "Discover anime—because anime is love!",
    "emoji": "❤️"
  },
  "convert": {
    "desc": "Transform media into different formats",
    "emoji": "🧧"
  },
  "download": {
    "desc": "Download content from various platforms",
    "emoji": "🧩"
  },
  "general": {
    "desc": "General commands for everyone",
    "emoji": "🍁"
  },
  "textpro": {
    "desc": "Create stylish text images",
    "emoji": "❤️‍🔥"
  },
  "logomaker": {
    "desc": "Craft eye-catching logos",
    "emoji": "🌟"
  },
  "photooxy": {
    "desc": "Design stylish banners with text",
    "emoji": "🎀"
  },
  "nsfw": {
    "desc": "Commands containing explicit content",
    "emoji": "🐤"
  },
  "owner": {
    "desc": "Customization and settings for bot owners",
    "emoji": "🚀"
  },
  "religious": {
    "desc": "Commands related to religion",
    "emoji": "🛐"
  },
  "search": {
    "desc": "Search the internet with ease",
    "emoji": "💖"
  },
  "stalker": {
    "desc": "Access various types of information",
    "emoji": "🍂"
  },
  "tools": {
    "desc": "Utility tools for various purposes",
    "emoji": "🔮"
  },
  "fun": {
    "desc": "Commands for group fun purpose",
    "emoji": "💃🏻"
  },
  "games": {
    "desc": "Various digital games",
    "emoji": "🎲"
  },
  "imagemaker": {
    "desc": "Image editing presets plugins",
    "emoji": "🌄"
  }
};

anya({
        name: "listmenu",
        alias: ['menulist', 'list'],
        react: "📑",
        category: "core",
        desc: "List of the available menus",
        filename: __filename
    }, async (anyaV2, pika, { args, prefix, command }) => {
        const bot = await Bot.findOne({ id: 'anyabot' });
        const { commands } = require('../lib');
        let caption = "";
        let c = 1;
        const patterns = {};
        for (const cmd of commands) {
            if (cmd.name && !cmd.notCmd) {
                if (!patterns[cmd.category]) patterns[cmd.category] = [];
                patterns[cmd.category].push(`${cmd.name}${cmd.need ? "  ⌈" + cmd.need + "⌋" : ""}`);
            }
        }
        const symbols = pickRandom(["⭔", "❃", "❁", "✬", "⛦", "◌", "⌯", "⎔", "▢", "▣", "◈", "֍", "֎", "࿉", "۞", "⎆", "⎎"]);
        caption += `\`\`\`📆 Date : ${dayToday().date}
🕜 Time : ${dayToday().time}

╭─────────────────❃
│${symbols}╭───────────◈
│${symbols}│User : ${pika.pushName}
│${symbols}│Bot : ${Config.botname}
│${symbols}│Prefix : ${prefix}
│${symbols}│Mode : ${bot.worktype}
│${symbols}│Version : ${require('../../package.json').version}
│${symbols}│Owner : ${Config.ownername}
│${symbols}│Categories : ${Object.keys(patterns).length}
│${symbols}│Mem : ${getMemoryInfo().usedMemory}/${getMemoryInfo().totalMemory}
│${symbols}╰───────────◈
╰─────────────────❃\`\`\`

> *\`🌟 Reply A Number To Get Command List\`*\n\n`;
        const footer = `_Type *${prefix+command} <category>* to get that specific list_\n*Eg: _${prefix+command} owner_*\n\n_ID: QA20_\n> ${Config.footer}`;
        for (const i in patterns) {
            const upperCase = i.charAt(0).toUpperCase() + i.slice(1);
            const hasCate = cateData[i];
            if (args.length > 0) {
                if (args[0].toLowerCase() === i.toLowerCase()) {
                    caption += `╭──⌈ *${fancy10(upperCase)}* ⌋\n`;
                    for (const y of patterns[i]) {
                        caption += `│⊳ ${hasCate ? cateData[i].emoji : Config.themeemoji} ${prefix + y}\n`;
                    }
                    caption += `└───────────────⟢`;
                    return pika.reply(caption + `\n\n${footer}`);
                }
            } else {
                caption += `┌─ ${c++}. *${upperCase}*\n`;
                caption += `│⊳ *🏮commands :* ${patterns[i].length}\n`;
                caption += `└⊳ *🧩About :* ${fancy13(hasCate ? cateData[i].desc : "No Data Available About This Category")}\n\n`;
            }
        }
        if (args.length > 0) return pika.reply("*🍁 No Such Category Found!*");
        pika.reply(caption + footer);
    }
)
