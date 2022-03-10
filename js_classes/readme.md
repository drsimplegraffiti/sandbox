<kbd>console.log</kbd> is one the debugging weapon or logger we use as javascript developer. But this tiny little snippets can do the following to our code base.
![log](https://media.giphy.com/media/l0HUcCoNIvfjmPZL2/giphy.gif)

🎯 These functions are synchronous when the destination is a terminal or a file, so they are not suitable for production.

🎯 Impact our app performance and increase our computation power and time at production level.

🎯 Also creates a variable and consumes memory, however minute.

🎯 Expose some information which might put your app at risk.
Imagine you the code snippet below

```javascript
const { email, password } = req.body;
const user = await User.findOne({ email });
console.log(user);
if (!user || user === null) {
  return errorResMsg(res, 400, "this email does not exist");
}

if (!user.isVerified) {
  return errorResMsg(
    res,
    401,
    "Unverified account: please check your email to verify your account "
  );
}
const confirmPassword = await bcrypt.compare(password, user.password);
if (!confirmPassword) {
  return res.status(400).json({
    status: "error",
    message: "User password is incorrect",
  });
}
//create token
const token = await jwt.sign(
  {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
  },
  process.env.USER_SECRET,
  {
    expiresIn: "2d",
  }
);
console.log(token);
const dataInfo = {
  message: "User Login Successful",
  token: token,
  userId: user._id,
};
return successResMsg(res, 200, dataInfo);
```

In the code above, i logged the <mark>user</mark> and the <mark>token</mark> and this can be used by attackers to steal information from our app.

With that being said, let's look at two ways to remove `console.log` from our app

## Vscode method

This method uses the search icon and regex to remove all `logs`

```javascript
// Classes are templates for creating objects
// Method 1: Class function

class Person {
  constructor(name, age, occupation) {
    this.age = age;
    this.name = name;
    this.occupation = occupation;
  }

  todo() {
    console.log("kill");
  }
}

const createPerson = new Person("Abayomi", 78, "dev");
console.log(createPerson.todo());

// Method 2: Class Expression
const doSomething = class HouseChores {
  constructor(cut, clean, arrange) {
    this.cut = cut;
    this.clean = clean;
    this.arrange = arrange;
  }
};

const datInfo = {
  cut: (doSomething.cut = "grass"),
  clean: (doSomething.clean = "cars"),
  arrange: (doSomething.arrange = "house"),
};

console.log(datInfo);

// static types
class Music {
  constructor(viola, trombone) {
    this.viola = viola;
    this.trombone = trombone;
  }

  static musicConstant = "drums";
}

const result = new Music("Eb", "F#");
console.log(result);
console.log(Music.musicConstant); // static types are called without instantiating
```

- Click on the search Icon
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oeqslwqqkez8xvvylb7z.PNG)

---

- Type console.log
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/etxqh51jx101cfuuksga.PNG)

---

- Click the regex option
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g3mbaimh3pmech7988a1.PNG)

---

- Click replace all

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iuepy41803d4c368el0d.PNG)

---

- Click the replace option

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mpxt4gs67jfj6tt64bxr.PNG)

---

- Result:
  ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t1q70w9vq36zsrt4gark.PNG)

---

## Method 2:

While method one is cool, i consider it as been destructive way. what if you need the logs during development mode again 🙄

Here is the work around.

Create `.env` file in your root project with <kbd>NODE_ENV=development</kbd>

Install the dotenv package and configure it

```javascript
const env = require("dotenv");
env.config();
```

Now let's test our environment variable with our friend

> console.log(process.env.NODE_ENV);

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2oa8e68pbrwhhkqg9cwp.PNG)

The last thing to write is a simple line of code

```javascript
if (process.env.NODE_ENV === "development") {
  console.log = function () {};
}
```

The code above says if our environment variable is in development mode, output an empty function that says nothing.
