const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: []
    };
  },
  computed: {
    monsterBarStyles() {
      if(this.monsterHealth <= 0) {
        return { width: 0 }
      } else {
        return { width: this.monsterHealth + '%' }
      }
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: 0 }
      } else {
        return { width: this.playerHealth + '%' }
      }
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0 ) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    }
  },
  methods: {
    startNewGame() {
      this.winner = null;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.battleLog = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLogMessage('player', 'hit', attackValue);
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'hit', attackValue);
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      this.addLogMessage('player', 'special hit', attackValue);
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.attackPlayer();
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
        this.addLogMessage('player', 'heal', 100 - this.playerHealth);
      } else {
        this.playerHealth += healValue;
        this.addLogMessage('player', 'heal', healValue);
      }
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.battleLog.unshift( {
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    },
    logClasses(log) {
      return {
        'log--player': log.actionBy === 'player',
        'log--monster': log.actionBy === 'monster'
      }
    }
  }
});

app.mount('#game');