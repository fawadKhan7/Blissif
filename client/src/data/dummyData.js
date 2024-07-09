const dummyData = [
    {
        id: 1,
        username: 'john_doe',
        userImage: 'https://picsum.photos/id/1012/1000/1000',
        image: 'https://picsum.photos/id/1011/1000/1000',
        label: 'Nature',
        description: 'A beautiful view of the mountains during sunset.',
        likes: 120,
        comments: [
            {
                username: 'jane_smith',
                image: 'https://picsum.photos/id/1027/50/50',
                comment: 'Amazing view!',
                likes: 15
            },
            {
                username: 'bob_johnson',
                image: 'https://picsum.photos/id/1033/50/50',
                comment: 'I wish I was there.',
                likes: 10
            }
        ]
    },
    {
        id: 2,
        username: 'alice_wonder',
        userImage: 'https://picsum.photos/id/1013/1000/1000',
        image: 'https://picsum.photos/id/1020/1000/1000',
        label: 'Cityscape',
        description: 'The city lights at night are mesmerizing.',
        likes: 200,
        comments: [
            {
                username: 'charlie_brown',
                image: 'https://picsum.photos/id/1025/50/50',
                comment: 'The city never sleeps!',
                likes: 25
            },
            {
                username: 'lucy_vanpelt',
                image: 'https://picsum.photos/id/1038/50/50',
                comment: 'Incredible shot!',
                likes: 18
            }
        ]
    },
    {
        id: 3,
        username: 'michael_scott',
        userImage: 'https://picsum.photos/id/1016/1000/1000',
        image: 'https://picsum.photos/id/1015/1000/1000',
        label: 'Office Life',
        description: 'Another day at the office.',
        likes: 80,
        comments: [
            {
                username: 'dwight_schrute',
                image: 'https://picsum.photos/id/1011/50/50',
                comment: 'Bears. Beets. Battlestar Galactica.',
                likes: 50
            },
            {
                username: 'pam_beesly',
                image: 'https://picsum.photos/id/1012/50/50',
                comment: 'Great teamwork today!',
                likes: 30
            }
        ]
    },
    {
        id: 4,
        username: 'sarah_connor',
        userImage: 'https://picsum.photos/id/1014/1000/1000',
        image: 'https://picsum.photos/id/1032/1000/1000',
        label: 'Adventure',
        description: 'Hiking through the forest.',
        likes: 150,
        comments: [
            {
                username: 'john_reese',
                image: 'https://picsum.photos/id/1018/50/50',
                comment: 'Stay safe out there!',
                likes: 20
            },
            {
                username: 'kate_austen',
                image: 'https://picsum.photos/id/1019/50/50',
                comment: 'Looks like fun!',
                likes: 12
            }
        ]
    },
    {
        id: 5,
        username: 'tony_stark',
        userImage: 'https://picsum.photos/id/1015/300/300',
        image: 'https://picsum.photos/id/1001/1000/1000',
        label: 'Technology',
        description: 'Working on the latest Iron Man suit.',
        likes: 300,
        comments: [
            {
                username: 'steve_rogers',
                image: 'https://picsum.photos/id/1002/50/50',
                comment: 'Impressive as always.',
                likes: 40
            },
            {
                username: 'bruce_banner',
                image: 'https://picsum.photos/id/1003/50/50',
                comment: 'Can I get one of those?',
                likes: 35
            }
        ]
    }
];

export default dummyData;
