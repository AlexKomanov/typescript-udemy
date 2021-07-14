// Destructuring

const profile = {
    name: 'Jack',
    age: 32,
    coordinates: {
        lat: 20,
        long: 50
    },

    setAge(age: number) {
        this.age = age;
    }
};

const { age }: {age: number} = profile;

const {coordinates: {lat, long}}: {coordinates: {lat: number; long: number}} = profile;

