<!-- todo: INTERMIDAITE MONGODB -->

1 - how can i perform case-insensitive search in mongoose✅✅

    H and h be same
    dont do direct search
    use regular expression
      // new RegExp(search,flag)

    // problem is ki agr suffix same hoga ya jo bhi reges ko milega,, aur jis bhi data me hoga wo return krega

    like himanshu, himanshuiii
    regx me dono aayega himanshu, himanshuiiii

    to iske liye hm iska use krte hai::
    
    ^ -> shuruat kais eho

    $ -> end kaisa ho

    ^"hello"$

2 - how do i find docs where an array field contains all of a set of values✅
3 - how can i search for a document whith  specific date range in mongoose✅
4 - how can i filter document based on the existence of a field in mongoose✅
5 - how can i  filter a docs. based on a specific fielf length in mongoose✅
