# Notes for Walking Dead API

> December 12, 2021 12:08pm

I may use Dracula UI for the landing page of this project. I just have to see how this builds on
Heroku if I do that.

https://ui.draculatheme.com/installation

I have to focus on the functionality of the project first and then work on the other aspects.

---

> December 13, 2021 4:22pm

Next I am going to setup the `controllers` folder and put my functions in there. I have already
setup my `routes` folder.

But I need to modularize even more so as I go through Smilga's course.

> December 16, 2021

This is cool:

https://www.convertsimple.com/convert-javascript-to-json/

---

> December 17, 2021

**Code Snippets to Save for Later - or for reference:**

```js
app.all("*", (req, res) => {
  res.status(404).send("Requested Resource Not Found");
});
```

```js
router.get("/lookup", (req, res) => {
  const { search, limit } = req.query;
  let queriedCharacters = [...characters];
  if (search) {
    queriedCharacters = characters.filter((character) => {
      return character.name.startsWith(search);
    });
  }

  if (limit) {
    queriedCharacters.slice(0, Number(limit));
  }
  if (queriedCharacters < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(queriedCharacters);
});
```

```js
router.get("/:characterId", (req, res) => {
  const { characterId } = req.params;
  const singleCharacter = characters.find((character) => character.id === Number(characterId));
  if (!singleCharacter) {
    res.status(404).send("Character not available");
  }
  return res.json(singleCharacter);
});
```

---
