import { GET_PLAYERS } from './consts';

export default {
  async [GET_PLAYERS]({ commit }) {
    const players = await [
      {
        id: '1',
        name: 'Luke Skywalker',
      },
      {
        id: '2',
        name: 'C-3PO',
      },
      {
        id: '3',
        name: 'R2-D2',
      },
      {
        id: '4',
        name: 'Darth Vader',
      },
      {
        id: '5',
        name: 'Leia Organa',
      },
      {
        id: '6',
        name: 'Owen Lars',
      },
      {
        id: '7',
        name: 'Beru Whitesun lars',
      },
      {
        id: '8',
        name: 'R5-D4',
      },
      {
        id: '9',
        name: 'Biggs Darklighter',
      },
      {
        id: '10',
        name: 'Obi-Wan Kenobi',
      },
      {
        id: '11',
        name: 'Anakin Skywalker',
      },
      {
        id: '12',
        name: 'Wilhuff Tarkin',
      },
      {
        id: '13',
        name: 'Chewbacca',
      },
      {
        id: '14',
        name: 'Han Solo',
      },
      {
        id: '15',
        name: 'Greedo',
      },
      {
        id: '16',
        name: 'Jabba Desilijic Tiure',
      },
      {
        id: '17',
        name: 'Wedge Antilles',
      },
      {
        id: '18',
        name: 'Jek Tono Porkins',
      },
      {
        id: '19',
        name: 'Yoda',
      },
      {
        id: '20',
        name: 'Palpatine',
      },
      {
        id: '21',
        name: 'Boba Fett',
      },
      {
        id: '22',
        name: 'IG-88',
      },
      {
        id: '23',
        name: 'Bossk',
      },
      {
        id: '24',
        name: 'Lando Calrissian',
      },
      {
        id: '25',
        name: 'Lobot',
      },
      {
        id: '26',
        name: 'Ackbar',
      },
      {
        id: '27',
        name: 'Mon Mothma',
      },
      {
        id: '28',
        name: 'Arvel Crynyd',
      },
      {
        id: '29',
        name: 'Wicket Systri Warrick',
      },
      {
        id: '30',
        name: 'Nien Nunb',
      },
      {
        id: '31',
        name: 'Qui-Gon Jinn',
      },
      {
        id: '32',
        name: 'Nute Gunray',
      },
      {
        id: '33',
        name: 'Finis Valorum',
      },
      {
        id: '34',
        name: 'Padmé Amidala',
      },
    ];
    commit('setPlayers', players);
  },
};
