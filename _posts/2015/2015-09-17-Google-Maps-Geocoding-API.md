---
layout: post
title: Google Maps Geocoding API
categories:
- Google Maps
tags:
- Google Maps, Geocoding
---

     
	 
## Google Maps Geocoding API
  Reference: https://developers.google.com/maps/documentation/geocoding/intro#ReverseGeocoding

  The Google Maps Geocoding API
## Request URL
https://maps.googleapis.com/maps/api/geocode/output?parameters
https://maps.google.com/maps/api/geocode/output?parameters
https://maps.google.cn/maps/api/geocode/output?parameters

    enum ouput {
        case json
        case xml
    }
json recommended
## Geocoding
### Required parameters
- `address`
    or `components`: also accepted as optional when address supplied
- `key`
    Application API key

### Optional parameters
- `bounds`
- `language`
- `region`
- `components`  

### Example
https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=API_KEY

## Reverse Geocoding
### Required parameters
`latlng` :tuple Double, Double
    or `place_id`  
### Optional parameters
- `key` Application API key
- `language` supported:https://developers.google.com/maps/faq#languagesupport zh-CN
- `result_type`  One or more address types, separated by a pipe (|). Examples of address types: `country`, `street_address`, `postal_code`. supported: https://developers.google.com/maps/documentation/geocoding/intro#Types
    Note: This parameter is available only for requests that include an API key or a client ID.
- `location_type`
    One or more location types, separated by a pipe (|). Specifying a type will restrict the results to this type. If multiple types are specified, the API will return all addresses that match any of the types. Note: This parameter is available only for requests that include an API key or a client ID. The following values are supported:
    * "ROOFTOP" restricts the results to addresses for which we have location information accurate down to street address precision.
    * "RANGE_INTERPOLATED" restricts the results to those that reflect an approximation (usually on a road) interpolated between two precise points (such as intersections). An interpolated range generally indicates that rooftop geocodes are unavailable for a street address.
    * "GEOMETRIC_CENTER" restricts the results to geometric centers of a location such as a polyline (for example, a street) or polygon (region).
    * "APPROXIMATE" restricts the results to those that are characterized as approximate.

### Example
https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=API_KEY
## Reponse
        json:{ results: [address_components],
                status: StatusCodes
        }
        enum StatusCode: String {
                case OK = "OK"
                case ZERO_RESULTS
                case OVER_QUERY_LIMIT
                case REQUEST_DENIED
                case INVALID_REQUEST
                case UNKNOW_ERROR
        }
## Limit
- 2500 requests/day  
- 10 requests/second

----
