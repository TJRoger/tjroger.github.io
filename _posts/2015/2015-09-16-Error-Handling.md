---
layout: post
title: Error Handling
categories:
- Swift 2.0
tags:
- Swift 2.0, Error Handling
---

     
	 
## Error Handling
### Four ways to handle errors
> “NOTE
> 
> Error handling in Swift resembles exception handling in other languages, with the use of the try, catch and throw keywords. Unlike exception handling in many languages—including Objective-C—error handling in Swift does not involve unwinding the call stack, a process that can be computationally expensive. As such, the performance characteristics of a throw statement are comparable to those of a return statement.”
> 
> Excerpt From: Apple Inc. “The Swift Programming Language (Swift 2 Prerelease).” iBooks. https://itun.es/us/k5SW7.l

#### Propagating Errors Using Throwing Functions
Propagate errors from a function to the code that calls that function. Write `throws` keyword in the function's declaration after its parameters(before the return arrow).
methods call throwing function must either handle the errors directly--using a do-catch statement, try?, or try!--or continue to propagate them
> “NOTE
> 
> Only throwing functions can propagate errors. Any errors thrown inside a nonthrowing function must be handled inside the function.”
> 
> Excerpt From: Apple Inc. “The Swift Programming Language (Swift 2 Prerelease).” iBooks. https://itun.es/us/k5SW7.l

#### Handle errors  using a do-catch statement
```do-catch-template
do {
    try <#expression#>
        <#statements#>
} catch <#pattern 1#> {
    <#statements#>
} catch <#pattern 2#> where <#condition#> {
    <#statements#>
}
```
```
enum MyError: ErrorType {
    case UserError
    case NetworkError
    case DiscoveryedError
}

func doStuff() throws -> String {
    print("Do stuff 1")
    print("Do stuff 2")
    throw MyError.NetworkError
    return "Some string"
}

do {
    try doStuff()
        print("Success");
} catch MyError.NetworkError {
    print("A network error occurred")
} catch {
    print("An error occurred.")
}

```

#### Handle errors as an optional value
use `try?` to handle an error by converting it to an optional value

#### Assert that errors will not occur  
use `try!` to disable error propagation when you know a throwing function or method won't, in fact, throw an error at runtime.

### Specifying Cleanup Actions
use `defer` to clean up after the code block has finished excuting.

----
