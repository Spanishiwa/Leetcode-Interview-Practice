function isSubsequence(s, t) {
  const lettersToMatch = s.split('');

  for (let i = 0; i < t.length; i += 1) {
    if (t[i] === lettersToMatch[0]) {
      lettersToMatch.shift(1);
    }
  }

  return (lettersToMatch.length === 0);
}
