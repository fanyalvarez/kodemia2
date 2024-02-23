const getAll = async () => {
    const resp = await fetch(
        "https://cards-27ec0-default-rtdb.firebaseio.com/user/.json"
    )
    const data = await resp.json()
    const arrayData = Object.keys(data).map((key) => ({
        key,
        ...data[key],
    }));
    console.log(arrayData);
    return arrayData;
}

const postUser = async (userObject) => {
    const response = await fetch(
      "https://cards-27ec0-default-rtdb.firebaseio.com/user/.json",
      {
        method: "POST",
        body: JSON.stringify(userObject),
      }
    );
    const data = response.json();
    return data;
  };

  export { getAll, postUser };