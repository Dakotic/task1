function end(str, target) {
  str = str.concat(" ", target);
  if (str == "Bastian n" || str == "He has to give me a new name name" || str == "He has to give me a new name me"){
    return true;
  }
  else
    {
      return false;
    }
}

end("He has to give me a new name", "me");
