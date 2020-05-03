const jogo_da_velha = {
board:['','','','','','','','',''],
champion : '',
winning_sequences: [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
],
simbols:{
    options :['X', 'O'],
    turn_ndex:0,
    change: function(){
        this.turn_ndex = (this.turn_ndex === 0 ? 1: 0 )
    }
},
container_element : null,
game_over: false,

init: function(container){
    this.container_element = container;
},

make_play: function(pisition){
    if(this.game_over) 
    {
        alert('Fim de jogo.  ' + this.champion + ' GANHOOOUUUUUUU !!!!!!!');
       return false;
    };

    if(this.board[pisition] === ''){
        this.board[pisition] = this.simbols.options[this.simbols.turn_ndex];
        this.draw();
        let  index_sequence = this.check_winning_sequences(this.simbols.options[this.simbols.turn_ndex])
        this.simbols.change();
    }
},

check_winning_sequences: function(simbol){
   for(i in this.winning_sequences){
       if(this.board [this.winning_sequences[i][0]] === simbol && 
          this.board [this.winning_sequences[i][1]] === simbol &&
          this.board [this.winning_sequences[i][2]] === simbol){
              this.game_over = true;
              this.champion = simbol;
              alert('Fim de jogo.  ' + simbol + ' GANHOOOUUUUUUU !!!!!!!');
          }
   }
},

draw: function(){

    let content = '';

    for (i in this.board) {
       content += '<div onclick="jogo_da_velha.make_play('+ i +')">'+ this.board[i] +'</div>'        
    }

    this.container_element.innerHTML = content;
}

};