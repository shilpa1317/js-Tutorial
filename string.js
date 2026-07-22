name1 ='Shilpa'
name2="landge"
name= name1+" "+name2
console.log(name)


str =`i like to learn js`
console.log(str)
console.log(name.length)
console.log(str.length)
console.log(name.charAt(0))
console.log(name[0])
console.log(name.toUpperCase())
console.log(name.toLowerCase())


str1="Hello"
str2="world"
msg= str1.concat(" ",str2,"!!!")
console.log(msg)

indexNumber = name.indexOf("d")
console.log(indexNumber)

console.log(str1.indexOf("h"))

indexNumber1 = str1.indexOf("Hello")
console.log(indexNumber1)//string exit then 0

indexNumber2 = str1.indexOf("hello")
console.log(indexNumber2)// if dont exit then -1

//true false boolean
console.log(msg.includes('hello'))
console.log(msg.includes('Hello'))
//startswith return true false
console.log(msg.startsWith("hello"))
console.log(msg.startsWith("Hello"))

console.log(msg.endsWith('!!'))
console.log(msg.endsWith('world!!!'))

//substring methods
//slice
substr=msg.slice(0,4)//starting index and ending index
console.log(substr)
substr1=msg.slice(1,7)
console.log(substr1)
//substring both parameter is index
substr3= msg.substring(0,4)
console.log(substr3)
substr4= msg.substring(1,7)
console.log(substr4)

//substr.. 2nd parameter is length
console.log(msg.substr(0, 4));
console.log(msg.substr(1, 7));
// console.log(msg.substr(3,5))//hello world
// console.log(msg.substring(3,5))




//trim()
msg1= "        Hello                   "
console.log(msg1.length)
console.log(msg1.trim().length)
console.log(msg1.trimStart().length)
console.log(msg1.trimEnd().length)
//replace
console.log(str.replace('like','love'))
msg3 = "it's oky  if you don't like computer programing it's a smart people thing anyway"
console.log(msg3.replace('smart','genius'))
//replaceall used to replace all same words
console.log(msg3.replaceAll("it's","It's"))

//split
fruitsString ='apple banana mango'
fruitarray = fruitsString.split(" ")
console.log(fruitarray)