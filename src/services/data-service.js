import imageUrl from './image-books.png';

export default class DataService {
    data = [
        {
            "id": 1,
            "price": 10,
            "image": `${imageUrl}`,
            "title": "Branded",
            "genre": "Western",
            "author": "Fabe Cristofaro"
        },
        // {"id": 2,"price": 20,"image": `${imageUrl}`,"title": "Marie-Jo and Her 2 Lovers (Marie-Jo et ses 2 amours)","genre": "Comedy|Drama","author": "Bartel Rodwell"},
        // {"id": 3,"price": 30,"image": `${imageUrl}`,"title": "Shadow, The","genre": "Action|Adventure|Fantasy|Mystery","author": "Hayyim di Rocca"},
        // {"id": 4,"price": 40,"image": `${imageUrl}`,"title": "They Made Me a Criminal (I Became a Criminal) (They Made Me a Fugitive)","genre": "Crime|Drama","author": "Catlee Meeks"},
        // {"id": 5,"price": 50,"image": `${imageUrl}`,"title": "Southern District (Zona Sur)","genre": "Drama","author": "Estrellita Goskar"},
        // {"id": 6,"price": 60,"image": `${imageUrl}`,"title": "Fatal Beauty","genre": "Action|Comedy|Crime|Drama","author": "Lexis Blincoe"},
        // {"id": 7,"price": 70,"image": `${imageUrl}`,"title": "Tokyo Joe","genre": "Drama|Thriller","author": "Wilhelmina Cater"},
        // {"id": 8,"price": 80,"image": `${imageUrl}`,"title": "Safe","genre": "Thriller","author": "Tamar Eivers"},
        // {"id": 9,"price": 90,"image": `${imageUrl}`,"title": "Basket Case 3: The Progeny","genre": "Comedy|Horror","author": "Timmie Seleway"},
        // {"id": 10,"price": 100,"image": `${imageUrl}`,"title": "8 Seconds","genre": "Drama","author": "Nolly Kirkbright"},
        // {"id": 11,"price": 110,"image": `${imageUrl}`,"title": "Nanking","genre": "Documentary|War","author": "Griffie Breckwell"},
        // {"id": 12,"price": 120,"image": `${imageUrl}`,"title": "All the Vermeers in New York","genre": "Comedy|Drama|Romance","author": "Guillema Sleight"},
        // {"id": 13,"price": 130,"image": `${imageUrl}`,"title": "Ghosts of Girlfriends Past","genre": "Comedy|Fantasy|Romance","author": "Cindee Comello"},
        // {"id": 14,"price": 140,"image": `${imageUrl}`,"title": "Welcome to Macintosh","genre": "Documentary","author": "Rori Filgate"},
        // {"id": 15,"price": 150,"image": `${imageUrl}`,"title": "The War at Home","genre": "Documentary|War","author": "Rebecca Baistow"},
        // {"id": 16,"price": 160,"image": `${imageUrl}`,"title": "Wayne's World","genre": "Comedy","author": "Staford Godbert"},
        // {"id": 17,"price": 170,"image": `${imageUrl}`,"title": "Alice in Wonderland","genre": "Adventure|Animation|Children|Fantasy|Musical","author": "Rena Killeley"},
        // {"id": 18,"price": 180,"image": `${imageUrl}`,"title": "Funny Thing Happened on the Way to the Forum, A","genre": "Comedy|Musical","author": "Janeta Lowers"},
        // {"id": 19,"price": 190,"image": `${imageUrl}`,"title": "Oz the Great and Powerful","genre": "Action|Adventure|Fantasy|IMAX","author": "Washington Thams"},
        // {"id": 20,"price": 200,"image": `${imageUrl}`,"title": "Pee-wee's Big Adventure","genre": "Adventure|Comedy","author": "Tiffani Kinnar"},
        // {"id": 21,"price": 210,"image": `${imageUrl}`,"title": "Quebrando o Tabu","genre": "Documentary","author": "Kathi Manktelow"},
        // {"id": 22,"price": 220,"image": `${imageUrl}`,"title": "Triumph of the Nerds, The: The Rise of Accidental Empires","genre": "Documentary","author": "Chris Pitcaithly"},
        // {"id": 23,"price": 230,"image": `${imageUrl}`,"title": "Wish Me Away","genre": "Documentary","author": "Coriss Hatrey"},
        // {"id": 24,"price": 240,"image": `${imageUrl}`,"title": "New One-Armed Swordsman, The (Xin du bi dao)","genre": "Action|Drama|War","author": "Emelita Hallagan"},
        // {"id": 25,"price": 250,"image": `${imageUrl}`,"title": "Mephisto","genre": "Drama|War","author": "Berne Haldin"},
        // {"id": 26,"price": 260,"image": `${imageUrl}`,"title": "3 Ring Circus","genre": "Comedy","author": "Darn Darnell"},
        // {"id": 27,"price": 270,"image": `${imageUrl}`,"title": "Igor","genre": "Animation|Comedy","author": "Twyla Izat"},
        // {"id": 28,"price": 280,"image": `${imageUrl}`,"title": "Which Way Home","genre": "Documentary","author": "Daisy Vayro"},
        // {"id": 29,"price": 290,"image": `${imageUrl}`,"title": "Circumstance","genre": "Drama","author": "Korrie Burgoine"},
        // {"id": 30,"price": 300,"image": `${imageUrl}`,"title": "301, 302 (301/302)","genre": "Horror|Mystery|Thriller","author": "Corrina Makiver"},
        // {"id": 31,"price": 310,"image": `${imageUrl}`,"title": "Elena","genre": "Drama","author": "Sydelle Mallett"},
        // {"id": 32,"price": 320,"image": `${imageUrl}`,"title": "Evilspeak","genre": "Horror|Sci-Fi","author": "Willard Glaum"},
        // {"id": 33,"price": 330,"image": `${imageUrl}`,"title": "Slasher","genre": "Documentary","author": "Jephthah Bartolomeazzi"},
        // {"id": 34,"price": 340,"image": `${imageUrl}`,"title": "Mata Hari","genre": "Drama|Romance","author": "Tabbi Frankowski"},
        // {"id": 35,"price": 350,"image": `${imageUrl}`,"title": "Rabid Grannies (Mémés cannibales, Les)","genre": "Comedy|Horror","author": "Tawnya Pymar"},
        // {"id": 36,"price": 360,"image": `${imageUrl}`,"title": "Linda Linda Linda","genre": "Comedy|Drama","author": "Kandace Vanichev"},
        // {"id": 37,"price": 370,"image": `${imageUrl}`,"title": "That Forsyte Woman","genre": "Drama|Romance","author": "Jayson Brumpton"},
        // {"id": 38,"price": 380,"image": `${imageUrl}`,"title": "Change of Habit","genre": "Drama","author": "Sutherland Southcombe"},
        // {"id": 39,"price": 390,"image": `${imageUrl}`,"title": "Bamba, La","genre": "Drama","author": "Meryl Colwill"},
        // {"id": 40,"price": 400,"image": `${imageUrl}`,"title": "Beverly Hills Cop II","genre": "Action|Comedy|Crime|Thriller","author": "Mahala Sherston"},
        // {"id": 41,"price": 410,"image": `${imageUrl}`,"title": "Changeling","genre": "Crime|Drama|Mystery","author": "Rozelle Dickons"},
        // {"id": 42,"price": 420,"image": `${imageUrl}`,"title": "Time Without Pity","genre": "Crime|Drama|Mystery","author": "Lian Gauche"},
        // {"id": 43,"price": 430,"image": `${imageUrl}`,"title": "Grand Canyon","genre": "Crime|Drama","author": "Tillie Remirez"},
        // {"id": 44,"price": 440,"image": `${imageUrl}`,"title": "Dam Busters, The","genre": "Action|Drama|War","author": "Crissie Pullar"},
        // {"id": 45,"price": 450,"image": `${imageUrl}`,"title": "Small Cuts (Petites coupures)","genre": "Drama|Romance","author": "Darnell Godly"},
        // {"id": 46,"price": 460,"image": `${imageUrl}`,"title": "The Seven Males","genre": "Comedy|Western","author": "Dolly Bodley"},
        // {"id": 47,"price": 470,"image": `${imageUrl}`,"title": "Restless Souls (Bag det stille ydre)","genre": "Drama|Horror|Mystery","author": "Terri Puckham"},
        // {"id": 48,"price": 480,"image": `${imageUrl}`,"title": "Looking for Eric","genre": "Comedy|Drama|Fantasy","author": "Niko Veare"},
        // {"id": 49,"price": 490,"image": `${imageUrl}`,"title": "Gypsy Moths, The","genre": "Drama","author": "Parker Theodoris"},
        // {"id": 50,"price": 500,"image": `${imageUrl}`,"title": "Prospero's Books","genre": "Drama|Fantasy","author": "Rafaello Blackett"},
    ];

    getItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let number = Math.floor(Math.random() * 100);
                console.log(number)
                if (number > 25) {
                    resolve(this.data);
                } else {
                    reject(new Error('Something bad happened'));
                }
            }, 800);
        });
    }
}
