function isSubsequence(s, t) {
  let lettersToMatch = "";
  let idx = 0;

  for (let i = 0; i < t.length; i += 1) {
    if (t[i] === s[idx]) {
      lettersToMatch += t[i];
      idx += 1;
    }
    else if (lettersToMatch === s) {
      return true;
    }
  }

  return (lettersToMatch === s);
}
