function justInvoke(fn){
  return fn()
}//Your code here

function setThisWithCall(fn,thisValue,arg){
  return fn.call(thisValue,arg)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue,args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
}
