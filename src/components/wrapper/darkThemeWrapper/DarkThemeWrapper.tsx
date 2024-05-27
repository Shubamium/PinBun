"use client";
import { color } from "console-log-colors";
import React, { CSSProperties, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className: string;
  style: CSSProperties;
};

export default function DarkThemeWrapper({
  children,
  className,
  style,
}: Props) {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    // return
    const intervalId = setInterval(() => {
      setTheme(false);
      console.log("switching theme : " + color.black("dark"));

      const glitchedTitles = [
        `👁P̷i̷n̵ ̴b̵u̴n̸`,
        `P̴̫͂í̵̟n̵̢̆ ̷̤̎b̶͕̈́ȗ̷̥n̶͙̆👁`,
        `P̵̤͍̬̃i̸̟̘̝̒͆̈👁n̷̡͔̤̍͛ ̴̡̛̻́͋̑b̵͉͖̰̾u̵͍̍n̶̨̳̈̎`,
        `P̷̧̔̽̽̅̏̔͠i̸͉̗͚̲̘̳̖͒̊̔̚͘͘̚n̶̢̩̰̈́ ̷̧̋͂͘b̶̪̩̊͌👁u̶̧̞̳͍̜̝̓͋̌͜n̸̑̎͒̊͐̚͜͝`,
        `P̸̧͙̗͈͕͈̯̮̤͍̹̝͍̰̀͐̓̀̀͌͂̈́͠͠👁ǐ̷̢̾̄̈n̴̛̦̦͇̩͕̘̥̯̲͋̅̀͂̎̈́́̔͆͘ ̴̛̹͊͌͐̉́̎͗͗̌͗͗̚b̴̡̞̳̮̭̲̗̤͙͔̲͙̓ü̴̜͉̰͓̗̠̖̟̲̩̺̍̏̅͆͊̾̃̋̈́̚͠n̵̼͓̯̻̟̖͕̞̖͖̔̕`,
        `P̴̨̡̧̥̫̞̲̘̲͎͈̣̥̘̟͊̅̎͆̑́̑̈̎̃̀̾͛͘͝͠î̵͚̩̲͖̩͎̩̞̖̼͓͈̠̼̳̑̈̑̌̃̌̅̊̚̕͘͜͝ṅ̷̨̛̘̱̞̦̺͔̜̺̂̀̀̑̀͛̋͆͗̏͌̆̉́̚͜ ̸͓̳̪̜̅̎̃͐̋̌̃̎̎́̓͊͝͝b̵̳̀͗͌̓́̂̄͌̑̉̕👁ừ̴̛͇̮̜̣̒́̐̐́́̈̒̈́̃́̿̿͠͝͠͝ͅn̸̢͉̗̘͔̼̤͚̈́͛̈́̊͊͆̉̒̉́̈́̑̾̓͘͝͝
				̶̡̟̘̞̐͊̏̽̽̾͊͠`,
        `
				👁^v^v^👁
				`,
      ];

      for (let i = 0; i < glitchedTitles.length; i++) {
        setTimeout(() => {
          document.title =
            glitchedTitles[Math.floor(Math.random() * glitchedTitles.length)];
        }, i * 50);
      }

      setTimeout(() => {
        document.title = `y̴̭̩̰͎͖̹͖̗͍̺̾̈́͒́́̈̾͐̅̕͘o̶̯̮͔̘̳̫̘̹̰̭̎͐̅̈̾̎ͅu̸̢̡͚͔̳̻̲͛̇̔͛̍̄͊̊̅͊͘͜͠r̸̡̨̯̳̟̞̠̟͈̫̒͐͝ ̵̻̪̻̭̯͈̬̟̦͆̌̓̐b̵͓͎͚̃̐͋͐͒̍̈́̒͒ë̴̛̟̠̖̱͕͍͇̮̤̖̱̮͔̭́̑ţ̴̰͌̊͛̌̔ẗ̴̨̪̟̞̖̲̜̰͈̝̼͚̼͇̤́͗̉̃̔̏̕͠ė̵̢̧̯̣̩͉͉̭͍͇͓͗͜ŗ̷̨̢̨̩̯̮͉̺͓͔̞̔̈́̀͋̉͑̓̚ ̴̨̨͎̲̝͈̎͐͐͜͝m̵̢̙̩̱̫̠̦̺̗͙̥̟͆̆̿̈̋̈́̚͘͘ǫ̴̤̘͉͙͇̮̫̎͌́̓͜͜ţ̸̡̟͚̲̤͈͚̦̟̠͎̘͍͌h̵̡̞̥͍̞͈̹͑́̈́̔̿͌̀̏͂́͐̆̌͜ȩ̴̛̹̙̪͇͙̯̭̃̏̈́͗͋̍̓̀̈́̄̌̀͜͝r̶̹͙̘̬͚͍͌̐̽͛͌̀̅́̋̔`;
      }, 2000);

      setTimeout(() => {
        setTheme(true);
        document.title = "Pin Bun";
      }, 4000);
      console.log("switching theme : " + color.redBright("light"));
    }, 10 * 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <body
      className={className + `-theme ${!theme ? "dark" : "light"} `}
      style={style}
    >
      {children}
    </body>
  );
}
