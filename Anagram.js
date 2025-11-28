function Anagram(a,b){
 s1 = a.replace("\s", "").toLowerCase()
 s2 = b.replace("\s", "").toLowerCase()

s1=s1.split("").sort().join()
s2=s2.split("").sort().join()

console.log(s1===s2);


}



Anagram("listen","silent")
Anagram("hello","world")