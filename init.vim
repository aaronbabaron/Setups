call plug#begin()

Plug 'machakann/vim-sandwich'
Plug 'asvetliakov/vim-easymotion'
Plug 'bkad/CamelCaseMotion'
Plug 'tpope/vim-repeat'

" Initialize plugin system
call plug#end()

runtime macros/sandwich/keymap/surround.vim
if exists ('g:vscode')
  xmap gc <Plug>VSCodeCommentary
  nmap gc <Plug>VSCodeCommentary
  omap gc <Plug>VSCodeCommentary
  nmap gcc <Plug>VSCodeCommentaryLine
endif

map <space> <Plug>(easymotion-prefix)
" Gif config
map  / <Plug>(easymotion-sn)
xmap / <Plug>(easymotion-sn)
omap / <Plug>(easymotion-sn)

" Gif config
map <space>l <Plug>(easymotion-lineforward)
map <space>j <Plug>(easymotion-j)
map <space>k <Plug>(easymotion-k)
map <space>h <Plug>(easymotion-linebackward)

let g:EasyMotion_startofline = 0 " keep cursor column when JK motion
let g:EasyMotion_smartcase = 1

" CamelCaseMotion replacement of regular movement
map <silent> <Leader>w <Plug>CamelCaseMotion_w
map <silent> <Leader>b <Plug>CamelCaseMotion_b
map <silent> <Leader>e <Plug>CamelCaseMotion_e
map <silent> <Leader>ge <Plug>CamelCaseMotion_ge

" iw ib ie for visual mode
omap <silent> <Leader>iw <Plug>CamelCaseMotion_iw
xmap <silent> <Leader>iw <Plug>CamelCaseMotion_iw
omap <silent> <Leader>ib <Plug>CamelCaseMotion_ib
xmap <silent> <Leader>ib <Plug>CamelCaseMotion_ib
omap <silent> <Leader>ie <Plug>CamelCaseMotion_ie
xmap <silent> <Leader>ie <Plug>CamelCaseMotion_ie

" Insert mode remaps 
imap <silent> <S-Left> <C-o><Plug>CamelCaseMotion_b
imap <silent> <S-Right> <C-o><Plug>CamelCaseMotion_w

" Use ctrl-[hjkl] to select the active split!
nnoremap <silent> <c-k> :<C-u>call VSCodeNotify('workbench.action.focusAboveGroup')<CR>
xnoremap <silent> <c-k> :<C-u>call VSCodeNotify('workbench.action.focusAboveGroup')<CR>
nnoremap <silent> <c-j> :<C-u>call VSCodeNotify('workbench.action.focusBelowGroup')<CR>
xnoremap <silent> <c-j> :<C-u>call VSCodeNotify('workbench.action.focusBelowGroup')<CR>
nnoremap <silent> <c-h> :<C-u>call VSCodeNotify('workbench.action.focusLeftGroup')<CR>
xnoremap <silent> <c-h> :<C-u>call VSCodeNotify('workbench.action.focusLeftGroup')<CR>
nnoremap <silent> <c-l> :<C-u>call VSCodeNotify('workbench.action.focusRightGroup')<CR>
xnoremap <silent> <c-l> :<C-u>call VSCodeNotify('workbench.action.focusRightGroup')<CR>

set expandtab
set tabstop=2
set softtabstop=2
set shiftwidth=2
set clipboard+=unnamedplus
