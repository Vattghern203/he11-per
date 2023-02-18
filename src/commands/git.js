const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()
const { BOT_COLOR } = process.env

const embed = new EmbedBuilder()
    .setColor(BOT_COLOR)
    .setTitle('Git commands')
    .setURL('https://git-scm.com/docs')
    .setDescription('Some useful git commands')
    .setThumbnail('https://git-scm.com/images/logo@2x.png')
    .addFields(
        // Break line
        { name: '\u200B', value: '\u200b'},

        { name: '$ git init [project-name]', value: 'Create a new local repository with the specified name', inline: true},
		{ name: '$ git clone [url]', value: 'Clones a repository and all the change history', inline: true },
		{ name: '$ git stash', value: 'Stash the changes in a dirty working directory away', inline: true },

		{ name: '\u200B', value: '\u200B' },

		{ name: '$ git status', value: 'Show the working tree status', inline: true },
		{ name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento', inline: true },
		{ name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão', inline: true },

		{ name: '\u200B', value: '\u200B' },

		{ name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
		{ name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
		{ name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diretório de trabalho', inline: true },

		{ name: '\u200B', value: '\u200B' },

		{ name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
		{ name: '$ git push [alias] [branch]', value: 'Envia todos os commits do branch local para o GitHub', inline: true },
		{ name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças', inline: true },

    )

module.exports = {
 
    data: new SlashCommandBuilder()
            .setName("git")
            .setDescription("returns a list of git commands."),
        
    async execute(interaction) {
    
        await interaction.reply({ embeds: [embed]})
    }
}