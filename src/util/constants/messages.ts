import { User } from 'discord.js';

export const emoji = {
	cross: '<:mhcross:548390154381950976>',
	check: '<:mhdottick:610799592589623306>',
	warning: '<:mhdotwarning:610801144914247690>',
	ahh: '<:mhnotthis:703852468756283395>',
};

export const messages = {
	commands: {
		common: {
			useHelp: (prefix: string, commandName: string) =>
				`${emoji.ahh} I can help you more if you use \`${prefix}help ${commandName}\``,
			error: (error: string) => `${emoji.warning} ${error}`,
		},
		eval: {
			outputTooLong: `${emoji.warning} length of output exceeds character limit`
		},
		ping: {
			description: 'Ping, pong',
			responseLoading: ':ping_pong: Ping?',
			responseFinished: (roundtrip: Number, wsPing: Number) =>
				`:ping_pong: Pong! (Roundtrip: ${roundtrip}ms | One-way: ${wsPing}ms)`,
		},
		myLevel: {
			description: 'Show your permission level',
			response: (permLevel: Number, permLevelName: string) =>
				`Your permission level is ${permLevel} (${permLevelName})`,
		},
		tag: {
			set: {
				namePrompt: {
					start: (author: User) =>
						`${author}, what should the tag be called? (spaces allowed)`,
				},
				contentPrompt: {
					start: (author: User) =>
						`${author}, what should the tag's content be?`,
				},
				conflictingAliases: (prefix: string, conflictingTag: string) =>
					`${emoji.cross} tag name conflicts with \`${conflictingTag}\`'s aliases (use ${prefix}tag info ${conflictingTag})`,
				tagCreated: (name: string) => `${emoji.check} tag \`${name}\` created`,
				tagUpdated: (name: string) => `${emoji.check} tag \`${name}\` updated`,
			},
			show: {
				namePrompt: {
					start: (author: User) => `${author}, which tag do you want to show?`,
				},
				unknownTag: (prefix: string) =>
					`${emoji.cross} tag does not exist, check \`${prefix}tags\``,
				showTag: (content: string) => content
			},
		},
	},
};
