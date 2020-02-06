#
# Executes commands at the start of an interactive session.
#
# Authors:
#   Sorin Ionescu <sorin.ionescu@gmail.com>
#


# Source Prezto.
if [[ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

export KEYTIMEOUT=1
export ANSIWEATHERRC=~/.ansiweatherrc

###### Source zplug ######
source ~/.zplug/init.zsh

zplug "agkozak/zsh-z"
zplug "softmoth/zsh-vim-mode"

# defer means to load this plugin after all the other plugins
zplug "zdharma/fast-syntax-highlighting", defer:2

zplug load --verbose

####### END ZPLUG #######

###### zsh-vim-mode ######

unset MODE_CURSOR_DEFAULT
MODE_CURSOR_VICMD="green block"
MODE_CURSOR_VIINS="#20d08a blinking bar"
MODE_CURSOR_SEARCH="#ff00ff steady underline"

export GIT_EDITOR=vim

# Customize to your needs...
######## VI Mode ########
bindkey -v

######## Aliases ########
alias ..='cd ..'
alias ...='cd ../../..'
alias ....='cd ../../../..'

alias l='ls -l'
alias ll='ls -al'

alias sz='source ~/.zshrc'
alias zrc="vi ~/.zshrc"

alias wet='ansiweather'
alias wetF='ansiweather -F'
alias wetf='ansiweather -f'
alias weth='ansiweather -l "94086,US"'
alias wethF='ansiweather -l "94086,US" -F'
alias wethf='ansiweather -l "94086,US" -f'


# Git Aliases
alias glgg="git log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all"
alias gpull='git pull'
alias gpom='git pull origin master'
alias gmc='git merge --continue'
alias grmb='git removed-branches'

# Yarn Aliases
alias y='yarn'
alias ya='yarn add'
alias yag='yarn global add'
alias yad='yarn add --dev' 
alias yr='yarn run'
alias yup='yarn upgrade'
alias yrm='yarn remove'

# NPM Alises
alias nr='npm run'
alias ni='npm install'
alias nu='npm uninstall'
alias nis='npm install -S'
alias nid='npm install -D'


. $HOME/.asdf/asdf.sh

. $HOME/.asdf/completions/asdf.bash

  # Set Spaceship ZSH as a prompt
  autoload -U promptinit; promptinit
  prompt spaceship

export PATH="$(yarn global bin):$PATH"
