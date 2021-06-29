const router = require("express").Router();
const { instagram } = require("instagram-scraper-api");

router.post("/api/get-user-data", async (req, res) => {
  // return if the username is empty
  const username = req.body.username;

  // get the username passed from da front end
  try {
    // const data = await instagram.user(username);
    // console.log(data);
    // res.json(data);
    res.json({
      id: "3132929984",
      category: null,
      fullName: "Will Smith",
      bio: "New playground. Same kid from West Philly.⁣⁣⁣",
      website: "https://fb.me/RTTWillTakeover",
      followersCount: 50410933,
      followingsCount: 185,
      isPrivate: false,
      isVerified: true,
      avatar:
        "https://scontent-prg1-1.cdninstagram.com/v/t51.2885-19/s320x320/126947726_281263379986327_6281262352239007520_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_ohc=47FwFhMeHegAX_G_Efc&tp=1&oh=cb0674289129567814e591e1256131d2&oe=5FE33AAD",
      fbPage: null,
      postsCount: 1052,
      posts: [
        {
          id: "2447030206582756101",
          shortcode: "CH1mQIKBBMF",
          photo:
            "https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/e35/126151383_156030889537953_5358114580816397186_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=SQAb3GhyBBwAX-KcYjc&tp=1&oh=07d2403de4db567647310872a81ab83f&oe=5FBB2897",
          isVideo: true,
          description: "This is why nobody lets me cook. #FreshPrinceReunion",
          commentsCount: 6217,
          likesCount: 1334788,
          time: 1605928764,
          location: null,
        },
        {
          id: "2446931950146244085",
          shortcode: "CH1P6TuBU31",
          photo:
            "https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/126838948_202552767996560_4560560924720673_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=doGn1dkB44gAX84lb7d&tp=1&oh=4c68a21d7f75a808b9ca21dac476554d&oe=5FE070D8",
          isVideo: false,
          description:
            "Can’t Viv with ‘em, can’t Viv without ‘em! :-) #FreshPrinceReunion",
          commentsCount: 6396,
          likesCount: 1320494,
          time: 1605917041,
          location: null,
        },
        {
          id: "2446931950146244085",
          shortcode: "CH1P6TuBU31",
          photo:
            "https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/126838948_202552767996560_4560560924720673_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=doGn1dkB44gAX84lb7d&tp=1&oh=4c68a21d7f75a808b9ca21dac476554d&oe=5FE070D8",
          isVideo: false,
          description:
            "Can’t Viv with ‘em, can’t Viv without ‘em! :-) #FreshPrinceReunion",
          commentsCount: 6396,
          likesCount: 1320494,
          time: 1605917041,
          location: null,
        },
      ],
    });
  } catch (e) {
    res
      .status(404)
      .json({ message: `couldnt find user: ${username}`, error: e });
    // get the username passed from da front end
  }
});

module.exports = router;
