
// this file was generated by ./scripts/generate-web-api
import exec from './_exec'
import validate from './_validate'
import {Promise} from './es6-promise'

export default function mpimhistory(params, callback) {
  return new Promise(function(resolve, reject) {
    let ns = 'mpim.history'
    let err = validate(ns, params)
    if (err) {
      reject(err);
      callback && callback(err);
    }
    else {
      exec(ns, params, function(err, res) {
        if(err) {
          reject(err);
          callback && callback(err);
        } else {
          resolve(res);
          callback && callback(res);
        }
      });
    }    
  });
}
