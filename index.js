/**
 * Web:  www.agenzzia.com
 * Author: Branko Stevanovic (branko@agenzzia.com)
 * Date: 25-Jan-21
 * Time: 10:40
 */
"use strict";

function doCopy(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if(null == obj || 'object' !== typeof obj){
    return obj;
  }

  // Handle Date
  if(obj instanceof Date){
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if(obj instanceof Array){
    copy = [];
    for(let i = 0, len = obj.length; i < len; i++) {
      copy[i] = DeepClone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if(obj instanceof Object){
    copy = {};
    for(const attr in obj) {
      if(obj.hasOwnProperty(attr)){
        copy[attr] = DeepClone(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error('Unable to copy obj! Unsuported type.');
}

function DeepClone(obj) {

  try {
    return doCopy(obj)
  } catch(e) {
    console.log(e);
  }

}

export default DeepClone

