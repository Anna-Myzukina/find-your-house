# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
houses = House.create([
    {
        name: "Beautiful Family Appartement",
        image_url: "https://regiodom.pl/portal/sites/regiodom/files/imagecache/755x/images/regiodompl/63/edge_14_0.jpg?n3ej9n"
    },
    {
        name: "Modern House",
        image_url: "https://regiodom.pl/portal/sites/regiodom/files/imagecache/755x/images/regiodompl/63/edge_12_0.jpg?n3ej9h"
    },
    {
        name: "Fancy House",
        image_url: "https://regiodom.pl/portal/sites/regiodom/files/imagecache/755x/images/regiodompl/63/edge_7_0.jpg?n3ej66"
    },
    {
        name: "Art House",
        image_url: "https://images.adsttc.com/media/images/5d6f/033a/284d/d1d1/4a00/01ca/newsletter/PU-MOBIUS_GREENLINE-87.jpg?1567556363"
    },
    {
        name: "Pink House",
        image_url: "https://images.adsttc.com/media/images/5d6f/033a/284d/d1d1/4a00/01ca/newsletter/PU-MOBIUS_GREENLINE-87.jpg?1567556363"
    },
    {
        name: "European House",
        image_url: "https://regiodom.pl/portal/sites/regiodom/files/imagecache/755x/images/regiodompl/63/edge_7_0.jpg?n3ej66"
    }
])

favourites = Favourite.create([
    {
        title: "Good house",
        description: 'I like this house',
        score: 5,
        house: houses.first
    },
    {
        title: "Bad house",
        description: 'I don`t like this house',
        score: 1,
        house: houses.first
    }
])
