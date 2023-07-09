const { createApp } = Vue;

createApp({
    data() {
        return {
            activeUser: 0,
            newText: '',
            newSearch: '',
            newResponse: '',
            receivingUser: '',
            contactWriting: false,
            hour: NaN,
            minutes: NaN,
            contacts: [
                {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                read: true
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                read: true
                },
                {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                read: true
                },
                {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                read: true
                }
                ],
                },
                {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                read: true
                },
                {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                read: true
                },
                {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                read: true
                }
                ],
                },
                {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                read: true
                }
                ],
                },
                {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                read: true
                }
                ],
                },
                {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                read: true
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                read: true
                }
                ],
                },
                {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                read: true
                }
                ],
                },
                {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                read: true
                },
                {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                read: true
                },
                {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                read: true
                }
                ],
                }
                ],
        }
    },
    methods:{
        changeActiveUser(i) {
            this.activeUser = i;
            this.newText = '';
            this.contacts[this.activeUser].messages[this.contacts[this.activeUser].messages.length - 1].read = true;
        },
        sendMessage() {
                if (this.newText.trim() != '') {
                    this.contacts[this.activeUser].messages.push( {
                        date: this.getCurrentTime(),
                        message: this.newText,
                        status: 'sent',
                        read: true
                    } );
                    this.newText = '';
                    this.receivingUser = this.activeUser;
                    this.contactWriting = true;
                }
        },
        timeout() {
            setTimeout(()=>{
                this.answer()
             },2000);
        },
        answer() {
                // axios.get("https://random-data-api.com/api/v2/beers").then((response) => {
                //     const beer = response.data
                //     this.newResponse = beer.brand + ' it\'s a ' + beer.style + ' and it uses ' + beer.malts + ' malts'
                //     this.contacts[this.receivingUser].messages.push({
                //         date: this.getCurrentTime(),
                //         message: this.newResponse,
                //         status: 'received'
                //     });
                //     this.newText = '';
                //     this.contactWriting = false;
                // })
                const lastMessage = this.contacts[this.receivingUser].messages[this.contacts[this.receivingUser].messages.length -1].message.toLowerCase();
                
                if(lastMessage.includes("ciao")){
                    this.newResponse = 'Ciao a te';
                }
                else if(lastMessage.includes("come stai?")){
                    this.newResponse = 'Potrebbe andare meglio, tu?';
                }
                else if(lastMessage.includes("anni hai?")){
                    this.newResponse = 'Quanti me ne dai?';
                }
                else if(lastMessage.includes("colore")){
                    this.newResponse = 'Lightcoral ovviamente';
                }
                else if(lastMessage.includes("pizza")){
                    this.newResponse = 'Preferisco la bagna cauda';
                }
                else if(lastMessage.includes("culo")){
                    this.newResponse = 'Non si dicono parolacce';
                }
                else if(lastMessage.includes("barzelletta")){
                    this.contacts[this.receivingUser].messages.push({
                        date: this.getCurrentTime(),
                        message: `Sai qual è la differenza fra un elefante e una fragola?`,
                        status: 'received'
                    });

                    this.newResponse = `Che l'elefante ha gli orecchioni e la fragola il morbillo.`
                }
                else{
                    this.newResponse = 'Che stai a dì?!'
                }
                this.contacts[this.receivingUser].messages.push({
                        date: this.getCurrentTime(),
                        message: this.newResponse,
                        status: 'received',
                        read: false
                })
                this.newText = '';
                this.contactWriting = false;   
        },
        searchContact() {
            for (let i = 0; i < this.contacts.length; i++) {
                if (!this.contacts[i].name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    this.contacts[i].visible = false;
                }
                else{
                    this.contacts[i].visible = true;
                }
            }
        },
        transformDate(inputString) {
            const parts = inputString.split(' ');
            const date = parts[0].split('/');
            const formattedDate = date[1] + '/' + date[0] + '/' + date[2];
            const outputString = formattedDate + ' ' + parts[1];
            return outputString;
        },
        getTime(j, i) {
            const myDate = new Date(this.transformDate(this.contacts[j].messages[i].date));
            hour  = myDate.getHours().toString()
            minutes = myDate.getMinutes().toString()
            if (minutes.length == 1) {
                return [hour, ':0', minutes].toString().replaceAll(',', '');
            } else {
                return [hour, ':', minutes].toString().replaceAll(',', '');
            }
        },
        getCurrentTime() {
                const now = new Date();
                
                const day = now.getDate();
                const month = now.getMonth() + 1;
                const year = now.getFullYear();
                
                const hours = now.getHours();
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();
                
                const formattedTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
                
                return formattedTime;
        },
        deleteMessage(i){
            this.contacts[this.activeUser].messages.splice(i, 1);
        }
    }
}).mount('#app')